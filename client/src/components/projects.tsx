import { ExternalLink, Github } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Project } from "@shared/schema";

export default function Projects() {
  const { data: projects, isLoading, error } = useQuery<Project[]>({
    queryKey: ['/api/projects', 'featured'],
    queryFn: async () => {
      const res = await fetch('/api/projects?featured=true');
      if (!res.ok) {
        throw new Error(`Failed to fetch projects: ${res.statusText}`);
      }
      return res.json();
    }
  });

  if (isLoading) {
    return (
      <section id="projects" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4" data-testid="text-projects-title">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-projects-description">
              Here are some projects I've been working on. Each one taught me something new and helped me grow as a developer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="project-card bg-card rounded-xl shadow-md overflow-hidden animate-pulse">
                <div className="w-full h-48 bg-muted"></div>
                <div className="p-6">
                  <div className="h-6 bg-muted rounded mb-2"></div>
                  <div className="h-4 bg-muted rounded mb-4"></div>
                  <div className="flex gap-2 mb-4">
                    <div className="h-6 w-16 bg-muted rounded"></div>
                    <div className="h-6 w-20 bg-muted rounded"></div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-6 w-20 bg-muted rounded"></div>
                    <div className="h-6 w-16 bg-muted rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4" data-testid="text-projects-title">
              Featured Projects
            </h2>
            <p className="text-muted-foreground" data-testid="text-projects-error">
              Unable to load projects at the moment. Please try again later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4" data-testid="text-projects-title">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-projects-description">
            Here are some projects I've been working on. Each one taught me something new and helped me grow as a developer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects && projects.length > 0 ? projects.map((project) => (
            <div 
              key={project.id}
              className="project-card bg-card rounded-xl shadow-md overflow-hidden"
              data-testid={`card-project-${project.id}`}
            >
              <img 
                src={project.imageUrl}
                alt={`${project.title} screenshot`}
                className="w-full h-48 object-cover"
                data-testid={`img-project-${project.id}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2" data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm" data-testid={`text-project-description-${project.id}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                      data-testid={`tech-${tech.toLowerCase().replace(/\s+/g, '-')}-${project.id}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
                      data-testid={`link-demo-${project.id}`}
                    >
                      <ExternalLink className="h-3 w-3" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                  {project.codeUrl && (
                    <a 
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                      data-testid={`link-code-${project.id}`}
                    >
                      <Github className="h-3 w-3" />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          )) : (
            <div className="col-span-full text-center text-muted-foreground">
              <p>No featured projects available at the moment.</p>
            </div>
          )}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6" data-testid="text-more-projects">
            More projects coming soon! I'm constantly working on new challenges to expand my skills.
          </p>
          <a 
            href="#"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            data-testid="link-view-all-projects"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
