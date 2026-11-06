import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const ARTIFACT_DIR = '/home/Ashik_exe/.gemini/antigravity/brain/7904b487-8b25-442a-b234-2d19ec395f98';
const PORT = 9222;

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log('Launching headless Chromium...');
  const chrome = spawn('chromium-browser', [
    '--headless=new',
    `--remote-debugging-port=${PORT}`,
    '--no-sandbox',
    '--disable-gpu',
    '--disable-dev-shm-usage',
    'about:blank'
  ]);

  await sleep(1500);

  try {
    const listRes = await fetch(`http://127.0.0.1:${PORT}/json/list`);
    const listData = await listRes.json();
    const pageTarget = listData.find(t => t.type === 'page') || listData[0];

    const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);

    let id = 1;
    const callbacks = new Map();

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.id && callbacks.has(data.id)) {
        const { resolve, reject } = callbacks.get(data.id);
        callbacks.delete(data.id);
        if (data.error) reject(data.error);
        else resolve(data.result);
      }
    };

    await new Promise((resolve) => ws.onopen = resolve);

    const send = (method, params = {}) => {
      const msgId = id++;
      return new Promise((resolve, reject) => {
        callbacks.set(msgId, { resolve, reject });
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });
    };

    await send('Page.enable');
    await send('DOM.enable');

    async function triggerFullPageScroll() {
      await send('Runtime.evaluate', {
        expression: `window.scrollTo(0, document.body.scrollHeight)`
      });
      await sleep(1200);
      await send('Runtime.evaluate', {
        expression: `window.scrollTo(0, 0)`
      });
      await sleep(800);
    }

    async function captureDesktop() {
      console.log('Capturing Desktop views...');
      await send('Emulation.setDeviceMetricsOverride', {
        width: 1440,
        height: 900,
        deviceScaleFactor: 1.5,
        mobile: false
      });

      await send('Page.navigate', { url: 'http://localhost:5173/' });
      await sleep(2500);

      // Desktop Hero
      const heroShot = await send('Page.captureScreenshot', {
        format: 'png',
        clip: { x: 0, y: 0, width: 1440, height: 900, scale: 1 }
      });
      fs.writeFileSync(path.join(ARTIFACT_DIR, 'overhaul-desktop-hero.png'), Buffer.from(heroShot.data, 'base64'));
      console.log('Saved overhaul-desktop-hero.png');

      console.log('Scrolling down...');
      await triggerFullPageScroll();

      // Full Desktop Page
      const metrics = await send('Page.getLayoutMetrics');
      const height = Math.ceil(metrics.contentSize.height);
      console.log(`Desktop total height: ${height}px`);

      const fullShot = await send('Page.captureScreenshot', {
        format: 'png',
        captureBeyondViewport: true
      });
      fs.writeFileSync(path.join(ARTIFACT_DIR, 'overhaul-desktop-full.png'), Buffer.from(fullShot.data, 'base64'));
      console.log('Saved overhaul-desktop-full.png');

      // Capture key sections
      const sections = [
        { id: 'experience', filename: 'overhaul-section-experience.png' },
        { id: 'accommodation', filename: 'overhaul-section-accommodation.png' },
        { id: 'pool', filename: 'overhaul-section-pool.png' },
        { id: 'nature', filename: 'overhaul-section-nature.png' },
        { id: 'dining', filename: 'overhaul-section-dining.png' },
        { id: 'events', filename: 'overhaul-section-events.png' },
        { id: 'gallery', filename: 'overhaul-section-gallery.png' },
        { id: 'location', filename: 'overhaul-section-location.png' },
        { id: 'contact', filename: 'overhaul-section-contact.png' }
      ];

      for (const sec of sections) {
        const evalRes = await send('Runtime.evaluate', {
          expression: `(() => {
            const el = document.getElementById("${sec.id}");
            if (!el) return null;
            const rect = el.getBoundingClientRect();
            return { x: rect.x + window.scrollX, y: rect.y + window.scrollY, width: rect.width, height: rect.height };
          })()`,
          returnByValue: true
        });

        if (evalRes.result && evalRes.result.value) {
          const rect = evalRes.result.value;
          const shot = await send('Page.captureScreenshot', {
            format: 'png',
            clip: { x: 0, y: rect.y, width: 1440, height: Math.min(rect.height, 1300), scale: 1 },
            captureBeyondViewport: true
          });
          fs.writeFileSync(path.join(ARTIFACT_DIR, sec.filename), Buffer.from(shot.data, 'base64'));
          console.log(`Saved ${sec.filename}`);
        }
      }
    }

    async function captureMobile() {
      console.log('Capturing Mobile views (iPhone 14 Pro: 390x844)...');
      await send('Emulation.setDeviceMetricsOverride', {
        width: 390,
        height: 844,
        deviceScaleFactor: 2,
        mobile: true
      });

      await send('Page.navigate', { url: 'http://localhost:5173/' });
      await sleep(2000);

      const mobileHero = await send('Page.captureScreenshot', {
        format: 'png',
        clip: { x: 0, y: 0, width: 390, height: 844, scale: 1 }
      });
      fs.writeFileSync(path.join(ARTIFACT_DIR, 'overhaul-mobile-hero.png'), Buffer.from(mobileHero.data, 'base64'));
      console.log('Saved overhaul-mobile-hero.png');

      await triggerFullPageScroll();

      const mobileFull = await send('Page.captureScreenshot', {
        format: 'png',
        captureBeyondViewport: true
      });
      fs.writeFileSync(path.join(ARTIFACT_DIR, 'overhaul-mobile-full.png'), Buffer.from(mobileFull.data, 'base64'));
      console.log('Saved overhaul-mobile-full.png');
    }

    await captureDesktop();
    await captureMobile();

    ws.close();
  } finally {
    chrome.kill();
    console.log('Chromium closed.');
  }
}

run().catch(console.error);
