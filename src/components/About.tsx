import Image from "next/image";
import { Code, Cpu, Gauge, Search, ShieldCheck, MapPin, Building2, CheckCircle } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function About() {
  const philosophies = [
    {
      title: "Core Web Vitals & Speed",
      description:
        "Every millisecond matters. I build zero-bloat web pages aiming for 90+ mobile PageSpeed scores, reducing bounce rates and boosting conversions.",
      icon: Gauge,
    },
    {
      title: "End-to-End Ownership",
      description:
        "From UX design and semantic frontend to edge compute, REST APIs, SQL databases, and Vercel/Cloudflare deployments, I manage the complete pipeline.",
      icon: Cpu,
    },
    {
      title: "Organic SEO Built-in",
      description:
        "SEO is never an afterthought. Every project includes structured JSON-LD schema, pristine semantic tags, Open Graph assets, and search indexing hooks.",
      icon: Search,
    },
    {
      title: "Direct & Transparent",
      description:
        "Work directly with the engineer who writes your code. No bloated agency layers, no miscommunication — just reliable, timely execution.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <span>ABOUT THE DEVELOPER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight mb-4">
            Passionate About Crafting Fast, High-Impact Web Solutions
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" />
        </div>

        {/* Two-Column About Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative Bio */}
          <div className="lg:col-span-6 space-y-6 text-slate-300 text-base leading-relaxed">
            {/* Real Portrait Card */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface border border-surface-border">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 p-[2px] shadow-lg shadow-indigo-500/30">
                  <Image
                    src="/firoz-khan.webp"
                    alt="Firoz Khan — Full-Stack Developer"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#10131E]"></span>
                </span>
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-white tracking-tight">Firoz Khan</h3>
                <p className="text-xs font-mono text-indigo-400">Full-Stack Developer &amp; Studio Founder</p>
                <p className="text-xs text-slate-400 mt-1">Palghar, Maharashtra, India • Available for Client Work</p>
              </div>
            </div>

            <p className="text-lg text-slate-200 font-normal leading-relaxed">
              Hello! I am <strong className="text-white font-semibold">Firoz Khan</strong>, a full-stack web developer based in{" "}
              <strong className="text-white font-medium">Palghar, Maharashtra, India</strong>. I specialize in designing and engineering custom websites, web applications, and digital systems that operate at lightning speed and consistently generate business results.
            </p>

            <p>
              I am the{" "}
              <a
                href="https://fkdigitalmedia.com"
                className="text-indigo-400 hover:text-indigo-300 font-semibold underline underline-offset-4 decoration-indigo-500/50 hover:decoration-indigo-400 transition-all"
              >
                Founder of FK Digital Media
              </a>{" "}
              — a specialized digital studio dedicated to building high-converting business websites, rapid news media portals, kids&apos; YouTube channel acceleration frameworks, and hyper-targeted local SEO campaigns.
            </p>

            <p>
              Whether partnering with ambitious local entrepreneurs across Maharashtra or collaborating with corporate clients across India, the United States, and the United Kingdom, I take pride in end-to-end technical craftsmanship: from responsive React/Next.js/Astro frontends to scalable Node.js microservices, Cloudflare Workers, and secure SQL databases.
            </p>

            {/* Quick Credentials / Details pill grid */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-surface-border">
                <MapPin className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <div>
                  <div className="text-xs text-slate-400">Location</div>
                  <div className="text-sm font-medium text-slate-200">Palghar, Maharashtra, IN</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-surface-border">
                <Building2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <div>
                  <div className="text-xs text-slate-400">Digital Studio</div>
                  <div className="text-sm font-medium text-slate-200">
                    <a
                      href="https://fkdigitalmedia.com"
                      className="text-indigo-400 hover:underline"
                    >
                      FK Digital Media
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center text-sm font-semibold text-indigo-400 hover:text-indigo-300 underline underline-offset-8"
              >
                Let&apos;s build something together →
              </a>
            </div>
          </div>

          {/* Right Column: 4 Pillars of Engineering */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {philosophies.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-5 rounded-xl bg-surface border border-surface-border hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-105 group-hover:bg-indigo-500/20 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-heading font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-indigo-300">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Production Grade</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
