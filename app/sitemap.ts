import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [{ url: "https://strnadaljaz.si/", lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
