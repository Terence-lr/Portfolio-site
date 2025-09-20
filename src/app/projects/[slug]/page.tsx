import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectDetail from '@/components/ProjectDetail';
import { getProjectBySlug, getAllProjectSlugs } from '@/data/projects';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Terence Richardson`,
    description: project.summary,
    keywords: [...project.tech, 'portfolio', 'project', 'development'],
    authors: [{ name: 'Terence Richardson' }],
    creator: 'Terence Richardson',
    openGraph: {
      title: `${project.title} - Terence Richardson`,
      description: project.summary,
      type: 'article',
      images: [
        {
          url: project.ogImage,
          width: 1200,
          height: 630,
          alt: `${project.title} project preview`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} - Terence Richardson`,
      description: project.summary,
      images: [project.ogImage],
    },
    alternates: {
      canonical: `https://portfolio-site-5a96pv9uj-terence-s-projects-e20ec262.vercel.app/projects/${params.slug}`,
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
