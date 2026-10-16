"use client";

import { useState } from "react";
import {
  Mail,
  MessageCircle,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Website Development",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate front-end submission & prepare WhatsApp/Email fallback
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hi Firoz,\nMy name is ${formData.name || "a client"}.\nService: ${
        formData.service
      }\nMessage: ${formData.message || "I would like to discuss a project."}\nMy Email: ${
        formData.email || "N/A"
      }`
    );
    window.open(`https://wa.me/917030501069?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight mb-4">
            Let&apos;s Build Your Next High-Performance Project
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have a project in mind, need a speed audit, or seeking full-stack development?
            Reach out directly. I respond promptly to inquiries from India and worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* WhatsApp Card */}
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener"
              className="block p-5 rounded-2xl bg-surface border border-surface-border hover:border-emerald-500/40 hover:bg-[#131A26] transition-all duration-300 group shadow-lg shadow-black/20"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                      Quickest Response
                    </div>
                    <div className="text-base font-heading font-bold text-white">
                      WhatsApp Chat
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-xs text-slate-400 pl-13">
                {PERSONAL_INFO.phone} — Instant messaging for project requirements & quotes.
              </p>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="block p-5 rounded-2xl bg-surface border border-surface-border hover:border-indigo-500/40 hover:bg-[#131A26] transition-all duration-300 group shadow-lg shadow-black/20"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                      Direct Email
                    </div>
                    <div className="text-base font-heading font-bold text-white">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-xs text-slate-400 pl-13">
                Send RFP, technical specifications, or request an NDA.
              </p>
            </a>

            {/* Location & Availability Card */}
            <div className="p-5 rounded-2xl bg-[#0F1322] border border-white/5 space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-indigo-400" />
                <div>
                  <div className="text-xs text-slate-400">Location Base</div>
                  <div className="text-sm font-semibold text-slate-200">
                    Palghar, Maharashtra, India
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <Clock className="w-5 h-5 text-emerald-400" />
                <div>
                  <div className="text-xs text-slate-400">Turnaround Time</div>
                  <div className="text-sm font-semibold text-slate-200">
                    Replies within 12 - 24 hours (IST)
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <ShieldCheck className="w-5 h-5 text-indigo-400" />
                <div>
                  <div className="text-xs text-slate-400">Client Service</div>
                  <div className="text-sm font-semibold text-slate-200">
                    Serving clients across India, USA &amp; UK
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Front-End Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-surface border border-surface-border p-6 sm:p-8 shadow-2xl shadow-black/40">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white">
                    Thank You, {formData.name || "Friend"}!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been recorded. For instant connectivity, you can also forward your details straight to my WhatsApp.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleWhatsAppRedirect}
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm flex items-center gap-2 shadow-lg shadow-emerald-600/30 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          service: "Website Development",
                          message: "",
                        });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-sm font-medium transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono text-slate-300 mb-1.5"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090A0F] border border-surface-border text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono text-slate-300 mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090A0F] border border-surface-border text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-mono text-slate-300 mb-1.5"
                    >
                      Project Interest
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090A0F] border border-surface-border text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    >
                      <option value="Website Development">
                        Custom Website Development (Next.js / Astro)
                      </option>
                      <option value="Web Applications / SaaS">
                        Web Applications &amp; SaaS MVP
                      </option>
                      <option value="WordPress Themes & News Websites">
                        WordPress Theme &amp; News Portal
                      </option>
                      <option value="Local SEO Services">
                        Local SEO &amp; Google Maps Dominance
                      </option>
                      <option value="Kids YouTube Growth">
                        Kids&apos; YouTube Channel Growth Strategy
                      </option>
                      <option value="Speed Audit & Core Web Vitals">
                        PageSpeed &amp; Core Web Vitals Audit
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono text-slate-300 mb-1.5"
                    >
                      Project Details &amp; Objectives *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Briefly describe what you'd like to build, timeline, or current website URL..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090A0F] border border-surface-border text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all duration-200 disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Send Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <span className="text-[11px] text-slate-400">
                      🔒 No spam. Direct communication with Firoz.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
