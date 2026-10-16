import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PERSONAL_INFO } from "@/data/portfolioData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090A0F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fkdigitalmedia.com"),
  title: {
    default: "Firoz Khan — Full-Stack Developer | Palghar, Maharashtra",
    template: "%s | Firoz Khan",
  },
  description:
    "Full-stack web developer and founder of FK Digital Media based in Palghar, Maharashtra, India. Crafting fast, modern, SEO-engineered websites, web apps, Cloudflare edge solutions, and scalable digital platforms.",
  keywords: [
    "Firoz Khan",
    "Full-Stack Developer",
    "Web Developer Palghar",
    "FK Digital Media",
    "Next.js Developer India",
    "Astro Web Developer",
    "WordPress Custom Development",
    "Technical SEO Maharashtra",
    "Freelance Full Stack Developer",
  ],
  authors: [{ name: "Firoz Khan", url: "https://fkdigitalmedia.com" }],
  creator: "Firoz Khan",
  publisher: "FK Digital Media",
  formatDetection: {
    email: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://fkdigitalmedia.com",
    siteName: "Firoz Khan Portfolio",
    title: "Firoz Khan — Full-Stack Developer",
    description:
      "Full-stack web developer & founder of FK Digital Media. Building fast, modern, SEO-ready websites and web apps that bring real clients.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Firoz Khan — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Firoz Khan — Full-Stack Developer",
    description:
      "Full-stack web developer & founder of FK Digital Media based in Palghar, Maharashtra. Fast, modern, SEO-ready websites and web apps.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://fkdigitalmedia.com",
  },
  verification: {
    google: "vVfJ-JUlDqJQIqx5Y-7JEn1N9w0WqD9uCm3Bo5mNOe4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://fkdigitalmedia.com/#person",
        name: PERSONAL_INFO.name,
        jobTitle: "Full-Stack Developer",
        description: PERSONAL_INFO.bio,
        url: "https://fkdigitalmedia.com",
        sameAs: [
          PERSONAL_INFO.socials.linkedin,
          PERSONAL_INFO.socials.instagram,
          PERSONAL_INFO.socials.website,
        ],
        worksFor: {
          "@type": "Organization",
          name: PERSONAL_INFO.agencyName,
          url: PERSONAL_INFO.agencyUrl,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Palghar",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        knowsAbout: [
          "Web Development",
          "Next.js",
          "React",
          "Astro",
          "TypeScript",
          "Node.js",
          "REST APIs",
          "Cloudflare Workers",
          "SQL",
          "WordPress",
          "Search Engine Optimization",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://fkdigitalmedia.com/#website",
        url: "https://fkdigitalmedia.com",
        name: "Firoz Khan — Portfolio",
        publisher: {
          "@id": "https://fkdigitalmedia.com/#person",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://fkdigitalmedia.com/#service",
        name: "FK Digital Media — Web Development & SEO",
        founder: {
          "@id": "https://fkdigitalmedia.com/#person",
        },
        url: "https://fkdigitalmedia.com",
        telephone: PERSONAL_INFO.phone,
        email: PERSONAL_INFO.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Palghar",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        priceRange: "$$",
      },
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} bg-background text-slate-100 antialiased font-sans selection:bg-brand-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
