import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  // Static project data as provided
  const projects = [
    {
      id: 1,
      title: "Total Job Tracker",
      description: "A comprehensive job application tracking system built with React, TypeScript, and Supabase. Features include application status tracking, interview scheduling, and progress analytics.",
      technologies: ["React", "TypeScript", "Supabase", "Vercel"],
      demoUrl: "https://total-job-tracker.vercel.app",
      codeUrl: "https://github.com/Terence-lr/total-job-tracker",
      imageUrl: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Distance Converter",
      description: "A clean and intuitive distance conversion tool built with vanilla HTML, CSS, and JavaScript. Supports multiple units and provides real-time conversion results.",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://tlr-distance-converter.replit.app/",
      codeUrl: "https://github.com/Terence-lr/distance-converter",
      imageUrl: "/api/placeholder/400/300"
    }
  ];


  return (
    <section id="projects" className="py-20 bg-charcoal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 section-title" data-testid="text-projects-title">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-crimson mx-auto mb-6"></div>
          <p className="text-light-gray max-w-2xl mx-auto" data-testid="text-projects-description">
            Here are some projects I've been working on. Each one taught me something new and helped me grow as a developer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="project-card bg-deep-black border border-silver/20 rounded-xl overflow-hidden magnetic"
              data-testid={`card-project-${project.id}`}
            >
              <div className="h-48 bg-gradient-to-br from-crimson/20 to-crimson-dark/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-crimson/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <ExternalLink className="h-8 w-8 text-crimson" />
                  </div>
                  <p className="text-light-gray text-sm">Project Preview</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2" data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-light-gray mb-4 text-sm leading-relaxed" data-testid={`text-project-description-${project.id}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-crimson/20 text-crimson px-3 py-1 rounded-full text-xs border border-crimson/30"
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
                      className="btn-crimson text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 magnetic"
                      data-testid={`link-demo-${project.id}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                  {project.codeUrl && (
                    <a 
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-crimson text-crimson px-4 py-2 rounded-lg text-sm font-medium hover:bg-crimson hover:text-white transition-all flex items-center gap-2 magnetic"
                      data-testid={`link-code-${project.id}`}
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-deep-black border border-crimson/30 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-light-gray mb-4" data-testid="text-more-projects">
              More projects coming soon! I'm constantly working on new challenges to expand my skills.
            </p>
            <a 
              href="https://github.com/Terence-lr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-crimson text-white px-6 py-3 rounded-lg font-medium magnetic inline-flex items-center gap-2"
              data-testid="link-view-all-projects"
            >
              <Github className="h-4 w-4" />
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
