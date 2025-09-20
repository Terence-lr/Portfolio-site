
import { Code, ExternalLink, Github, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Skills() {
  const [sectionRef, isSectionVisible] = useScrollAnimation();
  
  const projectSkills = [
    {
      project: "Total Job Tracker",
      description: "Full-stack job application management system",
      technologies: ["React", "TypeScript", "Supabase", "Vercel"],
      demoUrl: "https://total-job-tracker.vercel.app",
      codeUrl: "https://github.com/Terence-lr/total-job-tracker",
      highlights: [
        "Built responsive React components with TypeScript",
        "Integrated Supabase for real-time database operations",
        "Deployed to Vercel with CI/CD pipeline",
        "Implemented user authentication and data persistence"
      ]
    },
    {
      project: "Distance Converter",
      description: "Interactive unit conversion tool",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://tlr-distance-converter.replit.app/",
      codeUrl: "https://github.com/Terence-lr/distance-converter",
      highlights: [
        "Vanilla JavaScript for dynamic calculations",
        "Responsive CSS design with mobile-first approach",
        "Real-time conversion with input validation",
        "Clean, intuitive user interface"
      ]
    }
  ];

  const coreTechnologies = [
    { name: "React", category: "Frontend", projects: ["Total Job Tracker"] },
    { name: "TypeScript", category: "Language", projects: ["Total Job Tracker"] },
    { name: "JavaScript", category: "Language", projects: ["Distance Converter"] },
    { name: "HTML", category: "Markup", projects: ["Distance Converter"] },
    { name: "CSS", category: "Styling", projects: ["Distance Converter", "Portfolio"] },
    { name: "Supabase", category: "Backend", projects: ["Total Job Tracker"] },
    { name: "Vercel", category: "Deployment", projects: ["Total Job Tracker"] },
    { name: "Git", category: "Version Control", projects: ["All Projects"] }
  ];

  const ProjectSkillCard = ({ project }: { project: any }) => (
    <div className="bg-deep-black border border-silver-20 rounded-xl p-6 hover:border-crimson-30 transition-all duration-300 magnetic" data-testid={`project-skill-${project.project.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{project.project}</h3>
          <p className="text-light-gray text-sm mb-4">{project.description}</p>
        </div>
        <div className="flex gap-2">
          <a 
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-crimson text-white px-3 py-1 rounded text-sm font-medium flex items-center gap-1 magnetic"
            data-testid={`demo-${project.project.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <ExternalLink className="h-3 w-3" />
            Demo
          </a>
          <a 
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-crimson text-crimson px-3 py-1 rounded text-sm font-medium hover:bg-crimson hover:text-white transition-all flex items-center gap-1 magnetic"
            data-testid={`code-${project.project.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <Github className="h-3 w-3" />
            Code
          </a>
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="text-sm font-medium text-white mb-2">Technologies Used:</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string) => (
            <span 
              key={tech}
              className="bg-crimson-20 text-crimson px-3 py-1 rounded-full text-xs border border-crimson-30"
              data-testid={`tech-${tech.toLowerCase()}-${project.project.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium text-white mb-2">Key Achievements:</h4>
        <ul className="space-y-1">
          {project.highlights.map((highlight: string, index: number) => (
            <li 
              key={index}
              className="text-light-gray text-xs flex items-start gap-2"
              data-testid={`highlight-${index}-${project.project.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <span className="text-crimson mt-1">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const TechnologyBadge = ({ tech }: { tech: any }) => (
    <div className="bg-charcoal border border-silver-20 rounded-lg p-4 hover:border-crimson-30 transition-all duration-300" data-testid={`tech-badge-${tech.name.toLowerCase()}`}>
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold text-white">{tech.name}</h4>
        <span className="text-xs text-crimson bg-crimson-20 px-2 py-1 rounded">{tech.category}</span>
      </div>
      <div className="text-xs text-light-gray">
        <span className="text-white">Used in: </span>
        {tech.projects.join(", ")}
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} id="skills" className={`section-spacing bg-background scroll-animate ${isSectionVisible ? 'visible' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 section-title" data-testid="text-skills-title">
            Skills Through Projects
          </h2>
          <div className="w-20 h-1 bg-crimson mx-auto mb-6"></div>
          <p className="text-light-gray max-w-3xl mx-auto text-lg" data-testid="text-skills-description">
            Rather than abstract percentages, I demonstrate my skills through actual projects I've built and shipped. 
            Each project showcases real competency with specific technologies and problem-solving approaches.
          </p>
        </div>
        
        {/* Project-Based Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projectSkills.map((project) => (
            <ProjectSkillCard key={project.project} project={project} />
          ))}
        </div>
        
        {/* Technology Overview */}
        <div className="bg-deep-black border border-silver-20 rounded-xl p-8 mb-8" data-testid="section-tech-overview">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
            <Code className="text-crimson mr-3 h-6 w-6" />
            Technology Stack Overview
          </h3>
          <p className="text-light-gray mb-6">
            Here's a comprehensive view of the technologies I've used in my projects, organized by category and showing real-world application.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {coreTechnologies.map((tech) => (
              <TechnologyBadge key={tech.name} tech={tech} />
            ))}
          </div>
        </div>
        
        {/* Learning Philosophy */}
        <div className="text-center bg-charcoal border border-silver-20 rounded-xl p-8" data-testid="section-learning-philosophy">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center justify-center">
            <Zap className="text-crimson mr-3 h-6 w-6" />
            Project-Driven Learning
          </h3>
          <p className="text-light-gray max-w-2xl mx-auto leading-relaxed">
            I believe in learning through building. Each project represents a new challenge that pushes me to master new technologies, 
            solve complex problems, and ship production-ready code. This approach ensures my skills are practical, current, and battle-tested.
          </p>
        </div>
      </div>
    </section>
  );
}
