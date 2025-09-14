
import { Brain, Code, Wrench, TrendingUp } from "lucide-react";

export default function Skills() {
  const aiSkills = [
    { name: "Prompt Engineering", level: 85, icon: "fas fa-brain", color: "text-purple-500" },
    { name: "AI-First Development", level: 80, icon: "fas fa-robot", color: "text-blue-600" },
    { name: "Large Language Models", level: 75, icon: "fas fa-comments", color: "text-green-500" },
    { name: "AI Integration", level: 70, icon: "fas fa-plug", color: "text-orange-500" },
  ];

  const webDevSkills = [
    { name: "HTML5", level: 90, icon: "fab fa-html5", color: "text-orange-500" },
    { name: "CSS3", level: 85, icon: "fab fa-css3-alt", color: "text-blue-500" },
    { name: "JavaScript", level: 80, icon: "fab fa-js-square", color: "text-yellow-500" },
    { name: "React", level: 70, icon: "fab fa-react", color: "text-cyan-500" },
    { name: "Python", level: 65, icon: "fab fa-python", color: "text-green-600" },
    { name: "API Development", level: 60, icon: "fas fa-server", color: "text-purple-600" },
  ];

  const toolsSkills = [
    { name: "Git & GitHub", level: 85, icon: "fab fa-git-alt", color: "text-orange-600" },
    { name: "VS Code", level: 90, icon: "fas fa-code", color: "text-blue-600" },
    { name: "Database Design", level: 65, icon: "fas fa-database", color: "text-green-500" },
    { name: "Node.js", level: 55, icon: "fab fa-node-js", color: "text-green-600" },
  ];

  const additionalSkills = [
    "Responsive Design",
    "Figma",
    "Tailwind CSS",
    "Bootstrap",
    "RESTful APIs",
    "Problem Solving",
    "Agile Methodologies",
    "Technical Documentation"
  ];

  const SkillBar = ({ name, level, icon, color }: { 
    name: string; 
    level: number; 
    icon: string; 
    color: string; 
  }) => (
    <div className="skill-badge bg-muted rounded-lg p-4 flex items-center justify-between hover:shadow-lg transition-all duration-300" data-testid={`skill-${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
      <div className="flex items-center">
        <i className={`${icon} ${color} text-2xl mr-4`}></i>
        <span className="font-medium">{name}</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-24 bg-secondary rounded-full h-3 relative">
          <div 
            className="h-3 rounded-full bg-gradient-to-r from-accent to-primary transition-all duration-500"
            style={{ width: `${level}%` }}
          ></div>
        </div>
        <span className="text-xs text-muted-foreground font-medium w-8 text-right flex-shrink-0">{level}%</span>
      </div>
    </div>
  );

  const SkillCategory = ({ 
    title, 
    icon: Icon, 
    skills, 
    description,
    testId 
  }: { 
    title: string; 
    icon: React.ComponentType<any>; 
    skills: any[]; 
    description: string;
    testId: string;
  }) => (
    <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300" data-testid={testId}>
      <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
        <Icon className="text-accent mr-3 h-6 w-6" />
        {title}
      </h3>
      <p className="text-muted-foreground text-sm mb-6">{description}</p>
      <div className="space-y-4">
        {skills.map((skill) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            icon={skill.icon}
            color={skill.color}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4" data-testid="text-skills-title">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg" data-testid="text-skills-description">
            Combining traditional development skills with cutting-edge AI capabilities. 
            My journey through Pursuit's AI Native bootcamp has equipped me with both foundational programming knowledge 
            and forward-thinking AI integration expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <SkillCategory
            title="AI & Emerging Tech"
            icon={Brain}
            skills={aiSkills}
            description="Leading-edge AI capabilities and prompt engineering expertise"
            testId="section-ai-skills"
          />
          
          <SkillCategory
            title="Web Development"
            icon={Code}
            skills={webDevSkills}
            description="Full-stack development with modern frameworks and languages"
            testId="section-web-dev-skills"
          />
          
          <SkillCategory
            title="Tools & Platforms"
            icon={Wrench}
            skills={toolsSkills}
            description="Development tools, version control, and database management"
            testId="section-tools-skills"
          />
        </div>
        
        {/* Growth Mindset Section */}
        <div className="bg-card rounded-xl p-8 shadow-md mb-8" data-testid="section-growth-mindset">
          <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
            <TrendingUp className="text-accent mr-3 h-5 w-5" />
            Growth Mindset & Continuous Learning
          </h3>
          <p className="text-muted-foreground mb-4">
            As an AI-native developer, I believe in continuous adaptation and learning. The percentages above reflect my current proficiency, 
            but I'm constantly expanding my capabilities through hands-on projects, AI-assisted learning, and staying current with emerging technologies.
          </p>
          <div className="bg-muted rounded-lg p-4">
            <p className="text-sm text-muted-foreground italic">
              "In the rapidly evolving world of AI and development, the ability to learn, adapt, and integrate new tools 
              is more valuable than static knowledge. I embrace this challenge daily."
            </p>
          </div>
        </div>
        
        {/* Additional Skills */}
        <div className="text-center" data-testid="section-additional-skills">
          <h4 className="text-lg font-medium text-primary mb-6">Additional Competencies</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {additionalSkills.map((skill) => (
              <span 
                key={skill}
                className="bg-card px-4 py-3 rounded-lg text-muted-foreground border border-border hover:border-accent hover:text-accent transition-all duration-200"
                data-testid={`additional-skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
