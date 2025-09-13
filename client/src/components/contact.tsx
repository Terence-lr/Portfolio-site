import { useState } from "react";
import { Mail, Linkedin, Github, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const lookingFor = [
    "Junior/Entry-level Developer positions",
    "AI-first development opportunities", 
    "Collaborative team environment",
    "Remote or New York-based roles"
  ];

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4" data-testid="text-contact-title">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-description">
            I'm actively looking for junior developer opportunities and would love to hear from you. 
            Let's connect and discuss how I can contribute to your team with my AI-first development approach!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-6" data-testid="text-lets-connect">
                Let's Connect
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4" data-testid="contact-email">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Mail className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a 
                      href="mailto:terence.richardson@pursuit.org"
                      className="text-muted-foreground hover:text-accent transition-colors"
                      data-testid="link-email"
                    >
                      terence.richardson@pursuit.org
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4" data-testid="contact-linkedin">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Linkedin className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/terence-richardson-13b22a211/"
                      className="text-muted-foreground hover:text-accent transition-colors"
                      data-testid="link-linkedin"
                    >
                      linkedin.com/in/terence-richardson-13b22a211
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4" data-testid="contact-github">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Github className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">GitHub</p>
                    <a 
                      href="https://github.com/Terence-lr"
                      className="text-muted-foreground hover:text-accent transition-colors"
                      data-testid="link-github"
                    >
                      github.com/Terence-lr
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4" data-testid="contact-twitter">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <svg className="text-white h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Twitter/X</p>
                    <a 
                      href="https://x.com/Terensujin"
                      className="text-muted-foreground hover:text-accent transition-colors"
                      data-testid="link-twitter"
                    >
                      x.com/Terensujin
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-xl" data-testid="section-looking-for">
              <h4 className="font-semibold text-primary mb-3">What I'm Looking For</h4>
              <ul className="space-y-2 text-muted-foreground">
                {lookingFor.map((item, index) => (
                  <li key={index} className="flex items-center gap-2" data-testid={`looking-for-${index}`}>
                    <Check className="text-green-500 h-4 w-4" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-primary mb-6" data-testid="text-send-message">
              Send Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2"
                  data-testid="input-name"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2"
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-2"
                  data-testid="input-subject"
                />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 resize-none"
                  data-testid="textarea-message"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-accent text-white hover:bg-accent/90"
                disabled={isSubmitting}
                data-testid="button-send-message"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
