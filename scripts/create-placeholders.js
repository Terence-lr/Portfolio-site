const fs = require('fs');
const path = require('path');

// Create placeholder images for each project
const projects = [
  {
    slug: 'portfolio',
    title: 'Portfolio',
    color: '#DC143C'
  },
  {
    slug: 'job-tracker',
    title: 'Job Tracker',
    color: '#DC143C'
  },
  {
    slug: 'unit-converter',
    title: 'Unit Converter',
    color: '#DC143C'
  }
];

const outputDir = path.join(__dirname, '..', 'public', 'previews');

function createSvgPlaceholder(text, width, height, bgColor, textColor) {
  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="${width}" height="${height}" fill="${bgColor}"/>
    <rect x="40" y="40" width="${width-80}" height="${height-80}" rx="20" fill="${textColor}" opacity="0.1"/>
    <rect x="40" y="40" width="${width-80}" height="${height-80}" rx="20" stroke="${textColor}" stroke-width="3"/>
    <text x="50%" y="45%" text-anchor="middle" fill="${textColor}" font-family="Arial, sans-serif" font-size="${Math.min(width, height) / 12}" font-weight="bold">${text}</text>
    <text x="50%" y="55%" text-anchor="middle" fill="${textColor}" font-family="Arial, sans-serif" font-size="${Math.min(width, height) / 20}" opacity="0.7">Preview</text>
  </svg>`;
}

// Create SVG placeholder images
projects.forEach(project => {
  const projectDir = path.join(outputDir, project.slug);
  
  // Ensure directory exists
  if (!fs.existsSync(projectDir)) {
    fs.mkdirSync(projectDir, { recursive: true });
  }
  
  // Create SVG placeholders
  const coverSvg = createSvgPlaceholder(project.title, 1440, 900, '#0A0A0A', project.color);
  const thumbSvg = createSvgPlaceholder(project.title, 800, 500, '#0A0A0A', project.color);
  const ogSvg = createSvgPlaceholder(project.title, 1200, 630, '#0A0A0A', project.color);
  
  // Write SVG files
  fs.writeFileSync(path.join(projectDir, `${project.slug}-cover.svg`), coverSvg);
  fs.writeFileSync(path.join(projectDir, `${project.slug}-thumb.svg`), thumbSvg);
  fs.writeFileSync(path.join(projectDir, `${project.slug}-og.svg`), ogSvg);
  
  // Create placeholder video and gif files (empty for now)
  fs.writeFileSync(path.join(projectDir, `${project.slug}-loop.webm`), '');
  fs.writeFileSync(path.join(projectDir, `${project.slug}-loop.gif`), '');
  
  console.log(`✅ Created placeholder assets for ${project.slug}`);
});

console.log('🎉 All placeholder assets created!');
