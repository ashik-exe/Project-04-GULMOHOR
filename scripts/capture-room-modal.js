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
  for (let i = 0; i < 20; i++) {
    await sleep(500);
    try {
      const listRes = await fetch(`http://127.0.0.1:${PORT}/json/list`);
      listData = await listRes.json();
      if (listData && listData.length > 0) break;
    } catch (e) {}
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

    await send('Emulation.setDeviceMetricsOverride', {
      width: 1280,
      height: 850,
      deviceScaleFactor: 1.5,
      mobile: false
    });

    await send('Page.navigate', { url: 'http://localhost:5173/' });
    await sleep(1500);
    await send('Runtime.evaluate', {
      expression: `localStorage.setItem('gulmohor_lang', 'bn'); location.reload();`
    });
    await sleep(2000);

    // Scroll to accommodation and click the view details button
    await send('Runtime.evaluate', {
      expression: `(() => {
        const el = document.getElementById('accommodation');
        if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
      })()`
    });
    await sleep(800);

    await send('Runtime.evaluate', {
      expression: `(() => {
        const buttons = Array.from(document.querySelectorAll('#accommodation button'));
        const btn = buttons.find(b => b.textContent && (b.textContent.includes('রুমের বিস্তারিত') || b.textContent.includes('ছবি ও তথ্য')));
        if (btn) btn.click();
      })()`
    });
    await sleep(1000);

    const roomModalShot = await send('Page.captureScreenshot', {
      format: 'png',
      clip: { x: 0, y: 0, width: 1280, height: 850, scale: 1 }
    });
    fs.writeFileSync(path.join(ARTIFACT_DIR, 'ux-room-modal-bn.png'), Buffer.from(roomModalShot.data, 'base64'));
    console.log('Saved ux-room-modal-bn.png');

    ws.close();
  } finally {
    chrome.kill();
  }
}

run().catch(console.error);
