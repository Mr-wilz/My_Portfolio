"use client";

import { useEffect } from "react";
import { Mail, X } from "lucide-react";
import SocialLinks from "./SocialLinks";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: string[];
  scrollToSection?: (id: string) => void;
}

export default function MobileSidebar({
  isOpen,
  onClose,
  navItems,
  scrollToSection,
}: MobileSidebarProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        className={`fixed top-0 right-0 h-full z-50 transform transition-transform duration-300
        bg-black/40 backdrop-blur-xl border-l border-white/10
        w-72 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!isOpen}>
        <div className="flex h-full flex-col overflow-y-auto overflow-x-hidden">
          <div className="flex items-center justify-between space-x-2 px-6 py-4 border-b border-white/10">
            <div className="flex items-center space-x-2 min-w-0">
              <img
                src="/GucciWilz.png"
                alt="Dev-Wilz Logo"
                className="w-8 h-8 rounded-full flex-shrink-0"
              />
              <span className="text-lg font-bold text-white truncate">
                Wilfort Abel
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="flex-shrink-0">
              <X className="text-white" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 px-6 py-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection?.(item);
                  onClose();
                }}
                className="capitalize text-gray-300 text-lg hover:text-blue-400 text-left break-words">
                {item}
              </button>
            ))}

            <a
              href="mailto:wilzabel@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Wilfort,%0D%0A%0D%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.%0D%0A%0D%0AThanks,"
              className="mt-6 flex items-center gap-2 px-4 py-3 rounded-lg
            bg-blue-600/30 hover:bg-blue-600/50 border border-blue-500/30 text-blue-400 break-words flex-shrink-0">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span>Hire Me</span>
            </a>

            <div className="mt-10 md:hidden w-full">
              <div className="flex flex-wrap gap-3 justify-start">
                <SocialLinks
                  direction="horizontal"
                  className="flex flex-wrap gap-4 justify-center md:justify-start"
                />
              </div>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}
