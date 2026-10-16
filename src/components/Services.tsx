import {
  Globe,
  Code2,
  Newspaper,
  MapPin,
  Youtube,
  ArrowUpRight,
  CheckCircle,
} from "lucide-react";

export default function Services() {
  const serviceCards = [
    {
      id: "website-dev",
      title: "Website Development",
      icon: Globe,
      tagline: "Ultra-fast, mobile-first business sites engineered to convert",
      descriptionText:
        "Looking for high-impact ",
      linkText: "website development services",
      linkUrl: "https://fkdigitalmedia.com/website-development/",
      descriptionAfter:
        "? I build custom Next.js, Astro, and responsive websites that boast sub-second load times, flawless mobile responsiveness, and 90+ Google PageSpeed ratings. Designed to turn clicks into genuine business inquiries.",
      features: [
        "Modern Next.js (App Router) & Astro static/SSR builds",
        "Semantic HTML5 & clean component-driven Tailwind CSS",
        "Conversion funnels, lead-capture forms & WhatsApp routing",
        "Flawless cross-browser & mobile viewport compatibility",
      ],
      badge: "Core Service",
    },
    {
      id: "web-apps",
      title: "Web Applications & SaaS",
      icon: Code2,
      tagline: "End-to-end full-stack software from database to production",
      descriptionText:
        "Building scalable web applications, internal tools, and SaaS MVPs. From frontend UI state to secure Node.js APIs, Cloudflare edge functions, role-based access control, and payment gateway webhooks.",
      linkText: null,
      linkUrl: null,
      descriptionAfter: "",
      features: [
        "Full-stack architecture with Next.js, React & Node.js",
        "Edge computing with Cloudflare Workers & Cloudflare D1/SQL",
        "RESTful API engineering & third-party webhook integrations",
        "Authentication, user management & subscription flows",
      ],
      badge: "SaaS & MVPs",
    },
    {
      id: "wordpress",
      title: "WordPress Themes & Websites",
      icon: Newspaper,
      tagline: "Custom news portals, bespoke themes & remote license systems",
      descriptionText:
        "Specialized in high-performance WordPress engineering, including custom ",
      linkText: "news website development",
      linkUrl: "https://fkdigitalmedia.com/news-website/",
      descriptionAfter:
        ", lightweight editorial publishing themes, and automated remote license validation systems. Zero bloat, maximum stability.",
      features: [
        "Custom Gutenberg block development & bespoke theme coding",
        "High-traffic media portal architecture with instant caching",
        "Remote license activation & auto-update delivery servers",
        "Comprehensive database optimization & malware defense",
      ],
      badge: "Publishing & DRM",
    },
    {
      id: "local-seo",
      title: "Local SEO & Search Dominance",
      icon: MapPin,
      tagline: "Be the first choice when customers search in your locality",
      descriptionText:
        "Maximize organic search traffic with comprehensive ",
      linkText: "local SEO services",
      linkUrl: "https://fkdigitalmedia.com/local-seo/",
      descriptionAfter:
        ". I combine granular technical on-page SEO, rich JSON-LD schema markup, Google Business Profile enhancements, and geo-targeted landing pages.",
      features: [
        "LocalBusiness, GeoCoordinates & Review schema integration",
        "Hyperlocal landing page generation for target cities & suburbs",
        "Core Web Vitals tuning & mobile usability optimization",
        "Google Search Console auditing & crawl budget efficiency",
      ],
      badge: "Growth & Visibility",
    },
    {
      id: "youtube-growth",
      title: "Kids' YouTube Channel Growth",
      icon: Youtube,
      tagline: "Strategic channel architecture, metadata & COPPA compliance",
      descriptionText:
        "Comprehensive technical and creative optimization for creators entering ",
      linkText: "kids' YouTube channel growth",
      linkUrl: "https://fkdigitalmedia.com/kids-youtube/",
      descriptionAfter:
        ". From strict COPPA safety guidelines to high-CTR thumbnail psychology, algorithm-aligned metadata, and automated content scheduling.",
      features: [
        "COPPA & Made-for-Kids regulatory compliance consultation",
        "Video title, tag & description keyword optimization",
        "Visual branding, thumbnail strategy & end-screen retention loops",
        "Channel analytics diagnostics & audience trajectory tracking",
      ],
      badge: "Creator Studio",
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <span>END-TO-END SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight mb-4">
            Specialized Development & Growth Services
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Every engagement is engineered for measurable outcomes — whether launching a new venture,
            scaling search presence, or delivering scalable custom software.
          </p>
        </div>

        {/* Services Grid (3-column layout on wide screens, 2-column on tablets) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="rounded-2xl bg-surface border border-surface-border p-7 flex flex-col justify-between hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-950/20 transition-all duration-300 group"
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-indigo-400/90 mb-4">
                    {service.tagline}
                  </p>

                  {/* Description with contextual dofollow backlink */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {service.descriptionText}
                    {service.linkText && service.linkUrl && (
                      <a
                        href={service.linkUrl}
                        className="text-indigo-400 font-semibold underline underline-offset-4 decoration-indigo-400/40 hover:text-indigo-300 hover:decoration-indigo-300 transition-colors"
                      >
                        {service.linkText}
                      </a>
                    )}
                    {service.descriptionAfter}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-2.5 pt-4 border-t border-white/5">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center text-xs font-semibold text-slate-300 hover:text-indigo-300 transition-colors"
                  >
                    <span>Request Quote</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-indigo-400" />
                  </a>
                  {service.linkUrl && (
                    <a
                      href={service.linkUrl}
                      className="text-[11px] text-slate-400 hover:text-slate-200 transition-colors"
                    >
                      Studio Info →
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
