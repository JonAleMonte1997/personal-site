import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// Una sola URL porque el sitio es una sola página. Si algún día vuelve a haber
// una segunda, se agrega acá: nada la descubre sola.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url, lastModified: new Date() }];
}
