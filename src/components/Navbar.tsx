"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, Mail, X } from "lucide-react";
import SocialLinks from "./SocialLinks";

interface NavbarProps {
  scrollToSection?: (id: string) => void;
}

export default function Navbar({ scrollToSection }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const navItems = ["tech", "projects", "experience", "contact"];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 mt-1">
        <div className="glass-panel max-w-7xl mx-auto px-4 lg:px-8 rounded-xl sticky shadow-2xl backdrop-blur-lg border border-white/20">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => scrollToSection?.("hero")}>
              <img
                src="/wilz-icon.ico"
                alt="Dev-Wilz Logo"
                className="w-8 h-8 rounded-full border border-white/20"
              />

              <span className="text-xl font-bold text-white tracking-wide">
                WILFORT ABEL
              </span>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.1, color: "#00f0ff" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection?.(item)}
                  className="capitalize text-gray-300 transition-colors duration-300 font-medium">
                  {item}
                </motion.button>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 0, 153, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              href="mailto:wilzabel@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Wilfort,%0D%0A%0D%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.%0D%0A%0D%0AThanks,"
              className="px-6 py-2 font-bold hidden md:flex items-center space-x-2 bg-gradient-to-r from-accent to-accent-pink text-white rounded-full shadow-[0_0_15px_rgba(255,0,153,0.3)] border border-white/10 transition-all duration-300">
              <Mail className="w-4 h-4" />
              <span>Hire Me</span>
            </motion.a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-white p-2 glass-button">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ================= MOBILE SIDEBAR ================= */}
      {/* Backdrop Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar Content */}
      <aside
        className={`fixed top-0 right-0 h-full w-100 z-50 transform transition-transform duration-300
        bg-black/40 backdrop-blur-xl border-l border-white/10
        ${open ? "translate-x-0" : "translate-x-full"}`}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between space-x-2 px-6 py-4 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <img
              src="/GucciWilz.png"
              alt="Dev-Wilz Logo"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-lg font-bold text-white">Dev-Wilz</span>
          </div>
          <button onClick={() => setOpen(false)}>
            <X className="text-white" />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col gap-6 px-6 py-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                scrollToSection?.(item);
                setOpen(false);
              }}
              className="capitalize text-gray-300 text-lg hover:text-blue-400 text-left">
              {item}
            </button>
          ))}

          {/* Mobile CTA Button */}
          <a
            href="mailto:wilzabel@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Wilfort,%0D%0A%0D%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.%0D%0A%0D%0AThanks,"
            className="mt-6 flex items-center gap-2 px-4 py-3 rounded-lg
            bg-blue-600/30 hover:bg-blue-600/50 border border-blue-500/30 text-blue-400">
            <Mail className="w-4 h-4" />
            <span>Hire Me</span>
          </a>

          {/* Mobile Social Icons */}
          <div className="mt-10 md:hidden">
            <SocialLinks direction="horizontal" />
          </div>
        </nav>
      </aside>
    </>
  );
}
