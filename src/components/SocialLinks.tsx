import { motion } from "framer-motion";
import {
  Facebook,
  Github,
  Linkedin,
  X,
  MessageCircle,
  Mail,
} from "lucide-react";

const socials = [
  {
    icon: Github,
    href: "https://github.com/mr-wilz",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mrwilz111/",
    label: "LinkedIn",
  },
  {
    icon: Facebook,
    href: "https://Facebook.com/Prince.Whilz/",
    label: "Facebook",
  },

  {
    icon: X,
    href: "https://x.com/JuicyWhilz",
    label: "X (Twitter)",
  },
  {
    icon: MessageCircle,
    href: "https://wa.me/+2347061251386",
    label: "WhatsApp",
  },
  {
    icon: Mail,
    href: "mailto:wilzabel@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Wilfort,%0D%0A%0D%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.%0D%0A%0D%0AThanks,",
    label: "Email",
  },
];

interface SocialLinksProps {
  direction?: "vertical" | "horizontal";
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0 },
};

export default function SocialLinks({
  direction = "vertical",
  className = "",
}: SocialLinksProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`flex ${
        direction === "vertical" ? "flex-col" : "flex-row"
      } gap-4 ${className}`}>
      {socials.map((social) => (
        <motion.a
          key={social.label}
          variants={itemVariants}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          href={social.href}
          target={social.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          aria-label={social.label}
          className="glass-button p-3 hover:bg-accent/20 transition-colors">
          <social.icon className="w-5 h-5 text-white" />
        </motion.a>
      ))}
    </motion.div>
  );
}
