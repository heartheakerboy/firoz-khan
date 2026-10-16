"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Terminal, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#090A0F]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <Link
            href="/"
            className="group flex items-center gap-3 text-slate-100 hover:text-white transition-colors"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-indigo-500/5 border border-indigo-500/30 group-hover:border-indigo-400/60 transition-all duration-300 shadow-sm shadow-indigo-500/20">
              <span className="font-heading font-bold text-base tracking-wider text-indigo-400 group-hover:text-indigo-300">
                FK
              </span>
              <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base tracking-tight text-white group-hover:text-indigo-200 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] font-mono text-slate-400 tracking-wide">
                Full-Stack Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#10131E]/60 backdrop-blur-md border border-white/5 rounded-full px-4 py-1.5 shadow-inner shadow-black/40">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action / CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.agencyUrl}
              target="_blank"
              rel="noopener"
              className="text-xs font-medium text-slate-400 hover:text-indigo-300 transition-colors flex items-center gap-1 px-3 py-1.5 rounded-lg border border-transparent hover:border-indigo-500/20"
            >
              <span>FK Digital Media</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition-all duration-300 rounded-lg group bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-md shadow-indigo-600/20 hover:shadow-indigo-500/40"
            >
              <span>Hire Me</span>
              <Sparkles className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:rotate-12" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              className="px-3 py-1.5 text-xs font-medium text-white rounded-md bg-indigo-600 hover:bg-indigo-500"
            >
              Hire Me
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D101A]/95 border-b border-white/10 px-4 pt-4 pb-6 mt-3 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener"
                className="w-full text-center py-2.5 px-4 rounded-lg bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 font-medium text-sm hover:bg-emerald-600/30 transition-colors"
              >
                WhatsApp: {PERSONAL_INFO.phone}
              </a>
              <a
                href={PERSONAL_INFO.agencyUrl}
                target="_blank"
                rel="noopener"
                className="w-full text-center py-2 px-4 rounded-lg bg-white/5 text-slate-300 text-xs hover:text-white transition-colors"
              >
                Visit FK Digital Media Studio →
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
