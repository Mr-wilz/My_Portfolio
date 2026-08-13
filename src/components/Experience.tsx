import { experiences } from "../data/portfolioData";
import FadeIn, { SectionHeader } from "./ui/primitives";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding border-t border-white/[0.06]"
      aria-labelledby="experience-heading">
      <div className="mx-auto max-w-content">
        <SectionHeader
          label="Experience"
          title="Professional journey"
          description="Roles and projects that shaped my approach to building modern web applications."
        />

        <ol className="relative space-y-0" role="list">
          {experiences.map((exp, index) => (
            <FadeIn key={exp.id} delay={index * 0.06}>
              <li className="relative grid gap-6 pb-16 last:pb-0 md:grid-cols-[9rem_1fr]">
                {index < experiences.length - 1 && (
                  <span
                    className="absolute left-[4.5rem] top-8 hidden h-[calc(100%-1rem)] w-px bg-white/[0.08] md:block"
                    aria-hidden="true"
                  />
                )}

                <div className="md:pt-1">
                  <time
                    dateTime={exp.duration.replace(/\s/g, "")}
                    className="text-sm font-medium tabular-nums text-muted-foreground">
                    {exp.duration}
                  </time>
                </div>

                <article className="card-hover p-6">
                  <header className="mb-3">
                    <h3
                      id={index === 0 ? "experience-heading" : undefined}
                      className="text-base font-medium text-zinc-100">
                      {exp.position}
                    </h3>
                    <p className="mt-0.5 text-sm text-accent">{exp.company}</p>
                  </header>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5" role="list">
                    {exp.technologies.map((tech) => (
                      <li key={tech}>
                        <span className="tag">{tech}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
