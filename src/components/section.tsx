import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => {
  return (
    <section id={id} className="py-4 lg:pt-4 bg px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}>
        {title && (
          <div className="mb-12 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">{title}</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
