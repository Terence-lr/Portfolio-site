import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import ProjectDetail from '@/components/ProjectDetail';
import Footer from '@/components/Footer';
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
    openGraph: {
      title: `${project.title} - Terence Richardson`,
      description: project.summary,
      images: [project.ogImage],
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main>
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </>
  );
}
