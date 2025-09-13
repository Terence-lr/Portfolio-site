import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A responsive web application built with vanilla JavaScript. Features include dynamic content loading, local storage, and mobile-first design.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      alt: "Modern web dashboard interface",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 2,
      title: "Project Two", 
      description: "An interactive portfolio website showcasing responsive design principles and CSS animations. Includes contact form validation and smooth scrolling navigation.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      alt: "E-commerce website displayed on laptop",
      technologies: ["HTML", "SCSS", "JavaScript"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 3,
      title: "Project Three",
      description: "My first React application - a task management app with component-based architecture. Features state management, conditional rendering, and props handling.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      alt: "Mobile app interface on smartphone screen",
      technologies: ["React", "CSS", "JavaScript"],
      demoLink: "#",
      codeLink: "#"
    }
  ];

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
          {projects.map((project) => (
            <div 
              key={project.id}
              className="project-card bg-card rounded-xl shadow-md overflow-hidden"
              data-testid={`card-project-${project.id}`}
            >
              <img 
                src={project.image}
                alt={project.alt}
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
                      data-testid={`tech-${tech.toLowerCase()}-${project.id}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.demoLink}
                    className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
                    data-testid={`link-demo-${project.id}`}
                  >
                    <ExternalLink className="h-3 w-3" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                  <a 
                    href={project.codeLink}
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                    data-testid={`link-code-${project.id}`}
                  >
                    <Github className="h-3 w-3" />
                    <span className="text-sm">Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
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
