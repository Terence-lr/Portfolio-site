import { useState, useEffect } from "react";
import { Menu, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px -100px 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = 'Terence_Richardson_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-md border-b border-silver/20 z-50" style={{ backgroundColor: 'rgba(13, 13, 13, 0.95)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div 
            className="text-xl font-bold cursor-pointer text-white hover:text-crimson transition-colors"
            onClick={() => scrollToSection("home")}
            data-testid="logo-home"
          >
            Terence Richardson
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-item transition-colors ${
                  activeSection === item.id
                    ? "text-crimson font-medium"
                    : "text-light-gray hover:text-white"
                }`}
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Download Resume Button */}
            <button
              onClick={handleResumeDownload}
              className="btn-crimson text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 magnetic"
              data-testid="nav-download-resume"
            >
              <Download className="h-4 w-4" />
              Resume
            </button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" data-testid="button-mobile-menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 bg-deep-black border-silver/20">
              <div className="flex flex-col space-y-4 pt-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left py-2 transition-colors ${
                      activeSection === item.id
                        ? "text-crimson font-medium"
                        : "text-light-gray hover:text-white"
                    }`}
                    data-testid={`nav-mobile-${item.id}`}
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Mobile Resume Download */}
                <button
                  onClick={handleResumeDownload}
                  className="btn-crimson text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 magnetic mt-4"
                  data-testid="nav-mobile-download-resume"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
