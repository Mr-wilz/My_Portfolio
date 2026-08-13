import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, FileText, Download, Sparkles, ChevronDown } from "lucide-react";
import { personalInfo, mailtoLink, heroQuestions, cvPath } from "../data/portfolioData";
import FadeIn, { Button } from "./ui/primitives";
import Typewriter from "./Typewriter";

export default function Hero() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1, height: "auto" }}
            exit={{
              opacity: 0,
              height: 0,
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
            }}
            className="relative z-40 flex min-h-screen w-full flex-col justify-between overflow-hidden border-b border-indigo-500/20 bg-gradient-to-b from-surface via-surface-raised/90 to-surface px-6 pt-24 pb-10 sm:px-10 lg:px-16">
            
            {/* Ambient Lighting Background */}
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(99,102,241,0.22),transparent_70%)]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent"
              aria-hidden="true"
            />

            {/* Top Recruiter Tag */}
            <div className="relative mx-auto flex w-full max-w-content items-center justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-indigo-300 backdrop-blur-md shadow-lg shadow-indigo-500/10">
                <Sparkles className="h-3.5 w-3.5 text-indigo-400 animate-pulse" />
                <span>Looking for a Developer?</span>
              </div>
            </div>

            {/* Main Conspicuous Full-Screen Typing Box */}
            <div className="relative mx-auto flex w-full max-w-5xl flex-1 items-center justify-center py-10 text-center">
              <div className="relative flex min-h-[16rem] sm:min-h-[22rem] lg:min-h-[26rem] w-full items-center justify-center rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-indigo-950/30 via-surface-raised/90 to-surface/80 p-8 sm:p-14 lg:p-20 backdrop-blur-2xl shadow-[0_0_60px_rgba(99,102,241,0.2)]">
                <Typewriter
                  words={heroQuestions}
                  typingSpeed={55}
                  deletingSpeed={22}
                  pauseDuration={3200}
                  finalPauseDuration={4500}
                  onComplete={() => setShowIntro(false)}
                  className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-snug sm:leading-tight"
                />
              </div>
            </div>

            {/* Footer with Skip Control */}
            <div className="relative mx-auto flex w-full max-w-content items-center justify-between gap-4">
              <span className="text-xs text-muted-foreground font-medium hidden sm:inline-block">
                Auto-advancing to portfolio upon completion...
              </span>
              <button
                type="button"
                onClick={() => setShowIntro(false)}
                className="group ml-auto flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium text-zinc-300 backdrop-blur-md transition-all hover:border-indigo-400 hover:bg-indigo-500/20 hover:text-white">
                <span>Skip Intro</span>
                <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section
        id="hero"
        className="relative section-padding pt-32 sm:pt-36 lg:pt-44 transition-all duration-700"
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
              href={cvPath}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
              title="View & Download Resume (PDF)">
              <FileText className="h-4 w-4 text-indigo-400" aria-hidden="true" />
              Resume / CV
              <Download
                className="h-3.5 w-3.5 opacity-70 ml-0.5"
                aria-hidden="true"
              />
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
    </>
  );
}


