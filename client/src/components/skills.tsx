import { CheckCircle, Rocket } from "lucide-react";

export default function Skills() {
  const proficientSkills = [
    { name: "HTML5", level: 90, icon: "fab fa-html5", color: "text-orange-500" },
    { name: "CSS3", level: 85, icon: "fab fa-css3-alt", color: "text-blue-500" },
    { name: "JavaScript", level: 75, icon: "fab fa-js-square", color: "text-yellow-500" },
  ];

  const learningSkills = [
    { name: "React", level: 60, icon: "fab fa-react", color: "text-cyan-500" },
    { name: "Node.js", level: 40, icon: "fab fa-node-js", color: "text-green-600" },
    { name: "MongoDB", level: 30, icon: "fas fa-database", color: "text-purple-500" },
  ];

  const additionalSkills = [
    "Git & GitHub",
    "VS Code", 
    "Responsive Design",
    "Figma",
    "Tailwind CSS",
    "Bootstrap"
  ];

  const SkillBar = ({ name, level, icon, color, type }: { 
    name: string; 
    level: number; 
    icon: string; 
    color: string; 
    type: "proficient" | "learning";
  }) => (
    <div className="skill-badge bg-muted rounded-lg p-4 flex items-center justify-between" data-testid={`skill-${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
      <div className="flex items-center">
        <i className={`${icon} ${color} text-2xl mr-4`}></i>
        <span className="font-medium">{name}</span>
      </div>
      <div className="w-24 bg-secondary rounded-full h-2">
        <div 
          className={`h-2 rounded-full ${type === "proficient" ? "bg-green-500" : "bg-accent"}`}
          style={{ width: `${level}%` }}
        ></div>
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
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-skills-description">
            Here are the technologies I've been learning and working with. I'm always eager to expand this list!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Proficient Skills */}
          <div className="bg-card rounded-xl p-8 shadow-md" data-testid="section-proficient-skills">
            <h3 className="text-xl font-semibold text-primary mb-6 flex items-center">
              <CheckCircle className="text-green-500 mr-3 h-5 w-5" />
              Proficient
            </h3>
            <div className="space-y-4">
              {proficientSkills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  color={skill.color}
                  type="proficient"
                />
              ))}
            </div>
          </div>
          
          {/* Learning Skills */}
          <div className="bg-card rounded-xl p-8 shadow-md" data-testid="section-learning-skills">
            <h3 className="text-xl font-semibold text-primary mb-6 flex items-center">
              <Rocket className="text-accent mr-3 h-5 w-5" />
              Currently Learning
            </h3>
            <div className="space-y-4">
              {learningSkills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  color={skill.color}
                  type="learning"
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Additional Skills */}
        <div className="mt-12 text-center" data-testid="section-additional-skills">
          <h4 className="text-lg font-medium text-primary mb-4">Tools & Other Skills</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill) => (
              <span 
                key={skill}
                className="bg-card px-4 py-2 rounded-lg text-muted-foreground border border-border"
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
