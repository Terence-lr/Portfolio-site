import { MapPin, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
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
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800" 
              alt="Alex Johnson - Professional headshot" 
              className="rounded-xl shadow-lg w-full max-w-sm mx-auto"
              data-testid="img-about-photo"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary mb-4" data-testid="text-about-journey-title">
              My Journey Into Tech
            </h3>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-about-paragraph-1">
              After five years in marketing, I discovered my passion for coding through a curiosity about how websites work. 
              What started as weekend tutorials quickly became a full-time commitment to changing careers.
            </p>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-about-paragraph-2">
              I've spent the last 8 months immersing myself in web development fundamentals, building projects, 
              and learning from the amazing developer community. My background in marketing gives me a unique 
              perspective on creating user-focused solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-about-paragraph-3">
              I'm excited to bring my problem-solving skills, attention to detail, and fresh perspective 
              to a development team where I can continue growing and contributing meaningful work.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-muted-foreground" data-testid="info-location">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Seattle, WA</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground" data-testid="info-education">
                <GraduationCap className="h-4 w-4 text-accent" />
                <span>Self-taught Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
