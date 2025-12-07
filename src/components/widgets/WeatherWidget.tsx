"use client";

import { useEffect, useState } from "react";
import { fetchWeather } from "@/lib";
import { WeatherData } from "@/types";
import { WeatherWidgetUI } from "./WeatherWidgetUI";

interface WeatherWidgetProps {
  className?: string;
  city?: string;
}

export function WeatherWidget({
  className = "",
  city = "Tokyo",
}: WeatherWidgetProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWeather = async () => {
      setLoading(true);
      const data = await fetchWeather(city);
      setWeather(data);
      setLoading(false);
    };

    loadWeather();
    const interval = setInterval(loadWeather, 300000); // Update every 5 minutes

    return () => clearInterval(interval);
  }, [city]);

  return <WeatherWidgetUI weather={weather} loading={loading} className={className} />;
}
