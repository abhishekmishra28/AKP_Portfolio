import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Heart, Music } from "lucide-react";

const achievements = [
  {
    icon: Music,
    title: "AIU National Gold Medalist in Music",
    description: "Two-time gold medalist at the All India University level (2024–2025), showcasing talent and dedication beyond engineering.",
  },
  {
    icon: Heart,
    title: "Volunteer – NGO",
    description: "Participated in social service initiatives, demonstrating strong teamwork, communication, and presentation skills.",
  },
  {
    icon: Award,
    title: "Multidisciplinary Excellence",
    description: "Balancing academic rigor in Civil Engineering with nationally recognized artistic achievements and community service.",
  },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 bg-secondary/50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-2">Recognition</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">Achievements & Activities</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-card p-8 rounded-xl border border-border shadow-steel text-center hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                <a.icon className="text-accent" size={24} />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-3">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
