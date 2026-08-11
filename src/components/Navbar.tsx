import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo, mailtoLink } from "../data/portfolioData";
import { Button } from "./ui/primitives";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/[0.06] bg-surface/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}>
        <nav
          className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-8 lg:px-10"
          aria-label="Main navigation">
          <a
            href="#hero"
            className="group flex items-center gap-2.5 rounded-lg focus-visible:outline-none">
            <img
              src="/wilz-icon.ico"
              alt=""
              className="h-8 w-8 rounded-full border border-white/[0.1]"
              width={32}
              height={32}
            />
            <span className="text-sm font-semibold tracking-wide text-zinc-100 group-hover:text-white">
              {personalInfo.name.split(" ")[0]}
            </span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-zinc-100">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button href={mailtoLink} variant="primary">
              Get in touch
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="rounded-lg p-2 text-zinc-300 transition-colors hover:bg-white/[0.06] hover:text-white md:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}>
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="fixed inset-y-0 right-0 z-50 flex w-[min(20rem,85vw)] flex-col border-l border-white/[0.08] bg-surface-raised md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation">
              <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
                <span className="text-sm font-semibold text-zinc-100">
                  {personalInfo.name}
                </span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg p-2 text-zinc-400 hover:bg-white/[0.06] hover:text-white"
                  aria-label="Close menu">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-1 flex-col gap-1 px-3 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-white/[0.04] hover:text-zinc-100">
                    {link.label}
                  </a>
                ))}
                <a
                  href={mailtoLink}
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 rounded-lg bg-accent px-4 py-3 text-center text-sm font-medium text-white">
                  Get in touch
                </a>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
