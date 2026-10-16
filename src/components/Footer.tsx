import Link from "next/link";
import {
  Linkedin,
  Instagram,
  Globe,
  Mail,
  MessageCircle,
  ArrowUp,
  Heart,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#07090E] pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Column 1: Brand & Studio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/10 border border-indigo-500/30 text-indigo-400 font-heading font-bold text-sm">
                FK
              </div>
              <span className="font-heading font-bold text-lg text-white">
                Firoz Khan
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Full-stack web developer based in Palghar, Maharashtra, India.
              Engineering fast, modern, and SEO-ready websites and web apps end-to-end.
            </p>
            <div className="pt-2">
              <span className="text-xs text-slate-400 block mb-1">
                Digital Studio:
              </span>
              <a
                href="https://fkdigitalmedia.com"
                className="text-xs sm:text-sm text-indigo-400 hover:text-indigo-300 font-medium underline underline-offset-4 decoration-indigo-500/40 transition-colors"
              >
                FK Digital Media — Websites, Kids&apos; YouTube &amp; Local SEO
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-300">
              Quick Navigation
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Firoz
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Technical Stack
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services &amp; Solutions
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact &amp; Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Studio Backlinks */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-300">
              FK Digital Media Services
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a
                  href="https://fkdigitalmedia.com/website-development/"
                  className="hover:text-indigo-300 transition-colors"
                >
                  Website Development Services
                </a>
              </li>
              <li>
                <a
                  href="https://fkdigitalmedia.com/local-seo/"
                  className="hover:text-indigo-300 transition-colors"
                >
                  Local SEO Services
                </a>
              </li>
              <li>
                <a
                  href="https://fkdigitalmedia.com/news-website/"
                  className="hover:text-indigo-300 transition-colors"
                >
                  News Website Development
                </a>
              </li>
              <li>
                <a
                  href="https://fkdigitalmedia.com/kids-youtube/"
                  className="hover:text-indigo-300 transition-colors"
                >
                  Kids&apos; YouTube Channel Growth
                </a>
              </li>
              <li>
                <a
                  href="https://fkdigitalmedia.com"
                  className="hover:text-indigo-300 transition-colors"
                >
                  Agency Portfolio &amp; Case Studies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip: Socials, Copyright, Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener"
              className="p-2 rounded-lg bg-white/5 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.instagram}
              target="_blank"
              rel="noopener"
              className="p-2 rounded-lg bg-white/5 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.website}
              target="_blank"
              rel="noopener"
              className="p-2 rounded-lg bg-white/5 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="FK Digital Media Website"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener"
              className="p-2 rounded-lg bg-white/5 hover:text-emerald-400 hover:bg-white/10 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-white/5 hover:text-indigo-400 hover:bg-white/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="text-center sm:text-right">
            <span>
              &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
            </span>
            <span className="block text-[11px] text-slate-500 mt-0.5">
              Palghar, Maharashtra, India • Engineered for Vercel
            </span>
          </div>

          <a
            href="#"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
