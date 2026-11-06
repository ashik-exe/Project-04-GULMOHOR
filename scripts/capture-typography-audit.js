import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const ARTIFACT_DIR = '/home/Ashik_exe/.gemini/antigravity/brain/7904b487-8b25-442a-b234-2d19ec395f98';
const PORT = 9222;

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  const chrome = spawn('chromium-browser', [
    '--headless=new',
    `--remote-debugging-port=${PORT}`,
    '--no-sandbox',
    '--disable-gpu',
    '--disable-dev-shm-usage',
    'about:blank'
  ]);

  let listData = null;
  for (let i = 0; i < 15; i++) {
    await sleep(500);
    try {
      const listRes = await fetch(`http://127.0.0.1:${PORT}/json/list`);
      listData = await listRes.json();
      if (listData && listData.length > 0) break;
    } catch (e) {}
  }

  if (!listData || listData.length === 0) {
    throw new Error('Could not connect to Chromium CDP endpoint');
  }

  try {
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

    // Desktop 1440px viewport
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1.5,
      mobile: false
    });

    await send('Page.navigate', { url: 'http://localhost:5173/' });
    await sleep(1500);

    // Switch language to English in localStorage and reload
    await send('Runtime.evaluate', {
      expression: `localStorage.setItem('gulmohor_lang', 'en'); location.reload();`
    });
    await sleep(2500);

    // 1. Desktop Hero & Navbar
    const heroShot = await send('Page.captureScreenshot', {
      format: 'png',
      clip: { x: 0, y: 0, width: 1440, height: 900, scale: 1 }
    });
    fs.writeFileSync(path.join(ARTIFACT_DIR, 'typography-desktop-hero-en.png'), Buffer.from(heroShot.data, 'base64'));
    console.log('Saved typography-desktop-hero-en.png');

    // Helper to capture element screenshot
    async function captureElement(elementId, filename, heightOverride) {
      // scroll into view first to trigger any eager/lazy loads
      await send('Runtime.evaluate', {
        expression: `(() => {
          const el = document.getElementById("${elementId}");
          if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
        })()`
      });
      await sleep(600);

      const evalRes = await send('Runtime.evaluate', {
        expression: `(() => {
          const el = document.getElementById("${elementId}");
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return { y: rect.y + window.scrollY, height: rect.height };
        })()`,
        returnByValue: true
      });

      if (evalRes.result?.value) {
        const val = evalRes.result.value;
        const captureHeight = heightOverride || Math.min(val.height, 1200);
        const shot = await send('Page.captureScreenshot', {
          format: 'png',
          clip: { x: 0, y: val.y, width: 1440, height: captureHeight, scale: 1 },
          captureBeyondViewport: true
        });
        fs.writeFileSync(path.join(ARTIFACT_DIR, filename), Buffer.from(shot.data, 'base64'));
        console.log(`Saved ${filename}`);
      } else {
        console.warn(`Element #${elementId} not found`);
      }
    }

    await captureElement('experience', 'typography-section-experience-en.png', 1100);
    await captureElement('accommodation', 'typography-section-accommodation-en.png', 1100);
    await captureElement('pool', 'typography-section-pool-en.png', 1050);
    await captureElement('nature', 'typography-section-nature-en.png', 1050);
    await captureElement('dining', 'typography-section-dining-en.png', 1150);
    await captureElement('events', 'typography-section-events-en.png', 1150);
    await captureElement('gallery', 'typography-section-gallery-en.png', 1050);
    await captureElement('location', 'typography-section-location-en.png', 950);
    await captureElement('contact', 'typography-section-contact-en.png', 1150);

    // Mobile Viewport (390x844, iPhone 14 / modern standard mobile)
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });
    // Navigate freshly to ensure scroll is at 0
    await send('Page.navigate', { url: 'http://localhost:5173/' });
    await sleep(2000);

    const mobileHeroShot = await send('Page.captureScreenshot', {
      format: 'png',
      clip: { x: 0, y: 0, width: 390, height: 844, scale: 1 }
    });
    fs.writeFileSync(path.join(ARTIFACT_DIR, 'typography-mobile-hero-en.png'), Buffer.from(mobileHeroShot.data, 'base64'));
    console.log('Saved typography-mobile-hero-en.png');

    // Bengali Regression Verification (Desktop)
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1.5,
      mobile: false
    });
    await send('Runtime.evaluate', {
      expression: `localStorage.setItem('gulmohor_lang', 'bn'); location.reload();`
    });
    await sleep(2500);

    const bnShot = await send('Page.captureScreenshot', {
      format: 'png',
      clip: { x: 0, y: 0, width: 1440, height: 900, scale: 1 }
    });
    fs.writeFileSync(path.join(ARTIFACT_DIR, 'typography-desktop-hero-bn.png'), Buffer.from(bnShot.data, 'base64'));
    console.log('Saved typography-desktop-hero-bn.png');

    // Restore English
    await send('Runtime.evaluate', {
      expression: `localStorage.setItem('gulmohor_lang', 'en');`
    });
    await sleep(500);

    ws.close();
  } finally {
    chrome.kill();
  }
}

run().catch(console.error);
