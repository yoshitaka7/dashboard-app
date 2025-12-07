export type WidgetType = 'clock' | 'weather' | 'currency' | 'news';

export interface Widget {
  id: string;
  type: WidgetType;
  order: number;
}

export interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
}

export interface CurrencyData {
  base: string;
  target: string;
  rate: number;
  lastUpdated: string;
}

export interface NewsItem {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  source: string;
}

