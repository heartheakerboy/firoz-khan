export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Client & Studio" | "Directory & Portal" | "SaaS & Tools" | "Theme & Licensing" | "Demo Booking";
  description: string;
  details: string[];
  techStack: string[];
  liveUrl?: string;
  featured: boolean;
  badge?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: "Advanced" | "Proficient" | "Specialized";
    badgeText?: string;
  }[];
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  linkUrl?: string;
  linkText?: string;
}

export const PERSONAL_INFO = {
  name: "Firoz Khan",
  title: "Full-Stack Developer",
  roleHeadline: "Full-Stack Developer & Digital Studio Founder",
  location: "Palghar, Maharashtra, India",
  email: "hello@fkdigitalmedia.com",
  phone: "+91 70305 01069",
  whatsappUrl: "https://wa.me/917030501069?text=Hi%20Firoz,%20I%20would%20like%20to%20discuss%20a%20web%20development%20project.",
  agencyName: "FK Digital Media",
  agencyUrl: "https://fkdigitalmedia.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/firoz-khan-1153358a/",
    instagram: "https://www.instagram.com/rtibyfiroz/",
    website: "https://fkdigitalmedia.com",
    github: "https://github.com",
  },
  bio: "Full-stack web developer and founder of FK Digital Media based in Palghar, Maharashtra, India. I engineer high-performance, modern, and SEO-engineered web applications and digital platforms from frontend to backend, cloud infrastructure, and deployment. Working with business owners, founders, and content creators across India and internationally.",
};

export const HIGHLIGHTS = [
  {
    metric: "30+",
    label: "Websites Delivered",
    subtext: "High-performance production builds",
  },
  {
    metric: "Trilingual",
    label: "Multilingual Deployments",
    subtext: "English, Hindi & Marathi portals",
  },
  {
    metric: "Global",
    label: "Cross-Border Clients",
    subtext: "Active clients across India, USA & UK",
  },
  {
    metric: "End-to-End",
    label: "Full-Stack Ownership",
    subtext: "Frontend, APIs, databases & cloud setup",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Responsive, accessible, lightning-fast interfaces crafted for conversion and performance.",
    skills: [
      { name: "React", level: "Advanced" },
      { name: "Next.js (App Router)", level: "Advanced", badgeText: "Core Stack" },
      { name: "Astro", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "HTML5 / Semantic CSS", level: "Advanced" },
    ],
  },
  {
    title: "Backend & Databases",
    description: "Robust server-side architectures, RESTful APIs, edge compute, and scalable data layers.",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "RESTful APIs", level: "Advanced" },
      { name: "Cloudflare Workers & Pages", level: "Advanced", badgeText: "Edge Compute" },
      { name: "Cloudflare D1 / SQL", level: "Proficient" },
      { name: "WordPress (Custom Themes)", level: "Advanced" },
      { name: "Database Design & Queries", level: "Proficient" },
    ],
  },
  {
    title: "DevOps, Tools & Performance",
    description: "Continuous deployment pipelines, search engine dominance, and actionable tracking.",
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Vercel Platform", level: "Advanced" },
      { name: "Cloudflare DNS & CDN", level: "Advanced" },
      { name: "Technical SEO & Schema", level: "Advanced", badgeText: "High Impact" },
      { name: "Google Analytics 4 & Tag Manager", level: "Proficient" },
      { name: "Core Web Vitals Optimization", level: "Advanced" },
    ],
  },
];

export const SERVICES: Service[] = [
  {
    id: "web-dev",
    title: "Website Development",
    tagline: "Ultra-fast, responsive, modern business websites engineered for customer acquisition.",
    description:
      "Crafting custom digital presences that look stunning, load in under 1 second, and rank on search engines. Every build features semantic HTML, optimized assets, and mobile-first responsive architecture.",
    highlights: [
      "Custom Next.js & Astro builds with 90+ PageSpeed scores",
      "Conversion-focused landing pages and interactive portfolios",
      "Seamless CMS integration, contact funnels, and CRM connectors",
    ],
    linkUrl: "https://fkdigitalmedia.com/website-development/",
    linkText: "website development services",
  },
  {
    id: "web-apps",
    title: "Web Applications & SaaS",
    tagline: "End-to-end web apps with authentication, APIs, real-time databases, and payment flows.",
    description:
      "Building scalable web software from ideation to production. I handle state management, edge computing functions, database schemas, and microservice integrations.",
    highlights: [
      "Full-stack architecture using Next.js, Node.js, and Cloudflare",
      "RESTful API design and third-party webhook integrations",
      "Role-based access, licensing mechanisms, and dashboards",
    ],
  },
  {
    id: "wordpress",
    title: "WordPress Themes & Websites",
    tagline: "Custom theme creation, license management, and performance-tuned WordPress setups.",
    description:
      "Moving beyond bloated themes. I engineer bespoke, lightweight WordPress themes with custom Gutenberg blocks, news portal architectures, and tailored editorial workflows.",
    highlights: [
      "Specialized news website development with high concurrent traffic",
      "Built-in software license validation and automated update systems",
      "Speed optimization and database cleanup for sub-second page loads",
    ],
    linkUrl: "https://fkdigitalmedia.com/news-website/",
    linkText: "news website development",
  },
  {
    id: "local-seo",
    title: "Local SEO & Search Dominance",
    tagline: "Get found by customers in your immediate service area on Google Search and Maps.",
    description:
      "Technical on-page SEO, rich schema markup, Google Business Profile optimization, and hyper-targeted landing pages that capture local search intent.",
    highlights: [
      "Local schema markup (LocalBusiness, GeoCoordinates, Reviews)",
      "High-converting city and area-specific landing pages",
      "Google Search Console diagnostics and organic traffic scaling",
    ],
    linkUrl: "https://fkdigitalmedia.com/local-seo/",
    linkText: "local SEO services",
  },
  {
    id: "youtube-growth",
    title: "Kids' YouTube Channel Setup & Growth",
    tagline: "Strategic channel architecture, COPPA-compliant workflows, and audience retention.",
    description:
      "End-to-end consulting and technical optimization for children's entertainment and educational channels. From channel branding to metadata, thumbnail engineering, and upload automation.",
    highlights: [
      "Niche research, content calendar design, and COPPA compliance",
      "SEO-optimized titles, descriptions, and tags for YouTube algorithm",
      "Growth strategies with proven engagement and subscriber momentum",
    ],
    linkUrl: "https://fkdigitalmedia.com/kids-youtube/",
    linkText: "kids' YouTube channel growth",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "fk-digital-media",
    title: "FK Digital Media",
    tagline: "Digital Studio & Agency Platform",
    category: "Client & Studio",
    description:
      "The official flagship website for FK Digital Media — a digital studio delivering business websites, news portals, kids' YouTube channel acceleration, and local SEO services.",
    details: [
      "Engineered for maximum speed, dark-mode elegance, and high search visibility",
      "Comprehensive service showcases with conversion-oriented booking flows",
      "Optimized technical SEO architecture with zero layout shift",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Technical SEO"],
    liveUrl: "https://fkdigitalmedia.com",
    featured: true,
    badge: "Agency Hub",
  },
  {
    id: "mahamistri",
    title: "MahaMistri",
    tagline: "Hyperlocal Home-Services Directory for Maharashtra",
    category: "Directory & Portal",
    description:
      "A localized directory connecting homeowners and commercial facilities across Maharashtra with verified electricians, plumbers, carpenters, and technicians.",
    details: [
      "Geo-targeted city/taluka categorization with bilingual support",
      "Direct WhatsApp and call routing with lead attribution",
      "Ultra-lightweight database queries optimized for low-bandwidth mobile connections",
    ],
    techStack: ["Next.js", "Cloudflare D1 / SQL", "Tailwind CSS", "REST API", "Edge Cache"],
    featured: true,
    badge: "Hyperlocal Platform",
  },
  {
    id: "aapkaneta",
    title: "AapkaNeta",
    tagline: "Public-Figure & Civic Information Portal",
    category: "Directory & Portal",
    description:
      "A civic engagement and public-figure portal providing structured records, verified biographies, constituent contact information, and public development initiatives.",
    details: [
      "Semantic profiles with JSON-LD Person schema for search engine knowledge panels",
      "Clean content aggregation and categorization by constituency and state",
      "Trilingual accessibility ensuring inclusive outreach",
    ],
    techStack: ["Astro", "TypeScript", "Cloudflare Pages", "Microdata Schema", "Tailwind"],
    featured: true,
    badge: "Civic Portal",
  },
  {
    id: "indexpilot",
    title: "IndexPilot",
    tagline: "Backlink Indexing & URL Submission SaaS Tool",
    category: "SaaS & Tools",
    description:
      "A developer and SEO utility designed to automate bulk URL submissions to search engine indexing APIs, tracking indexation status in real-time.",
    details: [
      "Google Indexing API & Bing Submission API queue manager",
      "Automated batch pinging, status webhooks, and reporting dashboards",
      "Edge-driven rate-limiting and token lifecycle management",
    ],
    techStack: ["Next.js App Router", "Node.js", "Google Indexing API", "Tailwind", "Vercel"],
    featured: true,
    badge: "SEO SaaS",
  },
  {
    id: "news-theme",
    title: "NEws WordPress Theme",
    tagline: "High-Traffic News Theme with Remote License Validation",
    category: "Theme & Licensing",
    description:
      "A bespoke, speed-optimized WordPress theme engineered for digital news publications and regional journalists, featuring an integrated remote license key verification system.",
    details: [
      "Proprietary license activation server with domain verification and auto-updates",
      "AMP-ready, Google Discover compliant layouts with ad-placement slots",
      "Sub-800ms Time-to-First-Byte on modest hosting configurations",
    ],
    techStack: ["WordPress", "PHP", "Cloudflare Workers", "REST API", "JavaScript"],
    featured: false,
    badge: "Theme & DRM",
  },
  {
    id: "demo-booking-platform",
    title: "Care & Style Booking Demos",
    tagline: "Demo Booking Systems for Clinics, Salons & Tattoo Studios",
    category: "Demo Booking",
    description:
      "A suite of turnkey appointment booking and service reservation platforms tailored for local medical clinics, aesthetic salons, and tattoo studios.",
    details: [
      "Interactive time-slot selector with real-time availability check",
      "Direct WhatsApp booking confirmation and automated calendar invites",
      "Mobile-optimized customer onboarding flow with high conversion rates",
    ],
    techStack: ["React", "Next.js", "Tailwind CSS", "WhatsApp API", "LocalStorage"],
    featured: false,
    badge: "Booking Suite",
  },
];
