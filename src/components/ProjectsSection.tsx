import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import projectResidential from "@/assets/project-residential.jpg";
import projectDam from "@/assets/project-dam.jpg";
import projectSoil from "@/assets/project-soil.jpeg";
import projectBridge from "@/assets/project-bridge.jpg";

const projects = [
  {
    title: "2 BHK Residential Flat Prototype",
    image: projectResidential,
    tags: ["Floor Plan", "Structural Safety", "Ventilation"],
    points: [
      "Designed complete floor plan with ventilation & lighting principles",
      "Studied beams, columns, slab layout for structural safety",
      "Focused on load distribution and safety standards",
    ],
  },
  {
    title: "Earthen Dam Model",
    image: projectDam,
    tags: ["Soil Mechanics", "Seepage Control", "Irrigation"],
    points: [
      "Studied core, slopes, and filter zones",
      "Applied soil compaction and seepage control techniques",
      "Understood irrigation and water storage systems",
    ],
  },
  {
    title: "Soil Nailing Model (Slope Stabilization)",
    image: projectSoil,
    tags: ["Slope Stability", "Shotcrete", "Highway"],
    points: [
      "Demonstrated soil nails and shotcrete application",
      "Learned slope stability techniques for highways",
      "Applied to hill roads and embankment stabilization",
    ],
  },
  {
    title: "Double Deck Rib Arch Bridge Prototype",
    image: projectBridge,
    tags: ["Arch Structure", "Load Transfer", "Multi-level"],
    points: [
      "Studied load transfer system in arch bridges",
      "Designed arch structure for structural efficiency",
      "Learned multi-level bridge systems and engineering",
    ],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-secondary/50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-2">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">Featured Works</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group bg-card rounded-xl overflow-hidden border border-border shadow-steel hover:shadow-card-hover transition-all duration-300"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-heading font-bold text-foreground mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2">
                  {project.points.map((point, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
