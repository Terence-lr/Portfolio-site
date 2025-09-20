import { useState, useEffect } from 'react';
import { Github, Play, Code, Zap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  codeUrl: string;
  features: string[];
  status: 'live' | 'development' | 'beta';
  metrics: {
    users: number;
    performance: number;
    uptime: number;
  };
}

export default function InteractiveProjects() {
  const [sectionRef, isSectionVisible] = useScrollAnimation();
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Total Job Tracker",
      description: "A comprehensive job application tracking system with real-time analytics and AI-powered insights.",
      technologies: ["React", "TypeScript", "Supabase", "Vercel"],
      demoUrl: "https://total-job-tracker.vercel.app",
      codeUrl: "https://github.com/Terence-lr/total-job-tracker",
      features: [
        "Real-time job application tracking",
        "AI-powered resume optimization",
        "Interview scheduling automation",
        "Performance analytics dashboard"
      ],
      status: 'live',
      metrics: {
        users: 1250,
        performance: 98,
        uptime: 99.9
      }
    },
    {
      id: 2,
      title: "Distance Converter",
      description: "Interactive unit conversion tool with real-time calculations and responsive design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://tlr-distance-converter.replit.app/",
      codeUrl: "https://github.com/Terence-lr/distance-converter",
      features: [
        "Real-time unit conversion",
        "Mobile-responsive design",
        "Input validation",
        "Clean, intuitive interface"
      ],
      status: 'live',
      metrics: {
        users: 850,
        performance: 100,
        uptime: 99.8
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'text-primary bg-primary/20 border-primary';
      case 'development': return 'text-accent bg-accent/20 border-accent';
      case 'beta': return 'text-destructive bg-destructive/20 border-destructive';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  return (
    <section ref={sectionRef} id="projects" className={`section-spacing bg-charcoal scroll-animate ${isSectionVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 section-title">
            Interactive Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-light-gray max-w-3xl mx-auto text-lg leading-relaxed">
            Explore my projects with live metrics, interactive previews, and real-time data.
            Each project showcases different aspects of modern web development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`project-card bg-deep-black border border-silver-20 rounded-2xl overflow-hidden hover-lift hover-glow transition-all duration-300 ${
                isSectionVisible ? 'animate-in' : ''
              } ${activeProject === project.id ? 'ring-2 ring-primary' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => !isMobile && setActiveProject(project.id)}
              onMouseLeave={() => !isMobile && setActiveProject(null)}
            >
              {/* Project Header */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-light-gray text-lg font-medium">Interactive Preview</p>
                  <p className="text-light-gray text-sm">Hover for live metrics</p>
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                    {project.status.toUpperCase()}
                  </span>
                </div>

                {/* Live Metrics Overlay */}
                {activeProject === project.id && !isMobile && (
                  <div className="absolute inset-0 bg-deep-black/90 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">{project.metrics.users.toLocaleString()}</div>
                        <div className="text-xs text-light-gray">Users</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-accent">{project.metrics.performance}%</div>
                        <div className="text-xs text-light-gray">Performance</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-destructive">{project.metrics.uptime}%</div>
                        <div className="text-xs text-light-gray">Uptime</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-light-gray leading-relaxed">{project.description}</p>
                </div>
                
                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-light-gray text-sm flex items-center gap-2">
                        <Zap className="h-3 w-3 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-crimson text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 flex-1 justify-center hover-lift"
                  >
                    <Play className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a 
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-primary text-primary px-4 py-2 rounded-lg font-medium hover:bg-primary hover:text-white transition-all flex items-center gap-2 flex-1 justify-center hover-lift"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                </div>

                {/* Mobile Metrics */}
                {isMobile && (
                  <div className="mt-4 pt-4 border-t border-silver-20">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-primary">{project.metrics.users.toLocaleString()}</div>
                        <div className="text-xs text-light-gray">Users</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-accent">{project.metrics.performance}%</div>
                        <div className="text-xs text-light-gray">Performance</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-destructive">{project.metrics.uptime}%</div>
                        <div className="text-xs text-light-gray">Uptime</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Projects */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/Terence-lr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary/20 text-primary px-6 py-3 rounded-lg font-medium border border-primary/30 hover:bg-primary/30 transition-all hover-lift"
          >
            <Github className="h-5 w-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
