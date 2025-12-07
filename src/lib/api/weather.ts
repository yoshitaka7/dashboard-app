import { WeatherData } from "@/types";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./config";

export async function fetchWeather(
  city: string = "Tokyo"
): Promise<WeatherData> {
  try {
    if (!WEATHER_API_KEY) {
      return {
        location: city,
        temperature: 22,
        condition: "Clear",
        humidity: 65,
        windSpeed: 10,
      };
    }

    const response = await fetch(
      `${WEATHER_API_URL}?q=${city}&appid=${WEATHER_API_KEY}&units=metric&lang=en`
    );

    if (!response.ok) {
      throw new Error("Weather API error");
    }

    const data = await response.json();
    return {
      location: data.name,
      temperature: Math.round(data.main.temp),
      condition: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: data.wind?.speed || 0,
    };
  } catch (error) {
    console.error("Weather fetch error:", error);
    // Fallback data
    return {
      location: city,
      temperature: 22,
      condition: "Data fetch error",
      humidity: 65,
      windSpeed: 10,
    };
  }
}
