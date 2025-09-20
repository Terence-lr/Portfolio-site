const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'previews');

async function optimizeImage(inputPath, outputPath, quality = 80) {
  try {
    // Use sharp if available, otherwise use imagemagick
    const command = `convert "${inputPath}" -quality ${quality} -strip "${outputPath}"`;
    await execAsync(command);
    console.log(`✅ Optimized image: ${path.basename(outputPath)}`);
  } catch (error) {
    console.warn(`⚠️  Could not optimize ${inputPath}: ${error.message}`);
    // Fallback: just copy the file
    await fs.copyFile(inputPath, outputPath);
  }
}

async function createGifFromVideo(videoPath, gifPath) {
  try {
    // Use ffmpeg to create optimized GIF
    const command = `ffmpeg -i "${videoPath}" -vf "fps=10,scale=800:-1:flags=lanczos,palettegen" -y "${gifPath}"`;
    await execAsync(command);
    console.log(`✅ Created GIF: ${path.basename(gifPath)}`);
  } catch (error) {
    console.warn(`⚠️  Could not create GIF from ${videoPath}: ${error.message}`);
    // Create a placeholder GIF
    await fs.writeFile(gifPath, '');
  }
}

async function createOGImage(slug, projectDir) {
  // Create a simple OG image using canvas or a template
  const ogPath = path.join(projectDir, `${slug}-og.png`);
  
  try {
    // For now, we'll create a simple colored rectangle as placeholder
    // In a real implementation, you'd use canvas or a template system
    const command = `convert -size 1200x630 xc:"#0A0A0A" -fill "#DC143C" -pointsize 48 -gravity center -annotate +0+0 "${slug.toUpperCase()}" "${ogPath}"`;
    await execAsync(command);
    console.log(`✅ Created OG image: ${path.basename(ogPath)}`);
  } catch (error) {
    console.warn(`⚠️  Could not create OG image for ${slug}: ${error.message}`);
  }
}

async function optimizeProjectAssets(slug) {
  console.log(`Optimizing assets for ${slug}...`);
  
  const projectDir = path.join(OUTPUT_DIR, slug);
  
  try {
    await fs.access(projectDir);
  } catch {
    console.warn(`⚠️  Project directory not found: ${projectDir}`);
    return;
  }
  
  const files = await fs.readdir(projectDir);
  
  for (const file of files) {
    const filePath = path.join(projectDir, file);
    const ext = path.extname(file).toLowerCase();
    
    if (ext === '.jpg' || ext === '.jpeg') {
      // Optimize JPEG images
      await optimizeImage(filePath, filePath, 80);
    } else if (ext === '.webm') {
      // Create GIF fallback from video
      const gifPath = filePath.replace('.webm', '.gif');
      await createGifFromVideo(filePath, gifPath);
    }
  }
  
  // Create OG image
  await createOGImage(slug, projectDir);
}

async function main() {
  console.log('🔧 Starting asset optimization...');
  
  try {
    await fs.access(OUTPUT_DIR);
  } catch {
    console.error('❌ Previews directory not found. Run capture first.');
    return;
  }
  
  const projects = ['portfolio', 'job-tracker', 'unit-converter'];
  
  for (const slug of projects) {
    await optimizeProjectAssets(slug);
  }
  
  console.log('🎉 Asset optimization completed!');
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { optimizeProjectAssets };
