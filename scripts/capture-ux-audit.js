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

    const breakpoints = [
      { name: 'desktop', width: 1440, height: 900, dsf: 1.5, mobile: false },
      { name: 'laptop', width: 1280, height: 800, dsf: 1.5, mobile: false },
      { name: 'tablet', width: 768, height: 1024, dsf: 2, mobile: false },
      { name: 'mobile', width: 390, height: 844, dsf: 2, mobile: true },
      { name: 'small-mobile', width: 360, height: 780, dsf: 2, mobile: true },
    ];

    const languages = ['bn', 'en'];

    for (const lang of languages) {
      for (const bp of breakpoints) {
        await send('Emulation.setDeviceMetricsOverride', {
          width: bp.width,
          height: bp.height,
          deviceScaleFactor: bp.dsf,
          mobile: bp.mobile
        });

        await send('Page.navigate', { url: 'http://localhost:5173/' });
        await sleep(1500);

        await send('Runtime.evaluate', {
          expression: `localStorage.setItem('gulmohor_lang', '${lang}'); location.reload();`
        });
        await sleep(2000);

        // Capture Hero & Navbar view
        const heroShot = await send('Page.captureScreenshot', {
          format: 'png',
          clip: { x: 0, y: 0, width: bp.width, height: bp.height, scale: 1 }
        });
        const heroFilename = `ux-${bp.name}-hero-${lang}.png`;
        fs.writeFileSync(path.join(ARTIFACT_DIR, heroFilename), Buffer.from(heroShot.data, 'base64'));
        console.log(`Saved ${heroFilename}`);

        // For mobile and desktop, capture contact and booking form
        if (bp.name === 'desktop' || bp.name === 'mobile') {
          // Scroll to contact form
          await send('Runtime.evaluate', {
            expression: `document.getElementById('contact')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
          });
          await sleep(800);

          const formShot = await send('Page.captureScreenshot', {
            format: 'png',
            clip: { x: 0, y: 0, width: bp.width, height: bp.height, scale: 1 },
            captureBeyondViewport: false
          });
          const formFilename = `ux-${bp.name}-contact-${lang}.png`;
          fs.writeFileSync(path.join(ARTIFACT_DIR, formFilename), Buffer.from(formShot.data, 'base64'));
          console.log(`Saved ${formFilename}`);
        }
      }
    }

    // Capture Mobile Navigation Drawer in Bengali and English
    for (const lang of ['bn', 'en']) {
      await send('Emulation.setDeviceMetricsOverride', {
        width: 390,
        height: 844,
        deviceScaleFactor: 2,
        mobile: true
      });
      await send('Page.navigate', { url: 'http://localhost:5173/' });
      await sleep(1500);
      await send('Runtime.evaluate', {
        expression: `localStorage.setItem('gulmohor_lang', '${lang}'); location.reload();`
      });
      await sleep(2000);

      // Open mobile drawer
      await send('Runtime.evaluate', {
        expression: `(() => {
          const btn = document.querySelector('button[aria-label="Toggle navigation menu"]');
          if (btn) btn.click();
        })()`
      });
      await sleep(800);

      const drawerShot = await send('Page.captureScreenshot', {
        format: 'png',
        clip: { x: 0, y: 0, width: 390, height: 844, scale: 1 }
      });
      const drawerFilename = `ux-mobile-drawer-${lang}.png`;
      fs.writeFileSync(path.join(ARTIFACT_DIR, drawerFilename), Buffer.from(drawerShot.data, 'base64'));
      console.log(`Saved ${drawerFilename}`);
    }

    // Capture Room Detail Modal in Bengali
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1280,
      height: 800,
      deviceScaleFactor: 1.5,
      mobile: false
    });
    await send('Runtime.evaluate', {
      expression: `(() => {
        const btn = document.querySelector('#accommodation button');
        // Click on "View Full Gallery & Specs"
        const allBtns = Array.from(document.querySelectorAll('button'));
        const modalBtn = allBtns.find(b => b.textContent && (b.textContent.includes('রুমের বিস্তারিত') || b.textContent.includes('গ্যালারি')));
        if (modalBtn) modalBtn.click();
      })()`
    });
    await sleep(800);

    const modalShot = await send('Page.captureScreenshot', {
      format: 'png',
      clip: { x: 0, y: 0, width: 1280, height: 800, scale: 1 }
    });
    fs.writeFileSync(path.join(ARTIFACT_DIR, 'ux-room-modal-bn.png'), Buffer.from(modalShot.data, 'base64'));
    console.log(`Saved ux-room-modal-bn.png`);

    // Reset language to English
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
