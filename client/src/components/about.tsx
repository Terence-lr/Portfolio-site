import { MapPin, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#f7fafc' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4" data-testid="text-about-title">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/attached_assets/IMG_1903_Original_1757873059220.jpg" 
              alt="Terence Richardson - Professional headshot" 
              className="rounded-xl shadow-lg w-full max-w-sm mx-auto"
              data-testid="img-about-photo"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary mb-4" data-testid="text-about-journey-title">
              My Journey Into Tech
            </h3>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-about-paragraph-1">
              Currently enrolled in the Pursuit AI Native coding bootcamp, I'm transitioning into tech as an AI-first developer. 
              My journey combines traditional development skills with cutting-edge AI integration and prompt engineering.
            </p>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-about-paragraph-2">
              I'm building solutions through both hands-on development and strategic prompt engineering, 
              learning to leverage AI tools to create more efficient and innovative applications. 
              This unique approach gives me a modern perspective on problem-solving in tech.
            </p>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-about-paragraph-3">
              I'm excited to bring my fresh perspective on AI-native development, problem-solving skills, 
              and enthusiasm for emerging technologies to a forward-thinking development team.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-muted-foreground" data-testid="info-location">
                <MapPin className="h-4 w-4 text-accent" />
                <span>New York, NY</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground" data-testid="info-education">
                <GraduationCap className="h-4 w-4 text-accent" />
                <span>Pursuit AI Native Bootcamp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}