import type { MetadataRoute } from "next";
import { videoProjects } from "@/data/projects";
import { serviceList } from "@/data/services";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-03");
  const pages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/video`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/software`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/resume`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: "yearly", priority: 0.6 },
  ];

  return pages.concat(serviceList.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  })), videoProjects.map((project) => ({
    url: `${SITE_URL}/video/${project.slug}`,
    lastModified,
    changeFrequency: "yearly" as const,
    priority: 0.8,
  })));
}
