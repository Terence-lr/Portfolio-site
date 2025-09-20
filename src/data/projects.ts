export interface Project {
  slug: string;
  title: string;
  summary: string;
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
    summary: 'A modern, responsive portfolio website showcasing my work and skills with clean design and smooth animations.',
    tech: ['Next.js', 'TypeScript', 'CSS', 'Vercel'],
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
      'Responsive design with mobile-first approach',
      'Clean, modern UI with smooth animations',
      'Optimized performance and accessibility',
      'SEO-friendly with proper meta tags'
    ],
    role: 'Solo builder',
    year: '2024',
    cta: {
      demo: 'View Live Site',
      repo: 'View Source'
    }
  },
  {
    slug: 'job-tracker',
    title: 'Total Job Tracker',
    summary: 'A comprehensive job application tracking system with real-time analytics and AI-powered insights for job seekers.',
    tech: ['React', 'TypeScript', 'Supabase', 'Vercel'],
    repoUrl: 'https://github.com/Terence-lr/total-job-tracker',
    demoUrl: 'https://total-job-tracker.vercel.app',
    preview: {
      cover: '/previews/job-tracker/job-tracker-cover.svg',
      video: '/previews/job-tracker/job-tracker-loop.webm',
      gif: '/previews/job-tracker/job-tracker-loop.gif',
      thumb: '/previews/job-tracker/job-tracker-thumb.svg'
    },
    ogImage: '/previews/job-tracker/job-tracker-og.svg',
    highlights: [
      'Real-time job application tracking',
      'AI-powered resume optimization',
      'Interview scheduling automation',
      'Performance analytics dashboard'
    ],
    role: 'Solo builder',
    year: '2024',
    cta: {
      demo: 'Try Demo',
      repo: 'View Source'
    }
  },
  {
    slug: 'unit-converter',
    title: 'Distance Converter',
    summary: 'A fast, intuitive unit conversion tool with real-time calculations and responsive design for various measurement units.',
    tech: ['HTML', 'CSS', 'JavaScript'],
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
      'Real-time unit conversion',
      'Mobile-responsive design',
      'Input validation and error handling',
      'Clean, intuitive interface'
    ],
    role: 'Solo builder',
    year: '2024',
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
