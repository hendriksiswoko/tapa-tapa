import type { MetadataRoute } from "next";

const siteUrl = "https://www.example.com"; // TODO: replace with production domain

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
