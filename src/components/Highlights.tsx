import { HIGHLIGHTS } from "@/data/portfolioData";
import { CheckCircle2, Globe2, Layers, Rocket } from "lucide-react";

export default function Highlights() {
  const icons = [Rocket, Globe2, Layers, CheckCircle2];

  return (
    <section className="py-10 border-y border-white/5 bg-[#0C0F1A]/70 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {HIGHLIGHTS.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={item.label}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/20 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight">
                    {item.metric}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {item.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
