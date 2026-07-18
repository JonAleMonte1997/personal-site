import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: new Date() },
    { url: `${site.url}/libre-fit`, lastModified: new Date() },
    { url: `${site.url}/libre-fit/privacidad`, lastModified: new Date() },
  ];
}
