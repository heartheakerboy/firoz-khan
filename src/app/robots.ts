import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://firoz-khan.vercel.app/sitemap.xml",
    host: "https://firoz-khan.vercel.app",
  };
}
