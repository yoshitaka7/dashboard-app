import { CurrencyData } from "@/types";

interface CurrencyWidgetUIProps {
  currency: CurrencyData | null;
  loading: boolean;
  className?: string;
}

export function CurrencyWidgetUI({
  currency,
  loading,
  className = "",
}: CurrencyWidgetUIProps) {
  if (loading || !currency) {
    return (
      <div
        className={`rounded-lg bg-white p-6 shadow-md dark:bg-gray-800 ${className}`}
      >
        <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
          Exchange Rate
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
        Exchange Rate
      </h3>
      <div className="space-y-3">
        <div className="text-center">
          <div className="mb-2 text-3xl font-bold text-gray-900 dark:text-gray-100">
            {currency.rate}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {currency.base} / {currency.target}
          </div>
        </div>
        <div className="border-t border-gray-200 pt-3 dark:border-gray-700">
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Last updated: {currency.lastUpdated}
          </div>
        </div>
      </div>
    </div>
  );
}

