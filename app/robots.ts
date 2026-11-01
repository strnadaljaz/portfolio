import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            { userAgent: "*", allow: "/" },
            ...["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended", "Bingbot", "OAI-SearchBot"].map((userAgent) => ({ userAgent, allow: "/" })),
        ],
        sitemap: "https://strnadaljaz.si/sitemap.xml",
        host: "https://strnadaljaz.si",
    };
}
