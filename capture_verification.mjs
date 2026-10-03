import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PORT = 9222;
const OUTPUT_DIR = "e:\\ThiepCuoi\\.tmp\\verification";

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class CDPClient {
  constructor(wsUrl) {
    this.ws = new WebSocket(wsUrl);
    this.id = 1;
    this.callbacks = new Map();
  }

  async connect() {
    return new Promise((resolve, reject) => {
      this.ws.onopen = () => resolve();
      this.ws.onerror = (err) => reject(err);
      this.ws.onmessage = (msg) => {
        const data = JSON.parse(msg.data);
        if (data.id && this.callbacks.has(data.id)) {
          const cb = this.callbacks.get(data.id);
          this.callbacks.delete(data.id);
          if (data.error) cb.reject(new Error(data.error.message));
          else cb.resolve(data.result);
        }
      };
    });
  }

  async send(method, params = {}) {
    const id = this.id++;
    return new Promise((resolve, reject) => {
      this.callbacks.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  async screenshot(filepath) {
    const res = await this.send("Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(filepath, Buffer.from(res.data, "base64"));
    console.log(`Saved screenshot: ${filepath}`);
  }

  close() {
    this.ws.close();
  }
}

async function run() {
  console.log("Starting Chrome for comprehensive verification...");
  const chrome = spawn(CHROME_PATH, [
    "--headless=new",
    `--remote-debugging-port=${PORT}`,
    "--window-size=576,1024",
    "--disable-features=IsolateOrigins,site-per-process",
    "--no-sandbox",
    "--disable-dev-shm-usage"
  ]);

  await sleep(1500);

  try {
    const newRes = await fetch(`http://127.0.0.1:${PORT}/json/new?http://localhost:4173/`, { method: "PUT" });
    const target = await newRes.json();
    const client = new CDPClient(target.webSocketDebuggerUrl);
    await client.connect();

    await client.send("Page.enable");
    await client.send("Emulation.setDeviceMetricsOverride", {
      width: 576,
      height: 1024,
      deviceScaleFactor: 1,
      mobile: true
    });

    console.log("Capturing opening progression at 576x1024...");
    const openingTimes = [
      { name: "open_00_0ms", delay: 0 },
      { name: "open_01_160ms", delay: 160 },
      { name: "open_02_400ms", delay: 400 },
      { name: "open_03_800ms", delay: 800 },
      { name: "open_04_1200ms", delay: 1200 },
      { name: "open_05_1440ms", delay: 1440 },
      { name: "open_06_1600ms", delay: 1600 },
    ];

    for (const item of openingTimes) {
      await client.send("Page.navigate", { url: "http://localhost:4173/" });
      if (item.delay > 0) {
        await sleep(item.delay);
      }
      await client.screenshot(path.join(OUTPUT_DIR, `${item.name}.png`));
    }

    // Wait until opening completes
    await sleep(2200);
    await client.screenshot(path.join(OUTPUT_DIR, "hero_revealed_stable.png"));

    // Scroll to first large portrait
    await client.send("Runtime.evaluate", { expression: "window.scrollTo({ top: 480, behavior: 'instant' })" });
    await sleep(200);
    await client.screenshot(path.join(OUTPUT_DIR, "portrait_01_revealing.png"));
    await sleep(700);
    await client.screenshot(path.join(OUTPUT_DIR, "portrait_01_complete.png"));

    // Scroll to paired portraits in Family section
    await client.send("Runtime.evaluate", { expression: "window.scrollTo({ top: 1200, behavior: 'instant' })" });
    await sleep(400);
    await client.screenshot(path.join(OUTPUT_DIR, "paired_portraits_family.png"));

    // Scroll to events timeline
    await client.send("Runtime.evaluate", { expression: "window.scrollTo({ top: 1850, behavior: 'instant' })" });
    await sleep(400);
    await client.screenshot(path.join(OUTPUT_DIR, "wedding_timeline_events.png"));

    // Scroll to Gallery "The Album Of Love"
    await client.send("Runtime.evaluate", { expression: "window.scrollTo({ top: 2900, behavior: 'instant' })" });
    await sleep(200);
    await client.screenshot(path.join(OUTPUT_DIR, "gallery_row_01_revealing.png"));
    await sleep(600);
    await client.screenshot(path.join(OUTPUT_DIR, "gallery_row_01_complete.png"));

    // Scroll to RSVP form
    await client.send("Runtime.evaluate", { expression: "window.scrollTo({ top: 3800, behavior: 'instant' })" });
    await sleep(400);
    await client.screenshot(path.join(OUTPUT_DIR, "rsvp_form.png"));

    // Scroll to Thank You / Ending
    await client.send("Runtime.evaluate", { expression: "window.scrollTo({ top: 4500, behavior: 'instant' })" });
    await sleep(400);
    await client.screenshot(path.join(OUTPUT_DIR, "final_thank_you.png"));

    // Also test typical phone width 390x844 (iPhone 14)
    console.log("Verifying at typical phone width (390x844)...");
    await client.send("Emulation.setDeviceMetricsOverride", {
      width: 390,
      height: 844,
      deviceScaleFactor: 1,
      mobile: true
    });
    await client.send("Page.navigate", { url: "http://localhost:4173/" });
    await sleep(2200);
    await client.screenshot(path.join(OUTPUT_DIR, "mobile_390x844_hero.png"));

    client.close();
    console.log("All forensic verification screenshots completed successfully!");
  } catch (err) {
    console.error("Verification run failed:", err);
  } finally {
    chrome.kill();
  }
}

run();
