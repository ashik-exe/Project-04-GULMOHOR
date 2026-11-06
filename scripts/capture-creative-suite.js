import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const ARTIFACT_DIR = '/home/Ashik_exe/.gemini/antigravity/brain/7904b487-8b25-442a-b234-2d19ec395f98';
const PORT = 9226;

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
  for (let i = 0; i < 20; i++) {
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

    async function captureElement(elementId, filename, width, heightOverride) {
      await send('Runtime.evaluate', {
        expression: `(() => {
          const el = document.getElementById("${elementId}");
          if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
        })()`
      });
      await sleep(1000);

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
          clip: { x: 0, y: val.y, width: width, height: captureHeight, scale: 1 },
          captureBeyondViewport: true
        });
        fs.writeFileSync(path.join(ARTIFACT_DIR, filename), Buffer.from(shot.data, 'base64'));
        console.log(`Saved ${filename}`);
      }
    }

    // 1. Desktop 1440px Bengali Hero
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1.5,
      mobile: false
    });
    await send('Page.navigate', { url: 'http://localhost:5173/' });
    await sleep(1500);
    await send('Runtime.evaluate', {
      expression: `localStorage.setItem('gulmohor_lang', 'bn'); location.reload();`
    });
    await sleep(2000);

    const shotDesktopHeroBn = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(ARTIFACT_DIR, 'creative-desktop-hero-bn.png'), Buffer.from(shotDesktopHeroBn.data, 'base64'));
    console.log('Saved creative-desktop-hero-bn.png');

    // 2. Desktop 1440px English Hero
    await send('Runtime.evaluate', {
      expression: `localStorage.setItem('gulmohor_lang', 'en'); location.reload();`
    });
    await sleep(2000);

    const shotDesktopHeroEn = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(ARTIFACT_DIR, 'creative-desktop-hero-en.png'), Buffer.from(shotDesktopHeroEn.data, 'base64'));
    console.log('Saved creative-desktop-hero-en.png');

    // 3. Desktop Architectural Interlude in English & Bengali
    await send('Runtime.evaluate', {
      expression: `(() => {
        const quote = document.querySelector('blockquote');
        if (quote) quote.scrollIntoView({ behavior: 'instant', block: 'center' });
      })()`
    });
    await sleep(800);
    const shotInterludeEn = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(ARTIFACT_DIR, 'creative-desktop-interlude-en.png'), Buffer.from(shotInterludeEn.data, 'base64'));
    console.log('Saved creative-desktop-interlude-en.png');

    await send('Runtime.evaluate', {
      expression: `localStorage.setItem('gulmohor_lang', 'bn'); location.reload();`
    });
    await sleep(2000);
    await send('Runtime.evaluate', {
      expression: `(() => {
        const quote = document.querySelector('blockquote');
        if (quote) quote.scrollIntoView({ behavior: 'instant', block: 'center' });
      })()`
    });
    await sleep(800);
    const shotInterludeBn = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(ARTIFACT_DIR, 'creative-desktop-interlude-bn.png'), Buffer.from(shotInterludeBn.data, 'base64'));
    console.log('Saved creative-desktop-interlude-bn.png');

    // 4. Desktop Pool Day Mode in Bengali
    await captureElement('pool', 'creative-desktop-pool-day-bn.png', 1440, 1000);

    // 5. Desktop Pool Night Mode in Bengali
    await send('Runtime.evaluate', {
      expression: `(() => {
        const nightBtn = Array.from(document.querySelectorAll('#pool button')).find(b => b.textContent.includes('নীল আলো') || b.textContent.includes('Luminescence'));
        if (nightBtn) nightBtn.click();
      })()`
    });
    await sleep(1000);
    await captureElement('pool', 'creative-desktop-pool-night-bn.png', 1440, 1000);

    // 6. Day Outing Itinerary Roadmap in Bengali
    await send('Runtime.evaluate', {
      expression: `(() => {
        const dayBtn = Array.from(document.querySelectorAll('#accommodation button')).find(b => b.textContent.includes('ডে আউট') || b.textContent.includes('Day Outing'));
        if (dayBtn) dayBtn.click();
      })()`
    });
    await sleep(1000);
    await captureElement('accommodation', 'creative-desktop-day-outing-bn.png', 1440, 950);

    // 7. Dining Menu in Bengali
    await captureElement('dining', 'creative-desktop-dining-bn.png', 1440, 1050);

    // 8. Find Us Travel Roadmap in Bengali
    await captureElement('location', 'creative-desktop-findus-roadmap-bn.png', 1440, 1050);

    // 9. Mobile 390px Hero Bengali & English
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });
    await send('Page.navigate', { url: 'http://localhost:5173/' });
    await sleep(1500);
    await send('Runtime.evaluate', {
      expression: `localStorage.setItem('gulmohor_lang', 'bn'); location.reload();`
    });
    await sleep(2000);

    const shotMobileHeroBn = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(ARTIFACT_DIR, 'creative-mobile-hero-bn.png'), Buffer.from(shotMobileHeroBn.data, 'base64'));
    console.log('Saved creative-mobile-hero-bn.png');

    await send('Runtime.evaluate', {
      expression: `localStorage.setItem('gulmohor_lang', 'en'); location.reload();`
    });
    await sleep(2000);
    const shotMobileHeroEn = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(ARTIFACT_DIR, 'creative-mobile-hero-en.png'), Buffer.from(shotMobileHeroEn.data, 'base64'));
    console.log('Saved creative-mobile-hero-en.png');

    // 10. Small Mobile 360px Hero Bengali
    await send('Emulation.setDeviceMetricsOverride', {
      width: 360,
      height: 740,
      deviceScaleFactor: 2,
      mobile: true
    });
    await send('Runtime.evaluate', {
      expression: `localStorage.setItem('gulmohor_lang', 'bn'); location.reload();`
    });
    await sleep(2000);
    const shotSmallMobileHeroBn = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(ARTIFACT_DIR, 'creative-small-mobile-hero-bn.png'), Buffer.from(shotSmallMobileHeroBn.data, 'base64'));
    console.log('Saved creative-small-mobile-hero-bn.png');

    // 11. Tablet 768px Hero Bengali
    await send('Emulation.setDeviceMetricsOverride', {
      width: 768,
      height: 1024,
      deviceScaleFactor: 2,
      mobile: true
    });
    await send('Runtime.evaluate', {
      expression: `location.reload();`
    });
    await sleep(2000);
    const shotTabletHeroBn = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(ARTIFACT_DIR, 'creative-tablet-hero-bn.png'), Buffer.from(shotTabletHeroBn.data, 'base64'));
    console.log('Saved creative-tablet-hero-bn.png');

    ws.close();
  } finally {
    chrome.kill();
  }
}

run().catch(console.error);
