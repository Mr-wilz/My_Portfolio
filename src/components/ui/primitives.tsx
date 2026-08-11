import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "none";
}

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const initial = direction === "up" ? { opacity: 0, y: 16 } : { opacity: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}>
      {children}
    </motion.div>
  );
}

interface ButtonProps extends HTMLMotionProps<"a"> {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-hover border border-accent/20 shadow-sm shadow-accent/10",
    secondary:
      "bg-transparent text-zinc-200 border border-white/[0.12] hover:border-white/[0.2] hover:bg-white/[0.04]",
    ghost: "bg-transparent text-muted-foreground hover:text-zinc-200",
  };

  return (
    <motion.a
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${variants[variant]} ${className}`}
      {...props}>
      {children}
    </motion.a>
  );
}

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <FadeIn className={`mb-14 max-w-2xl ${alignClass}`}>
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
        {label}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
