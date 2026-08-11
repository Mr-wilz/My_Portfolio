import { skillGroups } from "../data/portfolioData";
import FadeIn, { SectionHeader } from "./ui/primitives";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding border-t border-white/[0.06]"
      aria-labelledby="skills-heading">
      <div className="mx-auto max-w-content">
        <SectionHeader
          label="Skills"
          title="Tech stack"
          description="Technologies and tools I use to build fast, accessible, and maintainable web applications."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <FadeIn key={group.category} delay={groupIndex * 0.05}>
              <div className="card p-6">
                <h3
                  id={groupIndex === 0 ? "skills-heading" : undefined}
                  className="mb-4 text-sm font-medium uppercase tracking-wider text-zinc-400">
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-2" role="list">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <span className="tag">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
