import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase } from "lucide-react";

interface TimelineItem {
  type: "education" | "experience";
  title: string;
  subtitle: string;
  period: string;
  details: string[];
}

const items: TimelineItem[] = [
  {
    type: "education",
    title: "B.Tech Civil Engineering",
    subtitle: "Lovely Professional University",
    period: "2023 – 2027",
    details: ["CGPA: 7.30", "Active in academics and extracurricular activities"],
  },
  {
    type: "experience",
    title: "Civil Engineering Intern",
    subtitle: "Indian Railways – Ranchi",
    period: "Internship",
    details: [
      "Track construction & maintenance exposure",
      "Rails, sleepers, ballast alignment",
      "Site supervision & safety protocols",
      "Column, beam, slab casting work",
      "Waterproofing & finishing works",
    ],
  },
  {
    type: "experience",
    title: "Site Intern",
    subtitle: "Prashad-TTIPL-SSR-JV – Latehar",
    period: "Internship",
    details: [
      "Managed site workflow and documentation",
      "Surveying using Earth Map tools",
      "Railway station finishing works",
    ],
  },
  {
    type: "education",
    title: "12th Standard – 78.9%",
    subtitle: "R.K +2 High School, Latehar",
    period: "Completed",
    details: [],
  },
  {
    type: "education",
    title: "10th Standard – 80%",
    subtitle: "B.P D.A.V Public School, Garhwa",
    period: "Completed",
    details: [],
  },
];

const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="py-24 bg-background bg-blueprint-grid" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-2">My Journey</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">Education & Experience</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          {items.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className={`relative flex items-start mb-10 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full border-4 border-background bg-primary flex items-center justify-center">
                  {item.type === "education" ? (
                    <GraduationCap size={18} className="text-primary-foreground" />
                  ) : (
                    <Briefcase size={18} className="text-primary-foreground" />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="bg-card p-5 rounded-xl border border-border shadow-steel">
                    <span className="inline-block px-2.5 py-1 bg-accent/10 text-accent rounded-md text-xs font-semibold mb-2">
                      {item.period}
                    </span>
                    <h3 className="font-heading font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{item.subtitle}</p>
                    {item.details.length > 0 && (
                      <ul className="space-y-1">
                        {item.details.map((d, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-2" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
