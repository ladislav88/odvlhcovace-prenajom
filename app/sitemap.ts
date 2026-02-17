import { MetadataRoute } from "next";
import { SITE_URL } from "./lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/kontakt",
    "/prenajom-odvlhcovaca",
    "/odvlhcovac-do-bytu",
    "/odvlhcovac-do-pivnice",
    "/odvlhcovac-po-zatopeni",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route || "/"}`,
    lastModified: new Date(),
    changeFrequency: (route === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
