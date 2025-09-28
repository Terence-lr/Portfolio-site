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
    demoUrl: 'https://www.trichardson.dev/',
    preview: {
      cover: '/previews/portfolio/portfolio-cover.svg',
      video: '/previews/portfolio/portfolio-loop.webm',
      gif: '/previews/portfolio/portfolio-loop.gif',
      thumb: '/previews/portfolio/portfolio-thumb.svg'
    },
    ogImage: '/previews/portfolio/portfolio-og.svg',
    highlights: [
      'Built with Next.js 14, TypeScript, and pure CSS for optimal performance',
      'Responsive design tested across 5+ device breakpoints',
      'SEO-optimized with 95+ Lighthouse scores across all metrics'
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
    tech: ['React', 'Supabase', 'Vercel'],
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
      'React + Supabase + Vercel hosting with 99.9% uptime',
      'Secure authentication with Row Level Security (RLS)',
      'Advanced filtering reduces application search time by 60%'
    ],
    role: 'Solo builder',
    year: '2025',
    cta: {
      demo: 'Try Demo',
      repo: 'View Source'
    }
  },
  {
    slug: 'purple-lounge-spa',
    title: 'Purple Lounge Spa',
    summary: 'Full-stack e-commerce platform for luxury spa services and wellness products.',
    microTagline: 'Luxury wellness, reimagined.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'Vercel'],
    repoUrl: 'https://github.com/Terence-lr/Purple-lounge-spa',
    demoUrl: 'https://purple-lounge-spa.vercel.app/',
    preview: {
      cover: '/previews/purple-lounge-spa/purple-lounge-spa-cover.svg',
      video: '/previews/purple-lounge-spa/purple-lounge-spa-loop.webm',
      gif: '/previews/purple-lounge-spa/purple-lounge-spa-loop.gif',
      thumb: '/previews/purple-lounge-spa/purple-lounge-spa-thumb.svg'
    },
    ogImage: '/previews/purple-lounge-spa/purple-lounge-spa-og.svg',
    highlights: [
      'Complete e-commerce solution with Stripe payment integration',
      'Responsive design optimized for mobile and desktop experiences',
      'Secure checkout process with real-time inventory management'
    ],
    role: 'Solo builder',
    year: '2025',
    cta: {
      demo: 'View Live Site',
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
