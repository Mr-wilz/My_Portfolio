import { motion } from "framer-motion";
import { Users, Clock, Zap, Layout, Code, Smartphone } from "lucide-react";

const stats = [
  {
    id: 1,
    value: "5+",
    label: "Years of Experience",
    icon: Clock,
    color: "text-purple-400",
  },
  {
    id: 2,
    value: "50+",
    label: "Satisfied Clients",
    icon: Users,
    color: "text-cyan-400",
  },
  {
    id: 3,
    value: "100%",
    label: "Project Success Rate",
    icon: Zap,
    color: "text-pink-400",
  },
];

const reasons = [
  {
    icon: Layout,
    title: "Pixel-Perfect Design",
    description:
      "I bridge the gap between design and engineering, ensuring every pixel is exactly where it should be.",
    color: "bg-purple-500",
  },
  {
    icon: Zap,
    title: "Blazing Fast Performance",
    description:
      "Optimization is not an afterthought. I build applications that load fast and run smooth on any device.",
    color: "bg-cyan-500",
  },
  {
    icon: Code,
    title: "Clean & Scalable Code",
    description:
      "I write maintainable, industry-standard code that your team will love to work with in the future.",
    color: "bg-pink-500",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Approach",
    description:
      "Responsive design is a priority. Your application will look and feel amazing on phones, tablets, and desktops.",
    color: "bg-blue-500",
  },
];

export default function WhyHireMe() {
  return (
    <div className="w-full">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 top-0">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="glass-card p-6 flex items-center space-x-4 border border-white/5 hover:border-white/20">
            <div className={`p-4 rounded-full bg-white/5 ${stat.color}`}>
              <stat.icon size={32} />
            </div>
            <div>
              <h3 className="text-4xl font-bold text-white mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Why Hire Me Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          Why{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Hire Me?
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I bring more than just coding skills to the table. Here's what sets me
          apart.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-8 group hover:bg-white/5 transition-colors duration-300">
            <div
              className={`w-14 h-14 rounded-2xl ${reason.color}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <reason.icon className={`w-7 h-7 text-white`} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">
              {reason.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {reason.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
