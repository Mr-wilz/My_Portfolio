import { motion } from "framer-motion";

interface TechItem {
  name: string;
  icon: string;
  color: string;
}

interface TechStackProps {
  items: TechItem[];
}

const TechStack = ({ items }: TechStackProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {items.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.08 }}
          whileHover={{ scale: 1.08 }}
          className="glass-panel p-6 text-center flex flex-col items-center justify-center">
          <div className="text-4xl mb-3" style={{ color: tech.color }}>
            {tech.icon}
          </div>

          <h3 className="font-semibold text-sm tracking-wide">{tech.name}</h3>
        </motion.div>
      ))}
    </div>
  );
};

export default TechStack;
