const { chromium } = require('playwright');
const fs = require('fs').promises;
const path = require('path');

// Project URLs mapping
const PROJECT_URLS = {
  portfolio: 'https://www.trichardson.dev/',
  'job-tracker': 'https://total-job-tracker.vercel.app',
  'unit-converter': 'https://tlr-distance-converter.replit.app/'
};

// Output directories
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'previews');

async function ensureDirectoryExists(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function captureProjectPreview(slug, url) {
  console.log(`Capturing preview for ${slug}...`);
  
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    // Set viewport
    await page.setViewportSize({ width: 1440, height: 900 });
    
    // Navigate to the project
    await page.goto(url, { waitUntil: 'networkidle' });
    
    // Wait for content to load
    await page.waitForTimeout(2000);
    
    // Create project directory
    const projectDir = path.join(OUTPUT_DIR, slug);
    await ensureDirectoryExists(projectDir);
    
    // Take full page screenshot
    const coverPath = path.join(projectDir, `${slug}-cover.jpg`);
    await page.screenshot({
      path: coverPath,
      fullPage: true,
      quality: 80
    });
    
    // Take hero section screenshot (first 900px)
    const heroPath = path.join(projectDir, `${slug}-hero.jpg`);
    await page.screenshot({
      path: heroPath,
      clip: { x: 0, y: 0, width: 1440, height: 900 }
    });
    
    // Take thumbnail (800x500)
    await page.setViewportSize({ width: 800, height: 500 });
    const thumbPath = path.join(projectDir, `${slug}-thumb.jpg`);
    await page.screenshot({
      path: thumbPath,
      fullPage: false,
      quality: 80
    });
    
    // Record video (10 seconds)
    const videoPath = path.join(projectDir, `${slug}-loop.webm`);
    await page.video().saveAs(videoPath);
    
    // Start recording
    await page.video().start();
    
    // Perform some interactions for the video
    await page.waitForTimeout(1000);
    
    // Scroll down slowly
    for (let i = 0; i < 5; i++) {
      await page.mouse.wheel(0, 200);
      await page.waitForTimeout(500);
    }
    
    // Scroll back up
    for (let i = 0; i < 5; i++) {
      await page.mouse.wheel(0, -200);
      await page.waitForTimeout(500);
    }
    
    // Stop recording
    await page.video().stop();
    
    console.log(`✅ Captured preview for ${slug}`);
    
  } catch (error) {
    console.error(`❌ Error capturing ${slug}:`, error.message);
  } finally {
    await browser.close();
  }
}

async function main() {
  console.log('🎬 Starting preview capture...');
  
  // Ensure output directory exists
  await ensureDirectoryExists(OUTPUT_DIR);
  
  // Capture previews for all projects
  for (const [slug, url] of Object.entries(PROJECT_URLS)) {
    await captureProjectPreview(slug, url);
  }
  
  console.log('🎉 Preview capture completed!');
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { captureProjectPreview, PROJECT_URLS };
