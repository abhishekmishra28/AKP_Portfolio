import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Vikash Mishra",
    role: "Executive Engineer, Indian Railways, Ranchi",
    text: "Ayush showed remarkable dedication during his internship. His understanding of structural works and willingness to learn on-site procedures impressed the entire team. He handled casting and finishing works with professionalism beyond his years.",
  },
  {
  name: "Dr. Jankiballav Swain",
  role: "Head of School, Lovely Professional University",
  text: "Ayush Kumar Pandey has once again brought pride to the institution by securing First Place in Orchestra at Punjab University. His dedication, discipline, and artistic excellence reflect not only his individual talent but also his commitment to representing the university at a national level. Achievements like these showcase his leadership, consistency, and ability to excel in highly competitive environments."
},
  {
    name: "Kapil Kumar",
    role: "Site Engineer, Prashad-TTIPL-SSR-JV",
    text: "During his time with us, Ayush contributed meaningfully to site documentation and surveying. His ability to coordinate with the team and manage workflow was commendable for someone early in their career.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 bg-background bg-blueprint-grid" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-2">What they say</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">Testimonials</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="bg-card p-6 rounded-xl border border-border shadow-steel relative"
            >
              <Quote className="text-accent/20 absolute top-4 right-4" size={32} />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
