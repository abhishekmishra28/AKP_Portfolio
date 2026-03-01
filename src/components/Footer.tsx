import { ArrowUp, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-steel-dark py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading font-bold text-primary-foreground text-lg">
              AKP<span className="text-accent">.</span>
            </p>
            <p className="text-primary-foreground/60 text-sm mt-1">
              © 2026 Ayush Kumar Pandey | Civil Engineer
            </p>
          </div>

          <div className="flex gap-3">
            <a href="https://www.linkedin.com/in/civilayushpandey" target="_blank" rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-primary-foreground/20 text-primary-foreground/60 hover:text-accent hover:border-accent transition-colors">
              <Linkedin size={16} />
            </a>
            <a href="mailto:pandeyayush61596@gmail.com"
              className="p-2.5 rounded-full border border-primary-foreground/20 text-primary-foreground/60 hover:text-accent hover:border-accent transition-colors">
              <Mail size={16} />
            </a>
            <a href="tel:+919835509256"
              className="p-2.5 rounded-full border border-primary-foreground/20 text-primary-foreground/60 hover:text-accent hover:border-accent transition-colors">
              <Phone size={16} />
            </a>
          </div>
        </div>

        {/* Scroll to top */}
        <div className="flex justify-center mt-8">
          <a
            href="#home"
            className="w-10 h-10 bg-accent/20 hover:bg-accent rounded-full flex items-center justify-center text-primary-foreground/70 hover:text-accent-foreground transition-all"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
