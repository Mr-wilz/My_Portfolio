import { motion } from "framer-motion";
import { useState } from "react";
import TypingText from "./components/TypingText";
import ContactForm from "./components/formModal";
import {
  Github,
  Linkedin,
  Mail,
  Sparkles,
  ChevronRight,
  Layers,
  Cpu,
  VideoIcon as Tiktok,
} from "lucide-react";
import ProjectCard from "./components/projectCard";
import TechStack from "./components/techStack";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Section from "./components/section";
import SpaceBackground from "./components/spaceBackground";
import { projects, techStack, experiences } from "./data/portfolioData";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import WhyHireMe from "./components/WhyHireMe";

function App() {
  // State for active project filter
  const [activeFilter, setActiveFilter] = useState<"all" | "react" | "next">(
    "all"
  );

  // Filter projects based on active category
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Background Component: Stars and moving blobs */}
      <SpaceBackground />

      {/* Navigation Bar */}
      <Navbar scrollToSection={scrollToSection} />

      {/* Floating Social Links (Desktop only) */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <SocialLinks />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 min-h-screen overflow-hidden">
        <main className="container mx-auto px-4 lg:px-8 pt-16 max-w-7xl">
          {/* Hero Section: Introduction and CTA */}
          <Section id="hero" >
            <div className="grid lg:grid-cols-2 gap-12 items-start pt-[16px] lg:pt-32 pb-12">
              {/* Left Column: Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-20">
                <div className="relative">
                  {/* Availability Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-full glass-panel bg-white/5 border-white/10 w-fit">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span className="text-white font-medium text-sm tracking-wide ">
                      Available for Hire
                    </span>
                  </motion.div>

                  {/* Main Headline with Typing Effect */}
                  <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight text-accent tracking-tight">
                    <TypingText
                      words={["Hi I'm Wilfort", "I'm a Frontend Developer"]}
                      className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 inline-block mb-4"
                    />
                  </h1>

                  {/* Bio Description */}
                  <p className="text-xl text-text-secondary mb-8 leadiong-relaxed max-w-lg">
                    I craft high-performance web experiences with{" "}
                    <span className="text-white font-semibold">React</span>,{" "}
                    <span className="text-white font-semibold">TypeScript</span>,{" "}
                    <span className="text-white font-semibold">Next.js</span>
                    , and modern UI libraries. Let's turn ideas into reality.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="#projects"
                      className="items-center flex glass-button px-4 py-4 font-bold text-white border border-white/10 hover:bg-white/10">
                      <span>View My Work</span>
                      <ChevronRight className="w-5 h-5" />
                    </motion.a>

                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="mailto:wilzabel@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Wilfort,%0D%0A%0D%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.%0D%0A%0D%0AThanks,"
                      className="glass-button cursor-pointer px-4 py-4 font-bold text-white border border-white/10 hover:bg-white/10">
                      Contact Me
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Dynamic Visual Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block  w-full">
                {/* 3D Perspective Container */}
                <div className="relative perspective-1000">
                  {/* Main Floating Card (Code Editor Mockup) */}
                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute  -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] glass-card p-6 z-20 border-t border-l border-white/20">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="space-y-2 font-mono text-sm">
                      <div className="text-purple-400">
                        const <span className="text-yellow-300">Developer</span>{" "}
                        = <span className="text-blue-400">{"{"}</span>
                      </div>
                      <div className="pl-4 text-white">
                        name: <span className="text-green-400">'Wilfort'</span>,
                      </div>
                      <div className="pl-4 text-white">
                        skills:{" "}
                        <span className="text-blue-400">
                          ['React', 'Angular', 'Vue', 'Next.js', 'TS']
                        </span>
                        ,
                      </div>
                      <div className="pl-4 text-white">
                        hardWorker:{" "}
                        <span className="text-orange-400">true</span>
                      </div>
                      <div className="text-blue-400">{"}"}</div>
                    </div>
                  </motion.div>

                  {/* Floating Icons */}
                  <motion.div
                    animate={{ y: [0, 30, 0], rotate: [0, 5, 0] }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute top-[10%] right-[10%]  glass-panel bg-black/40 z-30">
                    <Cpu className="w-8 h-8 text-cyan-400" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -30, 0], rotate: [0, -5, 0] }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute bottom-[20%] left-[10%] p-4 glass-panel bg-black/40 z-30">
                    <Layers className="w-4 h-4 text-purple-400" />
                  </motion.div>

                  {/* Decorative Glows */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-[10%] left-[20%] w-24 h-24 bg-purple-600/30 rounded-full blur-2xl -z-10"
                  />

                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute bottom-[10%] right-[20%] w-32 h-32 bg-cyan-600/30 rounded-full blur-2xl -z-10"
                  />
                </div>
              </motion.div>
            </div>
          </Section>

          {/* Why Hire Me Section */}
          <Section id="why-hire-me">
            <WhyHireMe />
          </Section>

          {/* Tech Stack Section */}
          <Section id="tech">
            <div className="mb-12 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 inline-block">
                Tech Stack
              </h2>
            </div>
            <TechStack items={techStack} />
          </Section>

          {/* Projects Section */}
          <Section id="projects">
            <div className="mb-16">
              <div className="mb-12 text-center">
                <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 inline-block mb-4">
                  Featured Projects
                </h2>
                <p className="text-text-secondary">
                  A selection of my recent work
                </p>
              </div>

              {/* Project Category Filters */}
              <div className="flex justify-center flex-wrap gap-4 mb-12">
                {(["all", "react", "next"] as const).map((filter) => (
                  <motion.button
                    key={filter}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-8 py-3 rounded-full font-medium transition-all duration-300 capitalize ${
                      activeFilter === filter
                        ? "bg-accent text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                        : "glass-panel text-gray-300 hover:text-white"
                    }`}>
                    {filter === "all" ? "All Projects" : filter}
                  </motion.button>
                ))}
              </div>

              {/* Projects Grid */}
              <motion.div
                layout
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </motion.div>
            </div>
          </Section>

          {/* Experience Section */}
          <Section id="experience">
            <div className="mb-12 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 inline-block">
                Professional Journey
              </h2>
            </div>
            <ExperienceTimeline experiences={experiences} />
          </Section>

          {/* Contact Section */}
          <Section id="contact">
            <div className="glass-card p-8 lg:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
              {/* Background Glows */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500/10 to-transparent -z-10" />

              <div className="max-w-2xl mx-auto relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 inline-block mb-4">
                  Let's Build Something{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Amazing
                  </span>
                </h2>
                <p className="text-gray-300 mb-10 text-lg leading-relaxed">
                  I'm currently available for freelance projects and full-time
                  opportunities. Let's discuss how we can work together!
                </p>

                <ContactForm />

                {/* Social Links Footer */}
                <div className="flex justify-center space-x-6 mt-12 flex-wrap gap-2 items-center">
                  {[
                    {
                      icon: Github,
                      href: "https://github.com",
                      label: "GitHub",
                    },
                    {
                      icon: Linkedin,
                      href: "https://linkedin.com",
                      label: "LinkedIn",
                    },
                    {
                      icon: Tiktok,
                      href: "https://www.tiktok.com/@atlantacityrole92?is_from_webapp=1&sender_device=pc",
                      label: "TikTok",
                    },
                    {
                      icon: Mail,
                      href: "mailto:wilzabel@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Wilfort,%0D%0A%0D%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.%0D%0A%0D%0AThanks,",
                      label: "Email",
                    },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      href={social.href}
                      className="p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-300"
                      aria-label={social.label}>
                      <social.icon className="w-6 h-6 text-white" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </Section>
        </main>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-8 text-center mt-12 border-t border-white/5">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Frontend Developer Portfolio.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Built with React, TypeScript, Tailwind CSS & Framer Motion
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
