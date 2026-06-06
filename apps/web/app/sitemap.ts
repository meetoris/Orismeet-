import type { MetadataRoute } from "next";

import { WEBSITE_URL } from "@calcom/lib/constants";

/**
 * Static sitemap for public entry points. Most routes are either authenticated
 * (settings, bookings) or dynamic per-user booking pages that cannot be
 * enumerated at build time without a DB query. To surface public booking pages,
 * extend this to query the database for active usernames/event types and append
 * `${WEBSITE_URL}/${username}` entries.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = WEBSITE_URL.replace(/\/$/, "");

  const staticEntries: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/auth/login", priority: 0.5, changeFrequency: "monthly" },
    { path: "/signup", priority: 0.6, changeFrequency: "monthly" },
  ];

  const lastModified = new Date();

  return staticEntries.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
