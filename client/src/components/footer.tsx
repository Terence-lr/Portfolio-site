import { Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8" style={{ backgroundColor: '#1a365d', color: 'white' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-4" data-testid="text-copyright">
            &copy; 2024 Alex Johnson. All rights reserved.
          </p>
          <p className="text-sm opacity-80" data-testid="text-built-with">
            Built with HTML, CSS, and JavaScript. Designed with care and attention to detail.
          </p>
          <div className="flex justify-center gap-6 mt-6">
            <a 
              href="mailto:alex.johnson@email.com"
              className="hover:opacity-80 transition-opacity"
              data-testid="footer-link-email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/alexjohnson"
              className="hover:opacity-80 transition-opacity"
              data-testid="footer-link-linkedin"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/alexjohnson"
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
