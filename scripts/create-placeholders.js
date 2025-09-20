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
  
  // Create placeholder files (empty for now, will be replaced with actual assets)
  const placeholderContent = 'Placeholder asset - to be replaced with actual preview';
  
  // Write placeholder files
  fs.writeFileSync(path.join(projectDir, `${project.slug}-cover.jpg`), placeholderContent);
  fs.writeFileSync(path.join(projectDir, `${project.slug}-thumb.jpg`), placeholderContent);
  fs.writeFileSync(path.join(projectDir, `${project.slug}-og.png`), placeholderContent);
  
  // Create placeholder video and gif files (empty for now)
  fs.writeFileSync(path.join(projectDir, `${project.slug}-loop.webm`), '');
  fs.writeFileSync(path.join(projectDir, `${project.slug}-loop.gif`), '');
  
  console.log(`✅ Created placeholder assets for ${project.slug}`);
});

console.log('🎉 All placeholder assets created!');
