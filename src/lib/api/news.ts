import { NewsItem } from "@/types";
import { NEWS_API_KEY, NEWS_API_URL } from "./config";

export async function fetchNews(
  country: string = "jp",
  category: string = "general"
): Promise<NewsItem[]> {
  try {
    // NewsAPI has CORS issues, use alternative service or Next.js API routes
    // In production, use Next.js API routes or another free API
    if (!NEWS_API_KEY) {
      // Mock data when API key is not available
      return [
        {
          title: "Sample News 1",
          description: "This is a sample news description.",
          url: "#",
          publishedAt: new Date().toISOString(),
          source: "Sample Source",
        },
        {
          title: "Sample News 2",
          description: "This is a sample news description.",
          url: "#",
          publishedAt: new Date().toISOString(),
          source: "Sample Source",
        },
        {
          title: "Sample News 3",
          description: "This is a sample news description.",
          url: "#",
          publishedAt: new Date().toISOString(),
          source: "Sample Source",
        },
      ];
    }

    const response = await fetch(
      `${NEWS_API_URL}?country=${country}&category=${category}&apiKey=${NEWS_API_KEY}`
    );

    if (!response.ok) {
      throw new Error("News API error");
    }

    const data = (await response.json()) as {
      articles?: Array<{
        title?: string;
        description?: string;
        url?: string;
        publishedAt?: string;
        source?: { name?: string };
      }>;
    };
    return (
      data.articles?.slice(0, 5).map((article) => ({
        title: article.title || "No title",
        description: article.description || "",
        url: article.url || "#",
        publishedAt: article.publishedAt || new Date().toISOString(),
        source: article.source?.name || "Unknown",
      })) || []
    );
  } catch (error) {
    console.error("News fetch error:", error);
    return [
      {
        title: "News fetch error",
        description: "Failed to fetch news data.",
        url: "#",
        publishedAt: new Date().toISOString(),
        source: "System",
      },
    ];
  }
}
