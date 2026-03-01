import { motion } from "framer-motion";
import { Download, ArrowDown, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/dp.png";
import myCV from "@/assets/mycv.pdf";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Construction site background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-blueprint-grid" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="text-safety-light font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-4">
              Civil Engineer
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight mb-6">
              Ayush Kumar
              <br />
              <span className="text-safety">Pandey</span>
            </h1>
            <p className="text-primary-foreground/75 text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              I enjoy working in construction management, consultancy, and project coordination.
              I am continuously learning and improving my skills in site execution, quantity estimation,
              and teamwork to ensure projects are completed on time and with high standards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
  
              <a href={myCV} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-semibold"
                >
                  <Download className="mr-2 h-4 w-4" />
                  View Resume
                </Button>
              </a>

              <a href="#contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent hover:bg-accent hover:text-white font-heading font-semibold w-full"
                >
                  Get In Touch
                </Button>
              </a>

            </div>

            {/* Social */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="https://www.linkedin.com/in/civilayushpandey" target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-primary-foreground/20 text-primary-foreground/70 hover:text-safety hover:border-safety transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="mailto:pandeyayush61596@gmail.com"
                className="p-2.5 rounded-full border border-primary-foreground/20 text-primary-foreground/70 hover:text-safety hover:border-safety transition-colors">
                <Mail size={18} />
              </a>
              <a href="tel:+919835509256"
                className="p-2.5 rounded-full border border-primary-foreground/20 text-primary-foreground/70 hover:text-safety hover:border-safety transition-colors">
                <Phone size={18} />
              </a>
            </div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-4 border-safety/30 shadow-2xl">
                <img src={profilePhoto} alt="Ayush Kumar Pandey" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-accent rounded-xl flex items-center justify-center shadow-lg">
                <span className="font-heading font-bold text-accent-foreground text-xs text-center leading-tight">B.Tech<br/>CE</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
