"use client";

import { useEffect, useState } from "react";
import { fetchNews } from "@/lib";
import { NewsItem } from "@/types";
import { NewsWidgetUI } from "./NewsWidgetUI";

interface NewsWidgetProps {
  className?: string;
  country?: string;
  category?: string;
}

export function NewsWidget({
  className = "",
  country = "jp",
  category = "general",
}: NewsWidgetProps) {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      const data = await fetchNews(country, category);
      setNews(data);
      setLoading(false);
    };

    loadNews();
    const interval = setInterval(loadNews, 600000); // Update every 10 minutes

    return () => clearInterval(interval);
  }, [country, category]);

  return <NewsWidgetUI news={news} loading={loading} className={className} />;
}
