import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: "react" | "next";
  liveUrl?: string;
  githubUrl?: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass-card overflow-hidden group hover:shadow-[0_0_30px_rgba(112,66,248,0.3)] transition-all duration-300 h-full flex flex-col">
      <div className="relative h-48 bg-gradient-to-br from-[#2A0E61] to-[#0d0d2b] overflow-hidden">
        {project.image ? (
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl font-bold opacity-10 text-white">
              {project.title.charAt(0)}
            </div>
          </div>
        )}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-accent-cyan transition-colors">
            {project.title}
          </h3>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30 capitalize">
            {project.category}
          </span>
        </div>

        <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-xs text-gray-300 hover:bg-white/10 hover:text-white transition-colors duration-300">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4 mt-auto">
          {project.githubUrl && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={project.githubUrl}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
              aria-label="GitHub Repository">
              <Github className="w-5 h-5" />
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={project.liveUrl}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
              aria-label="Live Demo">
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
