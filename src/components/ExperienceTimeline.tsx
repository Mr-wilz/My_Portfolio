import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";

interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
  return (
    <div className="relative">
      {/* Timeline line - hidden on small screens */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-accent via-purple-500 to-transparent hidden md:block" />

      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, x: 0, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className={`relative flex flex-col md:flex-row items-center mb-12 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}>
          {/* Timeline dot - hidden on small screens */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-[#030014] z-10 shadow-[0_0_10px_rgba(112,66,248,0.5)] hidden md:block" />

          <div
            className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
            <div className="glass-card p-6 hover:border-accent/50 transition-colors duration-300">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
                <div className="flex items-center space-x-2">
                  <Briefcase className="w-5 h-5 text-accent" />
                  <h3 className="text-xl font-bold text-white">
                    {exp.position}
                  </h3>
                </div>
                <div className="flex items-center space-x-2 text-text-secondary">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{exp.duration}</span>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-accent-light mb-2">
                {exp.company}
              </h4>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/5 hover:bg-white/10 hover:text-white transition-colors duration-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
