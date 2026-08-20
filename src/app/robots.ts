import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://hendriksiswoko.github.io/tapa-tapa"; // TODO: replace once a custom domain is set up

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
