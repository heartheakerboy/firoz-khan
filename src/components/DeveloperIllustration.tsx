import Image from "next/image";

export default function DeveloperIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Background ambient glows */}
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Terminal & Avatar Composite Container */}
      <div className="relative rounded-2xl bg-[#0D101A]/90 border border-indigo-500/20 p-5 shadow-2xl shadow-indigo-950/40 backdrop-blur-xl overflow-hidden">
        {/* Subtle grid line overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/5 relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-sm shadow-rose-500/50" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-sm shadow-amber-500/50" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm shadow-emerald-500/50" />
            <span className="ml-2 font-mono text-[11px] text-slate-400">firoz-khan@fullstack ~ zsh</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>active 2026</span>
          </div>
        </div>

        {/* Developer Profile Header inside Terminal */}
        <div className="pt-4 pb-3 flex items-center gap-4 relative z-10">
          <div className="relative flex-shrink-0">
            {/* Real photo with glowing border */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 p-[2px] shadow-lg shadow-indigo-500/30">
              <div className="w-full h-full rounded-2xl bg-[#0F1322] flex items-center justify-center overflow-hidden relative">
                <Image
                  src="/firoz-khan.webp"
                  alt="Firoz Khan — Full-Stack Developer"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-indigo-600 rounded-md p-0.5 text-[9px] font-mono font-bold text-white px-1 shadow">
              PRO
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-heading font-bold text-lg tracking-tight">Firoz Khan</h3>
            <p className="text-xs text-indigo-300/90 font-mono">Full-Stack Engineer & Studio Founder</p>
            <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
              <span>📍 Palghar, Maharashtra, IN</span>
              <span>•</span>
              <span className="text-emerald-400">Available</span>
            </p>
          </div>
        </div>

        {/* Code Snippet Box */}
        <div className="rounded-xl bg-[#080A11] p-3.5 border border-white/5 font-mono text-xs leading-relaxed relative z-10 overflow-x-auto">
          <div className="flex items-center gap-2 text-slate-500 text-[11px] pb-2 border-b border-white/5 mb-2.5">
            <span className="text-indigo-400">portfolio.config.ts</span>
            <span>—</span>
            <span>Next.js 14 • Cloudflare • TypeScript</span>
          </div>
          <div className="text-slate-300 space-y-1">
            <p>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-indigo-300">developer</span> = &#123;
            </p>
            <p className="pl-4">
              <span className="text-slate-400">name:</span>{" "}
              <span className="text-emerald-300">&quot;Firoz Khan&quot;</span>,
            </p>
            <p className="pl-4">
              <span className="text-slate-400">role:</span>{" "}
              <span className="text-emerald-300">&quot;Full-Stack Web Developer&quot;</span>,
            </p>
            <p className="pl-4">
              <span className="text-slate-400">studio:</span>{" "}
              <span className="text-indigo-300">new Agency</span>(
              <span className="text-emerald-300">&quot;FK Digital Media&quot;</span>),
            </p>
            <p className="pl-4">
              <span className="text-slate-400">coreStack:</span> [
              <span className="text-amber-300">&quot;Next.js&quot;</span>,{" "}
              <span className="text-amber-300">&quot;TypeScript&quot;</span>,{" "}
              <span className="text-amber-300">&quot;Node.js&quot;</span>,{" "}
              <span className="text-amber-300">&quot;Cloudflare&quot;</span>],
            </p>
            <p className="pl-4">
              <span className="text-slate-400">performance:</span> &#123;{" "}
              <span className="text-slate-400">pageSpeedScore:</span>{" "}
              <span className="text-cyan-400">99</span>,{" "}
              <span className="text-slate-400">seoReady:</span>{" "}
              <span className="text-indigo-400">true</span> &#125;,
            </p>
            <p className="pl-4">
              <span className="text-slate-400">mission:</span>{" "}
              <span className="text-emerald-300">&quot;Build web apps that convert visitors into paying clients&quot;</span>,
            </p>
            <p>&#125;;</p>
            <p className="pt-2 text-indigo-400 font-semibold">
              <span className="text-purple-400">export default</span> developer;
            </p>
          </div>
        </div>

        {/* Floating Metrics / Badges */}
        <div className="pt-3.5 grid grid-cols-3 gap-2 relative z-10 text-center">
          <div className="p-2 rounded-lg bg-white/5 border border-white/5">
            <span className="block text-indigo-400 font-bold text-sm">30+</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider">Websites</span>
          </div>
          <div className="p-2 rounded-lg bg-white/5 border border-white/5">
            <span className="block text-cyan-400 font-bold text-sm">99/100</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider">PageSpeed</span>
          </div>
          <div className="p-2 rounded-lg bg-white/5 border border-white/5">
            <span className="block text-emerald-400 font-bold text-sm">Global</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider">IN, US & UK</span>
          </div>
        </div>
      </div>
    </div>
  );
}
