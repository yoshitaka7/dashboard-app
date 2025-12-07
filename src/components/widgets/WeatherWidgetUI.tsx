import { WeatherData } from "@/types";

interface WeatherWidgetUIProps {
  weather: WeatherData | null;
  loading: boolean;
  className?: string;
}

export function WeatherWidgetUI({
  weather,
  loading,
  className = "",
}: WeatherWidgetUIProps) {
  if (loading || !weather) {
    return (
      <div
        className={`rounded-lg bg-white p-6 shadow-md dark:bg-gray-800 ${className}`}
      >
        <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
          Weather
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
        Weather
      </h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-gray-600 dark:text-gray-400">Location</span>
          <span className="font-semibold text-gray-900 dark:text-gray-100">
            {weather.location}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600 dark:text-gray-400">Temperature</span>
          <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {weather.temperature}°C
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600 dark:text-gray-400">Condition</span>
          <span className="font-semibold text-gray-900 dark:text-gray-100">
            {weather.condition}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600 dark:text-gray-400">Humidity</span>
          <span className="font-semibold text-gray-900 dark:text-gray-100">
            {weather.humidity}%
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600 dark:text-gray-400">Wind Speed</span>
          <span className="font-semibold text-gray-900 dark:text-gray-100">
            {weather.windSpeed} m/s
          </span>
        </div>
      </div>
    </div>
  );
}

