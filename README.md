# Terence Richardson Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and pure CSS. Features a clean design with crimson branding and showcases three key projects.

## 🚀 Live Site

[View Live Portfolio](https://portfolio-site-5a96pv9uj-terence-s-projects-e20ec262.vercel.app/)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Pure CSS with CSS Modules
- **Deployment**: Vercel
- **Fonts**: Inter (via next/font)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── projects/          # Projects pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── not-found.tsx      # 404 page
├── components/            # React components
├── data/                  # Project data and types
└── styles/               # Global CSS styles
```

## 🎨 Design System

### Colors
- **Background**: `#0A0A0A` (Deep Black)
- **Surface**: `#111111` (Near Black)
- **Text**: `#FFFFFF` (Pure White)
- **Muted**: `#888888` (Neutral Gray)
- **Brand**: `#DC143C` (Crimson)

### Typography
- **Display Font**: Inter (Bold, Large)
- **Body Font**: Inter (Regular, 16-18px)
- **Line Height**: 1.6-1.7

## 📱 Projects

The portfolio showcases three main projects:

1. **Portfolio** - This current website
2. **Total Job Tracker** - Job application tracking system
3. **Distance Converter** - Unit conversion tool

## 🖼️ Preview Assets

### Asset Generation

The portfolio includes a system for generating professional preview assets for each project:

#### Available Scripts

```bash
# Generate preview assets for all projects
npm run previews

# Capture screenshots and videos
npm run previews:capture

# Optimize and process assets
npm run previews:optimize
```

#### Asset Structure

Each project has assets in `/public/previews/<slug>/`:

- `cover.svg` - Main project preview (1440×900)
- `thumb.svg` - Thumbnail image (800×500)
- `og.svg` - Open Graph image (1200×630)
- `loop.webm` - Autoplay video loop (≤10s)
- `loop.gif` - GIF fallback (≤10s)

#### Regenerating Assets

To regenerate preview assets:

1. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Run the capture script**:
   ```bash
   npm run previews:capture
   ```
   This will:
   - Launch headless Chromium
   - Navigate to each project's live URL
   - Take screenshots and record videos
   - Save assets to the appropriate directories

3. **Optimize assets**:
   ```bash
   npm run previews:optimize
   ```
   This will:
   - Compress images
   - Create GIF fallbacks from videos
   - Generate OG images

#### Project URLs

The capture script uses these URLs:
- Portfolio: `https://portfolio-site-5a96pv9uj-terence-s-projects-e20ec262.vercel.app/`
- Job Tracker: `https://total-job-tracker.vercel.app`
- Unit Converter: `https://tlr-distance-converter.replit.app/`

## 🚀 Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Terence-lr/Portfolio-site.git
   cd Portfolio-site
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   ```
   http://localhost:3000
   ```

### Build

```bash
npm run build
npm start
```

## 📝 Project Data

Project information is managed in `/src/data/projects.ts`. To add or modify projects:

1. Update the `projects` array
2. Ensure all required fields are present
3. Add corresponding preview assets
4. Update the capture script URLs if needed

### Required Fields

```typescript
interface Project {
  slug: string;           // URL slug
  title: string;          // Display name
  summary: string;        // 1-2 sentence description
  tech: string[];         // Technology stack
  repoUrl: string;        // GitHub repository
  demoUrl: string;        // Live demo URL
  preview: {              // Asset paths
    cover: string;
    video: string;
    gif: string;
    thumb?: string;
  };
  ogImage: string;        // Open Graph image
  highlights: string[];   // Key features (3-5 bullets)
  role: string;           // Your role
  year: string;           // Project year
  cta: {                  // Button text
    demo: string;
    repo: string;
  };
}
```

## 🎯 Features

- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Performance Optimized** - Fast loading and smooth animations
- ✅ **SEO Friendly** - Proper meta tags and sitemap
- ✅ **Accessibility** - WCAG AA compliant
- ✅ **Modern Stack** - Next.js 14, TypeScript, CSS Modules
- ✅ **Clean Design** - Minimal, professional aesthetic
- ✅ **Interactive Previews** - Hover effects and smooth transitions

## 📄 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

This is a personal portfolio project. For suggestions or issues, please open a GitHub issue.

---

Built with ❤️ by Terence Richardson