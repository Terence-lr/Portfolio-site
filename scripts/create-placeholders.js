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
    color: '#00BFFF'
  },
  {
    slug: 'unit-converter',
    title: 'Unit Converter',
    color: '#32CD32'
  }
];

const outputDir = path.join(__dirname, '..', 'public', 'previews');

// Create SVG placeholder images
projects.forEach(project => {
  const projectDir = path.join(outputDir, project.slug);
  
  // Ensure directory exists
  if (!fs.existsSync(projectDir)) {
    fs.mkdirSync(projectDir, { recursive: true });
  }
  
  // Create cover image SVG
  const coverSvg = `<svg width="1440" height="900" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1440" height="900" fill="#0A0A0A"/>
    <rect x="120" y="120" width="1200" height="660" rx="20" fill="${project.color}" opacity="0.1"/>
    <rect x="120" y="120" width="1200" height="660" rx="20" stroke="${project.color}" stroke-width="2"/>
    <text x="720" y="450" text-anchor="middle" fill="${project.color}" font-family="Arial, sans-serif" font-size="48" font-weight="bold">${project.title}</text>
    <text x="720" y="500" text-anchor="middle" fill="#888888" font-family="Arial, sans-serif" font-size="24">Preview Image</text>
  </svg>`;
  
  // Create thumb image SVG
  const thumbSvg = `<svg width="800" height="500" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="500" fill="#0A0A0A"/>
    <rect x="60" y="60" width="680" height="380" rx="15" fill="${project.color}" opacity="0.1"/>
    <rect x="60" y="60" width="680" height="380" rx="15" stroke="${project.color}" stroke-width="2"/>
    <text x="400" y="250" text-anchor="middle" fill="${project.color}" font-family="Arial, sans-serif" font-size="32" font-weight="bold">${project.title}</text>
    <text x="400" y="280" text-anchor="middle" fill="#888888" font-family="Arial, sans-serif" font-size="16">Thumbnail</text>
  </svg>`;
  
  // Create OG image SVG
  const ogSvg = `<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="630" fill="#0A0A0A"/>
    <rect x="100" y="100" width="1000" height="430" rx="20" fill="${project.color}" opacity="0.1"/>
    <rect x="100" y="100" width="1000" height="430" rx="20" stroke="${project.color}" stroke-width="3"/>
    <text x="600" y="300" text-anchor="middle" fill="${project.color}" font-family="Arial, sans-serif" font-size="48" font-weight="bold">${project.title}</text>
    <text x="600" y="350" text-anchor="middle" fill="#888888" font-family="Arial, sans-serif" font-size="24">Terence Richardson</text>
  </svg>`;
  
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
