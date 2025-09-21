import { Metadata } from 'next';
import ProjectsPageClient from './ProjectsPageClient';

export const metadata: Metadata = {
  title: 'Projects - Terence Richardson',
  description: 'Explore my portfolio of web development projects, including modern applications built with React, TypeScript, and other cutting-edge technologies.',
  keywords: ['projects', 'portfolio', 'web development', 'react', 'typescript', 'nextjs'],
  authors: [{ name: 'Terence Richardson' }],
  creator: 'Terence Richardson',
  openGraph: {
    title: 'Projects - Terence Richardson',
    description: 'Explore my portfolio of web development projects, including modern applications built with React, TypeScript, and other cutting-edge technologies.',
    type: 'website',
    images: [
      {
        url: '/previews/portfolio/portfolio-og.svg',
        width: 1200,
        height: 630,
        alt: 'Terence Richardson Projects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects - Terence Richardson',
    description: 'Explore my portfolio of web development projects, including modern applications built with React, TypeScript, and other cutting-edge technologies.',
    images: ['/previews/portfolio/portfolio-og.svg'],
  },
  alternates: {
    canonical: 'https://www.trichardson.dev/projects',
  },
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
