import { aboutHighlights, personalInfo, stats } from "../data/portfolioData";
import FadeIn, { SectionHeader } from "./ui/primitives";

export default function About() {
  return (
    <section
      id="about"
      className="section-padding border-t border-white/[0.06]"
      aria-labelledby="about-heading">
      <div className="mx-auto max-w-content">
        <SectionHeader
          label="About"
          title="Building products with clarity and craft"
          description={personalInfo.bio}
        />

        <div className="mb-16 grid gap-4 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.05}>
              <div className="card px-6 py-5">
                <p className="text-3xl font-semibold tracking-tight text-zinc-50">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {aboutHighlights.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05}>
              <article className="card-hover p-6">
                <h3
                  id="about-heading"
                  className="text-base font-medium text-zinc-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
