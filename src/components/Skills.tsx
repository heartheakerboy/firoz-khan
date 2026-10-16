"use client";

import { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import {
  Code,
  Server,
  Wrench,
  CheckCircle2,
  Terminal,
  Zap,
  Cpu,
} from "lucide-react";

export default function Skills() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | "all">("all");

  const categoryIcons = [Code, Server, Wrench];

  const filteredCategories =
    activeCategoryIndex === "all"
      ? SKILL_CATEGORIES
      : [SKILL_CATEGORIES[activeCategoryIndex]];

  return (
    <section id="skills" className="py-24 bg-[#0B0E17]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight mb-4">
              Modern Full-Stack Toolkit
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              A curated technology stack chosen for maximum runtime velocity, developer ergonomics,
              scalable state management, and reliable production uptime.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-[#10131E] p-1.5 rounded-xl border border-white/5">
            <button
              onClick={() => setActiveCategoryIndex("all")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategoryIndex === "all"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              All Domains
            </button>
            {SKILL_CATEGORIES.map((cat, idx) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategoryIndex === idx
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat.title.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredCategories.map((category, idx) => {
            const actualIndex =
              activeCategoryIndex === "all" ? idx : activeCategoryIndex;
            const Icon = categoryIcons[actualIndex] || Terminal;

            return (
              <div
                key={category.title}
                className="rounded-2xl bg-[#10131E] border border-white/5 p-6 hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between shadow-lg shadow-black/20 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                      {category.skills.length} Technologies
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-[#161B2C]/60 border border-white/5 hover:border-indigo-500/20 hover:bg-[#161B2C] transition-all"
                      >
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                          <span className="text-sm font-medium text-slate-200">
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          {skill.badgeText && (
                            <span className="text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded">
                              {skill.badgeText}
                            </span>
                          )}
                          <span className="text-[11px] font-mono text-slate-400">
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Production Hardened</span>
                  </span>
                  <span className="font-mono text-indigo-400">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Callout */}
        <div className="mt-12 rounded-xl bg-gradient-to-r from-indigo-950/40 via-purple-950/20 to-indigo-950/40 border border-indigo-500/20 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Cpu className="w-6 h-6 text-indigo-400 flex-shrink-0" />
            <div className="text-sm text-slate-300">
              <strong className="text-white">Looking for a specific integration?</strong> From custom webhook systems and payment gateways to RESTful microservices, I tailor the stack to your business requirements.
            </div>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 px-4 py-2 rounded-lg bg-indigo-600/30 hover:bg-indigo-600 text-indigo-200 hover:text-white border border-indigo-500/30 text-xs font-semibold transition-all"
          >
            Inquire Tech Fit →
          </a>
        </div>
      </div>
    </section>
  );
}
