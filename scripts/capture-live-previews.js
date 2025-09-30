const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// Project URLs and configurations
const projects = [
  {
    name: 'portfolio',
    url: 'https://www.trichardson.dev/',
    viewport: { width: 1200, height: 800 },
    outputDir: 'public/previews/portfolio'
  },
  {
    name: 'job-tracker',
    url: 'https://total-job-tracker.vercel.app',
    viewport: { width: 1200, height: 800 },
    outputDir: 'public/previews/job-tracker'
  },
  {
    name: 'purple-lounge-spa',
    url: 'https://purple-lounge-spa.vercel.app/',
    viewport: { width: 1200, height: 800 },
    outputDir: 'public/previews/purple-lounge-spa'
  },
  {
    name: 'total-control',
    url: 'https://total-control-six.vercel.app/',
    viewport: { width: 1200, height: 800 },
    outputDir: 'public/previews/total-control'
  }
];

async function captureScreenshots() {
  console.log('🚀 Starting live preview capture...');
  
  const browser = await chromium.launch({
    headless: true
  });

  try {
    for (const project of projects) {
      console.log(`📸 Capturing ${project.name}...`);
      
      const page = await browser.newPage();
      await page.setViewportSize(project.viewport);
      
      // Set user agent to avoid bot detection
      await page.setExtraHTTPHeaders({
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      });
      
      try {
        // Navigate to the site
        await page.goto(project.url, { 
          waitUntil: 'networkidle',
          timeout: 30000 
        });
        
        // Wait a bit for any animations to complete
        await page.waitForTimeout(2000);
        
        // Ensure output directory exists
        if (!fs.existsSync(project.outputDir)) {
          fs.mkdirSync(project.outputDir, { recursive: true });
        }
        
        // Capture full page screenshot
        const fullPagePath = path.join(project.outputDir, `${project.name}-live-full.png`);
        await page.screenshot({
          path: fullPagePath,
          fullPage: true,
          type: 'png'
        });
        
        // Capture viewport screenshot (for cover)
        const coverPath = path.join(project.outputDir, `${project.name}-live-cover.png`);
        await page.screenshot({
          path: coverPath,
          type: 'png'
        });
        
        // Capture mobile viewport
        await page.setViewportSize({ width: 375, height: 667 });
        await page.waitForTimeout(1000);
        
        const mobilePath = path.join(project.outputDir, `${project.name}-live-mobile.png`);
        await page.screenshot({
          path: mobilePath,
          type: 'png'
        });
        
        console.log(`✅ Captured ${project.name} successfully`);
        
      } catch (error) {
        console.error(`❌ Error capturing ${project.name}:`, error.message);
      } finally {
        await page.close();
      }
    }
    
  } finally {
    await browser.close();
  }
  
  console.log('🎉 Live preview capture complete!');
}

// Run the capture function
captureScreenshots().catch(console.error);
