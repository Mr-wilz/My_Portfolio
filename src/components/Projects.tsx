import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/portfolioData";
import FadeIn, { SectionHeader } from "./ui/primitives";

type Filter = "all" | "react" | "next";

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: "All" },
    { key: "react", label: "React" },
    { key: "next", label: "Next.js" },
  ];

  return (
    <section
      id="projects"
      className="section-padding border-t border-white/[0.06]"
      aria-labelledby="projects-heading">
      <div className="mx-auto max-w-content">
        <SectionHeader
          label="Work"
          title="Selected projects"
          description="A selection of my recent work — from e-commerce platforms to AI-powered applications."
        />

        <FadeIn className="mb-10 flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setFilter(item.key)}
              aria-pressed={filter === item.key}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                filter === item.key
                  ? "bg-accent text-white"
                  : "border border-white/[0.08] text-muted-foreground hover:border-white/[0.14] hover:text-zinc-200"
              }`}>
              {item.label}
            </button>
          ))}
        </FadeIn>

        <motion.ul
          layout
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          role="list">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.li
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, delay: index * 0.03 }}>
                <article
                  className="group relative h-full min-h-[430px] overflow-hidden rounded-3xl border border-white/[0.08] bg-[#111318] shadow-[0_24px_70px_rgba(0,0,0,0.28)] transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.14]"
                  style={{ perspective: "1400px" }}>
                  <div
                    className="relative h-full min-h-[430px] transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]"
                    style={{ transformStyle: "preserve-3d" }}>
                    <div
                      className="absolute inset-0 flex h-full flex-col overflow-hidden rounded-3xl bg-[#12151c]"
                      style={{ backfaceVisibility: "hidden" }}>
                      <div className="relative aspect-[16/10] overflow-hidden bg-surface-overlay">
                        {project.image ? (
                          <>
                            <img
                              src={project.image}
                              alt=""
                              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                          </>
                        ) : (
                          <div className="flex h-full items-center justify-center text-4xl font-semibold text-white/10">
                            {project.title.charAt(0)}
                          </div>
                        )}
                      </div>

                      <div className="flex flex-1 flex-col p-5">
                        <div className="mb-3 flex items-start justify-between gap-3">
                          <h3
                            id={index === 0 ? "projects-heading" : undefined}
                            className="text-lg font-semibold tracking-tight text-zinc-50">
                            {project.title}
                          </h3>
                          <span className="tag shrink-0 capitalize">
                            {project.category}
                          </span>
                        </div>

                        <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                          {project.description}
                        </p>

                        <ul className="flex flex-wrap gap-1.5" role="list">
                          {project.technologies.map((tech) => (
                            <li key={tech}>
                              <span className="tag">{tech}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div
                      className="absolute inset-0 flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.22),_transparent_45%),linear-gradient(180deg,_#141823_0%,_#0d1117_100%)] p-6 text-center"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}>
                      <div className="flex items-center justify-between">
                        <span className="tag capitalize">
                          {project.category}
                        </span>
                        <span className="text-xs uppercase tracking-[0.28em] text-white/45">
                          Project Preview
                        </span>
                      </div>

                      <div className="flex flex-1 flex-col justify-center gap-5 px-1">
                        <h3 className="text-2xl font-semibold tracking-tight text-zinc-50">
                          {project.title}
                        </h3>
                        <p className="mx-auto max-w-sm text-sm leading-relaxed text-zinc-300">
                          {project.description}
                        </p>
                        <div className="mx-auto flex max-w-sm flex-wrap justify-center gap-2">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span key={tech} className="tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3 pt-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(34,211,238,0.18)] transition-transform duration-200 hover:scale-[1.02]"
                            aria-label={`Visit ${project.title}`}>
                            <ExternalLink
                              className="h-4 w-4"
                              aria-hidden="true"
                            />
                            Visit Site
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/[0.12] px-5 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-white/[0.22] hover:bg-white/[0.04]"
                            aria-label={`${project.title} on GitHub`}>
                            <Github className="h-4 w-4" aria-hidden="true" />
                            View Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}
