# Terence Richardson - Portfolio

[![Live Portfolio](https://img.shields.io/badge/Portfolio-Live%20Site-crimson?style=for-the-badge&logo=vercel)](https://www.trichardson.dev/)
[![Next.js](https://img.shields.io/badge/Next.js-14.2.32-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![CSS](https://img.shields.io/badge/CSS-Pure%20CSS-1572B6?style=for-the-badge&logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)

> **AI-Native Software Engineer & Builder in NYC**  
> Clean, fast, and discoverable portfolio showcasing modern web development with a focus on performance, accessibility, and user experience.

## 🚀 Live Site

**[View Live Portfolio →](https://www.trichardson.dev/)**

## 📋 Overview

This is my personal portfolio website built with modern web technologies and best practices. The site showcases my projects, skills, and professional experience as a full-stack developer specializing in AI-native tools and productivity systems.

### ✨ Key Features

- **🚀 Performance Optimized**: 95+ Lighthouse scores across all metrics
- **♿ Accessibility First**: WCAG AA compliant with comprehensive keyboard navigation
- **📱 Responsive Design**: Tested across 5+ device breakpoints
- **🎨 Custom Design System**: Pure CSS with CSS custom properties
- **🔍 SEO Optimized**: Complete meta tags, sitemap, and structured data
- **⚡ Modern Stack**: Next.js 14, TypeScript, and cutting-edge web APIs
- **🎯 Interactive Elements**: Custom cursor system and magnetic button interactions

## 🛠️ Tech Stack

### Core Technologies
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Pure CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)** - Custom design system with CSS modules
- **[Framer Motion](https://www.framer.com/motion/)** - Advanced animations and interactions

### Development & Deployment
- **[Vercel](https://vercel.com/)** - Hosting and deployment platform
- **[ESLint](https://eslint.org/)** - Code linting and quality assurance
- **[Prettier](https://prettier.io/)** - Code formatting
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD pipeline

## 🎨 Design System

### Color Palette
- **Primary**: Crimson (`#DC143C`) - Brand color for accents and CTAs
- **Background**: Deep Black (`#0A0A0A`) - Main background
- **Surface**: Dark Gray (`#111111`) - Card and component backgrounds
- **Text**: Pure White (`#FFFFFF`) - Primary text color
- **Muted**: Light Gray (`#E5E5E5`) - Secondary text and borders

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 400 (Regular), 500 (Medium), 600 (SemiBold)
- **Responsive**: Fluid typography with `clamp()` for optimal readability

### Interactive Elements
- **Custom Cursor**: Dual-layer orb with magnetic behavior and spotlight mode
- **Magnetic Buttons**: Tilt physics, glow sync, and kinetic light sweep effects
- **Smooth Animations**: Spring-based transitions with `prefers-reduced-motion` support

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact form
│   ├── projects/          # Projects listing and detail pages
│   ├── resume/            # Resume/CV page
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   ├── Button.tsx    # Button component system
│   │   └── ...
│   ├── CustomCursor.tsx  # Custom cursor implementation
│   ├── Navigation.tsx    # Site navigation
│   ├── ProjectCard.tsx   # Project display component
│   └── ...
├── data/                 # Static data and content
│   └── projects.ts       # Project information
├── hooks/                # Custom React hooks
│   ├── useScrollReveal.ts # Scroll animation hook
│   └── useMagneticButton.ts # Magnetic interaction hook
├── lib/                  # Utility functions
│   └── utils.ts          # Helper functions
└── styles/               # Global styles
    └── globals.css       # CSS custom properties and global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Terence-lr/Portfolio-site.git
   cd Portfolio-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📊 Performance Metrics

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmark roles
- **Keyboard Navigation**: Full site navigation without mouse
- **Screen Reader Support**: Comprehensive ARIA labels and descriptions
- **Focus Management**: Visible focus indicators and logical tab order
- **Color Contrast**: WCAG AA compliant color combinations
- **Reduced Motion**: Respects `prefers-reduced-motion` user preference

## 🔧 Customization

### Adding New Projects

1. **Update project data** in `src/data/projects.ts`
2. **Add project assets** to `public/previews/[project-name]/`
3. **Update project types** in `src/lib/types.ts` if needed

### Modifying the Design System

1. **Update CSS custom properties** in `src/styles/globals.css`
2. **Modify component styles** in respective `.module.css` files
3. **Update color tokens** for consistent theming

### Adding New Pages

1. **Create page component** in `src/app/[page-name]/page.tsx`
2. **Add navigation link** in `src/components/Navigation.tsx`
3. **Update sitemap** in `src/app/sitemap.ts`

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px - 1440px
- **Large Desktop**: 1441px+

## 🎯 SEO Features

- **Meta Tags**: Comprehensive Open Graph and Twitter Card support
- **Structured Data**: JSON-LD for Person and Project schemas
- **Sitemap**: Dynamic XML sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Canonical URLs**: Proper URL canonicalization
- **Performance**: Optimized images and lazy loading

## 🤝 Contributing

While this is a personal portfolio, I welcome feedback and suggestions:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Terence Richardson**  
*AI-Native Software Engineer & Builder*

- **Portfolio**: [trichardson.dev](https://www.trichardson.dev/)
- **Email**: [Contact Form](https://www.trichardson.dev/contact)
- **LinkedIn**: [Connect with me](https://linkedin.com/in/terence-richardson)
- **GitHub**: [@Terence-lr](https://github.com/Terence-lr)

---

<div align="center">

**Built with ❤️ in NYC**  
*Next.js • TypeScript • Pure CSS • Crimson/Black/White Theme*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

</div>