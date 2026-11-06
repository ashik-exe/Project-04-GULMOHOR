import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const ARTIFACT_DIR = '/home/Ashik_exe/.gemini/antigravity/brain/7904b487-8b25-442a-b234-2d19ec395f98';
const PORT = 9224;

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

    // Setup Bengali on desktop
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

    // Scroll to accommodation section
    await send('Runtime.evaluate', {
      expression: `document.getElementById('accommodation').scrollIntoView();`
    });
    await sleep(1000);

    // Click room modal button
    const clickRoom = await send('Runtime.evaluate', {
      expression: `(() => {
        const btns = Array.from(document.querySelectorAll('#accommodation button'));
        const btn = btns.find(b => b.textContent && b.textContent.includes('রুমের বিস্তারিত'));
        if (btn) {
          btn.click();
          return { clicked: true, text: btn.textContent.trim() };
        }
        return { clicked: false, available: btns.map(b => b.textContent.trim()) };
      })()`,
      returnByValue: true
    });
    console.log('Room modal trigger result:', clickRoom.result?.value);
    await sleep(1000);

    const roomModalShot = await send('Page.captureScreenshot', {
      format: 'png'
    });
    fs.writeFileSync(path.join(ARTIFACT_DIR, 'ux-room-modal-bn.png'), Buffer.from(roomModalShot.data, 'base64'));
    console.log('Saved ux-room-modal-bn.png');

    // Close room modal by pressing Escape or clicking backdrop
    await send('Runtime.evaluate', {
      expression: `(() => {
        const dlg = document.querySelector('dialog[open]');
        if (dlg) dlg.close();
      })()`
    });
    await sleep(500);

    // Gallery Lightbox test
    await send('Runtime.evaluate', {
      expression: `document.getElementById('gallery').scrollIntoView();`
    });
    await sleep(1000);

    const clickGallery = await send('Runtime.evaluate', {
      expression: `(() => {
        const card = document.querySelector('#gallery .group');
        if (card) {
          card.click();
          return { clicked: true };
        }
        return { clicked: false };
      })()`,
      returnByValue: true
    });
    console.log('Gallery click result:', clickGallery.result?.value);
    await sleep(1000);

    const galleryShot = await send('Page.captureScreenshot', {
      format: 'png'
    });
    fs.writeFileSync(path.join(ARTIFACT_DIR, 'ux-gallery-lightbox-bn.png'), Buffer.from(galleryShot.data, 'base64'));
    console.log('Saved ux-gallery-lightbox-bn.png');

    // Mobile contact English capture
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });
    await send('Page.navigate', { url: 'http://localhost:5173/' });
    await sleep(1500);
    await send('Runtime.evaluate', {
      expression: `localStorage.setItem('gulmohor_lang', 'en'); location.reload();`
    });
    await sleep(2000);

    await send('Runtime.evaluate', {
      expression: `(() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
      })()`
    });
    await sleep(1000);

    const evalRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const el = document.getElementById('contact');
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        return { y: rect.y + window.scrollY, height: rect.height };
      })()`,
      returnByValue: true
    });

    if (evalRes.result?.value) {
      const val = evalRes.result.value;
      const shot = await send('Page.captureScreenshot', {
        format: 'png',
        clip: { x: 0, y: val.y, width: 390, height: 1150, scale: 1 },
        captureBeyondViewport: true
      });
      fs.writeFileSync(path.join(ARTIFACT_DIR, 'ux-mobile-contact-en.png'), Buffer.from(shot.data, 'base64'));
      console.log('Saved ux-mobile-contact-en.png');
    }

    ws.close();
  } finally {
    chrome.kill();
  }
}

run().catch(console.error);
