import { Mail, Linkedin, Github } from "lucide-react";
import logoImage from "@assets/Bazaart_1757875688820.png";

export default function Footer() {
  return (
    <footer className="py-8" style={{ backgroundColor: '#1a365d', color: 'white' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6" data-testid="footer-logo">
            <img 
              src={logoImage}
              alt="TerenceLR Logo"
              className="h-20 w-auto mx-auto opacity-90 hover:opacity-100 transition-opacity"
              style={{ 
                objectPosition: 'center top',
                clipPath: 'inset(0 0 15% 0)'
              }}
            />
          </div>
          <p className="mb-4" data-testid="text-copyright">
            &copy; 2024 Terence Richardson. All rights reserved.
          </p>
          <p className="text-sm opacity-80" data-testid="text-built-with">
            Built with HTML, CSS, and JavaScript. Designed with care and attention to detail.
          </p>
          <div className="flex justify-center gap-6 mt-6">
            <a 
              href="mailto:terence.richardson@pursuit.org"
              className="hover:opacity-80 transition-opacity"
              data-testid="footer-link-email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/terence-richardson-13b22a211/"
              className="hover:opacity-80 transition-opacity"
              data-testid="footer-link-linkedin"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/Terence-lr"
              className="hover:opacity-80 transition-opacity"
              data-testid="footer-link-github"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
