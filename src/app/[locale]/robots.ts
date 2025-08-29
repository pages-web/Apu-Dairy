// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/", // энэ хавтсыг crawl хийхгүй
    },
    sitemap: "https://example.com/sitemap.xml",
  };
}
