import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  MapPin,
  ExternalLink,
  MessageCircle,
  Mail,
  Linkedin,
  Instagram,
  Globe,
  Code2,
} from "lucide-react";
import DeveloperIllustration from "./DeveloperIllustration";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background ambient lighting & mesh */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Freelance & Custom Projects</span>
            </div>

            {/* Main Name & Title */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-[1.1] mb-4">
              <span>Firoz Khan</span>
              <span className="block text-gradient-accent mt-1 text-3xl sm:text-4xl md:text-5xl">
                Full-Stack Developer
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-6">
              Engineering high-speed, modern, SEO-ready websites and web apps that turn casual
              visitors into paying customers. Based in Palghar, Maharashtra — building for founders
              and businesses across India and internationally.
            </p>

            {/* Location & Studio badge */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-400 mb-8 pb-4 border-b border-white/5 w-full">
              <span className="inline-flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-4 h-4 text-indigo-400" />
                {PERSONAL_INFO.location}
              </span>
              <span className="text-slate-600">•</span>
              <span className="inline-flex items-center gap-1.5">
                <span>Founder:</span>
                <a
                  href={PERSONAL_INFO.agencyUrl}
                  target="_blank"
                  rel="noopener"
                  className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 font-medium transition-colors"
                >
                  {PERSONAL_INFO.agencyName}
                </a>
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all duration-200 group text-sm sm:text-base"
              >
                <span>Hire Me</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-[#141824] hover:bg-[#1a2030] border border-white/10 hover:border-indigo-500/30 hover:-translate-y-0.5 transition-all duration-200 text-sm sm:text-base shadow-sm"
              >
                <Code2 className="w-4 h-4 mr-2 text-indigo-400" />
                <span>View Work</span>
              </a>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center px-4 py-3.5 rounded-xl font-medium text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-500/40 transition-all text-sm"
                title="Chat directly on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 mr-2 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener"
                  className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-indigo-600/20 hover:border-indigo-500/30 transition-all"
                  aria-label="Firoz Khan LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener"
                  className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-pink-600/20 hover:border-pink-500/30 transition-all"
                  aria-label="Firoz Khan Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.website}
                  target="_blank"
                  rel="noopener"
                  className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-indigo-600/20 hover:border-indigo-500/30 transition-all"
                  aria-label="FK Digital Media Studio Website"
                >
                  <Globe className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-cyan-600/20 hover:border-cyan-500/30 transition-all"
                  aria-label="Email Firoz Khan"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Developer Visual Illustration */}
          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <DeveloperIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
