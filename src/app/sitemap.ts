import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://hendriksiswoko.github.io/tapa-tapa"; // TODO: replace once a custom domain is set up

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
