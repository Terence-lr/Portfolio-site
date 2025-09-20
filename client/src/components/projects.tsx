import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Projects() {
  const [sectionRef, isSectionVisible] = useScrollAnimation();
  
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
    <section ref={sectionRef} id="projects" className={`py-20 bg-charcoal scroll-animate ${isSectionVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 section-title" data-testid="text-projects-title">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-crimson mx-auto mb-8"></div>
          <p className="text-light-gray max-w-3xl mx-auto text-lg leading-relaxed" data-testid="text-projects-description">
            These are real projects I've built and shipped. Each one demonstrates my ability to solve problems, 
            learn new technologies, and deliver production-ready applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`project-card bg-deep-black border border-silver-20 rounded-2xl overflow-hidden magnetic hover:border-crimson-30 transition-all duration-300 ${isSectionVisible ? 'animate-in' : ''}`}
              data-testid={`card-project-${project.id}`}
            >
              {/* Project Screenshot/Preview */}
              <div className="h-64 bg-gradient-to-br from-crimson-20 to-crimson-dark-20 flex items-center justify-center relative">
                <div className="text-center">
                  <div className="w-20 h-20 bg-crimson-30 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <ExternalLink className="h-10 w-10 text-crimson" />
                  </div>
                  <p className="text-light-gray text-lg font-medium">Project Preview</p>
                  <p className="text-light-gray text-sm mt-2">Click demo to see live version</p>
                </div>
                
                {/* Project Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-crimson text-white px-3 py-1 rounded-full text-xs font-medium">
                    Live
                  </span>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-3" data-testid={`text-project-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <p className="text-light-gray leading-relaxed" data-testid={`text-project-description-${project.id}`}>
                    {project.description}
                  </p>
                </div>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-crimson-20 text-crimson px-4 py-2 rounded-full text-sm font-medium border border-crimson-30 hover:bg-crimson-30 transition-colors"
                        data-testid={`tech-${tech.toLowerCase().replace(/\s+/g, '-')}-${project.id}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-4">
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-crimson text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 magnetic flex-1 justify-center"
                      data-testid={`link-demo-${project.id}`}
                    >
                      <ExternalLink className="h-5 w-5" />
                      View Live Demo
                    </a>
                  )}
                  {project.codeUrl && (
                    <a 
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-crimson text-crimson px-6 py-3 rounded-lg font-medium hover:bg-crimson hover:text-white transition-all flex items-center gap-2 magnetic flex-1 justify-center"
                      data-testid={`link-code-${project.id}`}
                    >
                      <Github className="h-5 w-5" />
                      View Code
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
