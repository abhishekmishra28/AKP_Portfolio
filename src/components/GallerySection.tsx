import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import Arch1 from "@/assets/gallery/Achi1.jpeg";
import Arch2 from "@/assets/gallery/Achi2.jpeg";
import Arch3 from "@/assets/gallery/Achi3.jpeg";
type GalleryImage = {
  src: string;
  alt: string;
};

const images: GalleryImage[] = [
  {
    src: Arch1,
    alt: "AIU Gold Medal Ceremony",
  },
  {
    src: Arch2,
    alt: "AIU INTERNATIONAL",
  },
  {
    src: Arch3,
    alt: "AIU Achievements",
  }
];

const GallerySection: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-2">
            Highlights
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Achievement Gallery
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="overflow-hidden rounded-xl border border-border shadow-steel hover:shadow-card-hover transition-all duration-300 group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;