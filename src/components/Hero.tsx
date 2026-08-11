import { ArrowUpRight, Github } from "lucide-react";
import { personalInfo, mailtoLink } from "../data/portfolioData";
import FadeIn, { Button } from "./ui/primitives";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative section-padding pt-32 sm:pt-36 lg:pt-44"
      aria-labelledby="hero-heading">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(99,102,241,0.15),transparent)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-content">
        <FadeIn>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5">
            <span
              className="h-1.5 w-1.5 rounded-full bg-emerald-400"
              aria-hidden="true"
            />
            <span className="text-xs font-medium text-muted-foreground">
              {personalInfo.availability}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1
            id="hero-heading"
            className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl">
            Hi, I&apos;m {personalInfo.name.split(" ")[0]} —{" "}
            <span className="text-zinc-400">{personalInfo.role}</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            I craft high-performance web experiences with{" "}
            <span className="text-zinc-300">React</span>,{" "}
            <span className="text-zinc-300">Angular</span>,{" "}
            <span className="text-zinc-300">Vue</span>,{" "}
            <span className="text-zinc-300">Next.js</span>, and{" "}
            <span className="text-zinc-300">TypeScript</span>. Let&apos;s turn
            ideas into reality.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-10 flex flex-wrap gap-3">
          <Button href="#projects" variant="primary">
            View my work
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button href={mailtoLink} variant="secondary">
            Contact me
          </Button>
          <Button
            href={personalInfo.github}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer">
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
