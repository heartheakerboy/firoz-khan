import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://fkdigitalmedia.com/sitemap.xml",
    host: "https://fkdigitalmedia.com",
  };
}
