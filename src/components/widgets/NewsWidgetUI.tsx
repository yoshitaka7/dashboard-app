import { NewsItem } from "@/types";

interface NewsWidgetUIProps {
  news: NewsItem[];
  loading: boolean;
  className?: string;
}

export function NewsWidgetUI({
  news,
  loading,
  className = "",
}: NewsWidgetUIProps) {
  if (loading) {
    return (
      <div
        className={`rounded-lg bg-white p-6 shadow-md dark:bg-gray-800 ${className}`}
      >
        <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
          News
        </h3>
        <div className="text-center text-gray-600 dark:text-gray-400">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div
      className={`rounded-lg bg-white p-6 shadow-md dark:bg-gray-800 ${className}`}
    >
      <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
        News
      </h3>
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {news.length === 0 ? (
          <div className="text-center text-gray-600 dark:text-gray-400">
            No news available
          </div>
        ) : (
          news.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-3 last:border-b-0 dark:border-gray-700"
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-blue-600 dark:hover:text-blue-400"
              >
                <h4 className="mb-1 text-sm font-semibold text-gray-900 dark:text-gray-100 line-clamp-2">
                  {item.title}
                </h4>
                {item.description && (
                  <p className="mb-2 text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                    {item.description}
                  </p>
                )}
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>{item.source}</span>
                  <span>
                    {new Date(item.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

