export interface Project {
  slug: string;
  title: string;
  summary: string;
  microTagline: string;
  tech: string[];
  repoUrl: string;
  demoUrl: string;
  preview: {
    cover: string;
    video: string;
    gif: string;
    thumb?: string;
  };
  ogImage: string;
  highlights: string[];
  role: string;
  year: string;
  cta: {
    demo: string;
    repo: string;
  };
}

export const projects: Project[] = [
  {
    slug: 'portfolio',
    title: 'Portfolio',
    summary: 'My personal site showcasing projects, skills, and builder mindset.',
    microTagline: 'Clean, fast, and discoverable.',
    tech: ['Next.js', 'TypeScript', 'Pure CSS'],
    repoUrl: 'https://github.com/Terence-lr/Portfolio-site',
    demoUrl: 'https://portfolio-site-5a96pv9uj-terence-s-projects-e20ec262.vercel.app/',
    preview: {
      cover: '/previews/portfolio/portfolio-cover.svg',
      video: '/previews/portfolio/portfolio-loop.webm',
      gif: '/previews/portfolio/portfolio-loop.gif',
      thumb: '/previews/portfolio/portfolio-thumb.svg'
    },
    ogImage: '/previews/portfolio/portfolio-og.svg',
    highlights: [
      'Built with Next.js 14, TypeScript, and pure CSS',
      'Responsive across devices',
      'SEO-friendly with per-page metadata'
    ],
    role: 'Solo builder',
    year: '2025',
    cta: {
      demo: 'View Live Site',
      repo: 'View Source'
    }
  },
  {
    slug: 'job-tracker',
    title: 'Job Tracker',
    summary: 'Multi-user job-hunt dashboard to organize applications and track progress.',
    microTagline: 'Clarity for the grind.',
    tech: ['React', 'Firebase', 'Vercel'],
    repoUrl: 'https://github.com/Terence-lr/total-job-tracker-',
    demoUrl: 'https://total-job-tracker.vercel.app',
    preview: {
      cover: '/previews/job-tracker/job-tracker-cover.svg',
      video: '/previews/job-tracker/job-tracker-loop.webm',
      gif: '/previews/job-tracker/job-tracker-loop.gif',
      thumb: '/previews/job-tracker/job-tracker-thumb.svg'
    },
    ogImage: '/previews/job-tracker/job-tracker-og.svg',
    highlights: [
      'React + Firebase + Vercel hosting',
      'Auth + secure storage',
      'Filtered views and fast search'
    ],
    role: 'Solo builder',
    year: '2025',
    cta: {
      demo: 'Try Demo',
      repo: 'View Source'
    }
  },
  {
    slug: 'unit-converter',
    title: 'Unit Converter',
    summary: 'Fast, no-frills unit converter with keyboard shortcuts.',
    microTagline: 'Convert at the speed of thought.',
    tech: ['React', 'TypeScript', 'PWA'],
    repoUrl: 'https://github.com/Terence-lr/distance-converter',
    demoUrl: 'https://tlr-distance-converter.replit.app/',
    preview: {
      cover: '/previews/unit-converter/unit-converter-cover.svg',
      video: '/previews/unit-converter/unit-converter-loop.webm',
      gif: '/previews/unit-converter/unit-converter-loop.gif',
      thumb: '/previews/unit-converter/unit-converter-thumb.svg'
    },
    ogImage: '/previews/unit-converter/unit-converter-og.svg',
    highlights: [
      'Responsive PWA for mobile/desktop',
      'Common conversions (length, weight, temperature, etc.)',
      'Lightweight and instantly deployable'
    ],
    role: 'Solo builder',
    year: '2025',
    cta: {
      demo: 'Try Converter',
      repo: 'View Source'
    }
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug);
}
