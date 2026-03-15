import type { MetadataRoute } from "next";

const BASE_URL = "https://thelvathletics.com";

const blogSlugs = [
  "las-vegas-athletics-stadium-update-2026",
  "best-sports-bars-las-vegas-watch-as-games",
  "las-vegas-athletics-season-tickets-guide",
  "oakland-as-world-series-history",
  "las-vegas-as-roster-2026",
  "john-fisher-controversy-explained",
  "las-vegas-ballpark-location-guide",
  "as-spring-training-2026-recap",
  "las-vegas-as-prospects-to-watch",
  "moneyball-legacy-las-vegas",
  "las-vegas-sports-town-history",
  "gameday-guide-las-vegas-athletics",
  "las-vegas-as-merchandise-where-to-buy",
  "al-west-preview-2026",
  "oakland-to-sacramento-to-vegas-timeline",
  "as-2026-roster-breakdown-who-is-coming-to-vegas",
  "as-temporary-home-minor-league-park-sacramento",
  "as-relocation-compared-every-mlb-team-move",
  "economics-of-as-vegas-deal-who-pays-who-profits",
  "building-a-fanbase-from-scratch-as-las-vegas-plan",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date("2026-03-08"),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date("2026-03-08"),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date("2026-03-08"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes];
}
