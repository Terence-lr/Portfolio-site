import { Calendar, MapPin, Building } from "lucide-react";

export default function WorkExperience() {
  const experiences = [
    {
      title: "Freelance Web Developer",
      company: "Independent Contractor",
      location: "Remote",
      period: "09/2025 – Present",
      description: [
        "Develop full-stack web applications using modern JavaScript frameworks",
        "Build responsive interfaces with mobile-first design methodologies"
      ]
    },
    {
      title: "Implementation Associate",
      company: "PNC Bank",
      location: "Pittsburgh, PA",
      period: "10/2022 – 02/2025",
      description: [
        "Implemented standard products and services for clients",
        "Managed multiple implementations while reporting progress to internal partners"
      ]
    },
    {
      title: "Digital Business Accelerator",
      company: "Multiverse",
      location: "Remote",
      period: "10/2022 – 10/2023",
      description: [
        "Built foundation of critical business skills including project management",
        "Applied modern methodologies to optimize workflows and processes"
      ]
    },
    {
      title: "Community Health Worker",
      company: "CABS Health Network",
      location: "New York, NY",
      period: "04/2022 – 02/2023",
      description: [
        "Provided technical support to community members navigating healthcare systems",
        "Developed educational materials using digital tools"
      ]
    },
    {
      title: "Submarine Navigation Electronics Technician",
      company: "US Navy",
      location: "Various Locations",
      period: "10/2018 – 11/2020",
      description: [
        "Maintained sophisticated electronic navigation and communication systems",
        "Performed technical troubleshooting in high-pressure environments"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-charcoal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 section-title" data-testid="text-experience-title">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-crimson mx-auto mb-6"></div>
          <p className="text-light-gray max-w-2xl mx-auto" data-testid="text-experience-description">
            A diverse professional journey spanning technology, healthcare, and military service, 
            bringing unique perspectives to full-stack development.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-deep-black border border-silver/20 rounded-xl p-6 hover:border-crimson/50 transition-all duration-300 hover:shadow-lg hover:shadow-crimson/10"
              data-testid={`experience-card-${index}`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2" data-testid={`exp-title-${index}`}>
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-4 text-light-gray mb-2">
                    <div className="flex items-center gap-1">
                      <Building className="h-4 w-4 text-crimson" />
                      <span data-testid={`exp-company-${index}`}>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-crimson" />
                      <span data-testid={`exp-location-${index}`}>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-crimson font-medium mt-2 md:mt-0">
                  <Calendar className="h-4 w-4" />
                  <span data-testid={`exp-period-${index}`}>{exp.period}</span>
                </div>
              </div>
              
              <ul className="space-y-2">
                {exp.description.map((desc, descIndex) => (
                  <li 
                    key={descIndex}
                    className="text-light-gray flex items-start gap-2"
                    data-testid={`exp-desc-${index}-${descIndex}`}
                  >
                    <span className="text-crimson mt-1">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-deep-black border border-crimson/30 rounded-xl p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold text-white mb-3">Transition to Tech</h4>
            <p className="text-light-gray leading-relaxed">
              My journey from military electronics to healthcare technology and now full-stack development 
              has equipped me with unique problem-solving skills, attention to detail, and the ability to 
              work effectively in high-pressure environments. I bring this diverse experience to create 
              robust, user-focused applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
