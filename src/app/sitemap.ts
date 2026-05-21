import type { MetadataRoute } from "next";

import { routes } from "@/config/routes";
import { publicEnv } from "@/lib/env/public";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [routes.home, routes.jobs, routes.login, routes.register].map((route) => ({
    url: `${publicEnv.NEXT_PUBLIC_APP_URL}${route}`,
    lastModified: now,
  }));
}
