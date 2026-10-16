"use client";

import { useState } from "react";
import { PROJECTS, Project } from "@/data/portfolioData";
import {
  ExternalLink,
  Layers,
  Sparkles,
  ArrowUpRight,
  FolderGit2,
  CheckCircle2,
} from "lucide-react";

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const categories = [
    "All",
    "SaaS & Tools",
    "Directory & Portal",
    "Client & Studio",
    "Theme & Licensing",
    "Demo Booking",
  ];

  const filteredProjects =
    selectedFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-24 bg-[#0B0E17]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
              <span>FEATURED WORK & CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight mb-4">
              Real-World Production Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              A selection of live web applications, SaaS utilities, digital directories, and custom
              content platforms built with rigorous performance and SEO standards.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#10131E] p-1.5 rounded-xl border border-white/5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedFilter === cat
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project) => {
            const isFkMedia = project.id === "fk-digital-media";

            return (
              <div
                key={project.id}
                className="rounded-2xl bg-[#10131E] border border-white/5 hover:border-indigo-500/30 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/40 group relative overflow-hidden"
              >
                {/* Ambient Card Corner Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/5 rounded-bl-full pointer-events-none group-hover:bg-indigo-600/10 transition-colors" />

                <div>
                  {/* Top Header: Badge & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-full">
                      {project.badge || project.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Live Link */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-xl font-heading font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {isFkMedia && project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          className="hover:underline flex items-center gap-1.5"
                        >
                          <span>{project.title}</span>
                          <ArrowUpRight className="w-4 h-4 text-indigo-400" />
                        </a>
                      ) : (
                        project.title
                      )}
                    </h3>
                  </div>

                  {/* Tagline */}
                  <p className="text-xs font-mono text-indigo-400 mb-4 leading-normal">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Architecture & Highlights Bullet points */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                    {project.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack & Action Links */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-white/5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono text-slate-300 bg-[#161B2C] border border-white/5 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs pt-2">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        className="inline-flex items-center gap-1.5 font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        <span>Visit Live Site</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="text-slate-500 font-mono text-[11px]">
                        Internal &amp; Client Production
                      </span>
                    )}

                    <a
                      href="#contact"
                      className="text-slate-400 hover:text-white transition-colors text-[11px]"
                    >
                      Inquire Similar Project →
                    </a>
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
