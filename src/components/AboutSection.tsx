import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "AutoCAD", level: 85 },
  { name: "Revit", level: 75 },
  { name: "STAAD Pro", level: 70 },
  { name: "MS-Excel", level: 75 },
  { name: "MS-PowerPoint", level: 80 },
  { name: "Python", level: 55 },
];

const competencies = [
  "Site Supervision",
  "Quantity Estimation",
  "Structural Basics",
  "Soil Mechanics",
  "Team Coordination",
  "Project Planning",
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background bg-blueprint-grid" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-2">Get to know me</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">About Me</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Civil Engineering student at Lovely Professional University (CGPA: 7.30),
              passionate about infrastructure development, structural systems, and site execution.
              With hands-on internship experience at Indian Railways and construction projects,
              I bring practical knowledge of site supervision, structural works, and project management.
            </p>

            <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Core Competencies</h3>
            <div className="flex flex-wrap gap-2">
              {competencies.map((c) => (
                <span
                  key={c}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium border border-border hover:border-accent hover:text-accent transition-colors"
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-heading font-semibold text-foreground mb-6">Technical Skills</h3>
            <div className="space-y-5">
              {skills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.4 + i * 0.1 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16"
        >
          {[
            { num: "4+", label: "Projects" },
            { num: "3", label: "Internships" },
            { num: "6+", label: "Skills" },
            { num: "7.30", label: "CGPA" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-card rounded-xl border border-border shadow-steel">
              <p className="text-3xl font-heading font-bold text-primary">{stat.num}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
