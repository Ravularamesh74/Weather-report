/* ---------- Weather Types ---------- */

export type WeatherCondition =
  | "sunny"
  | "clear"
  | "partly-cloudy"
  | "cloudy"
  | "rain"
  | "drizzle"
  | "snow"
  | "thunder"
  | "windy"
  | "night";

export interface AirQuality {
  index: number;
  label: string;
  pm25: number;
  pm10: number;
  o3: number;
  no2: number;
}

export interface CurrentWeather {
  location: string;
  temp: number;
  feelsLike: number;
  condition: string;

  high: number;
  low: number;

  humidity: number;
  dewPoint: number;
  pressure: number;
  visibility: number;

  uvIndex: number;

  windSpeed: number;
  windDirection: string;
  windGust: number;

  sunrise: string;
  sunset: string;

  airQuality: AirQuality;
}

export interface HourlyForecast {
  time: string;
  temp: number;
  icon: WeatherCondition;
  precipitation: number;
  wind: number;
}

export interface DailyForecast {
  day: string;
  date: string;
  high: number;
  low: number;
  icon: WeatherCondition;
  precipitation: number;
  condition: string;
}

export interface SavedLocation {
  id: string;
  name: string;
  country: string;
  temp: number;
  condition: string;
}

/* ---------- Mock Data ---------- */

export const currentWeather: CurrentWeather = {
  location: "San Francisco, CA",
  temp: 68,
  feelsLike: 65,
  condition: "partly-cloudy",

  high: 72,
  low: 58,

  humidity: 62,
  dewPoint: 54,
  pressure: 1013.2,
  visibility: 10,

  uvIndex: 6,

  windSpeed: 12,
  windDirection: "NW",
  windGust: 18,

  sunrise: "6:42 AM",
  sunset: "7:18 PM",

  airQuality: {
    index: 42,
    label: "Good",
    pm25: 8.3,
    pm10: 12.1,
    o3: 34,
    no2: 18,
  },
};

export const hourlyForecast: HourlyForecast[] = [
  { time: "Now", temp: 68, icon: "partly-cloudy", precipitation: 5, wind: 12 },
  { time: "1 PM", temp: 70, icon: "partly-cloudy", precipitation: 8, wind: 14 },
  { time: "2 PM", temp: 71, icon: "sunny", precipitation: 3, wind: 11 },
  { time: "3 PM", temp: 72, icon: "sunny", precipitation: 2, wind: 10 },
  { time: "4 PM", temp: 71, icon: "partly-cloudy", precipitation: 10, wind: 13 },
  { time: "5 PM", temp: 69, icon: "partly-cloudy", precipitation: 15, wind: 15 },
  { time: "6 PM", temp: 67, icon: "cloudy", precipitation: 22, wind: 16 },
  { time: "7 PM", temp: 65, icon: "cloudy", precipitation: 35, wind: 14 },
  { time: "8 PM", temp: 63, icon: "rain", precipitation: 55, wind: 12 },
  { time: "9 PM", temp: 62, icon: "rain", precipitation: 65, wind: 11 },
  { time: "10 PM", temp: 61, icon: "rain", precipitation: 72, wind: 10 },
  { time: "11 PM", temp: 60, icon: "rain", precipitation: 60, wind: 9 },
];

export const dailyForecast: DailyForecast[] = [
  { day: "Today", date: "Mar 13", high: 72, low: 58, icon: "partly-cloudy", precipitation: 35, condition: "PM Showers" },
  { day: "Fri", date: "Mar 14", high: 65, low: 55, icon: "rain", precipitation: 80, condition: "Rain" },
  { day: "Sat", date: "Mar 15", high: 63, low: 52, icon: "rain", precipitation: 90, condition: "Heavy Rain" },
  { day: "Sun", date: "Mar 16", high: 66, low: 54, icon: "cloudy", precipitation: 40, condition: "Mostly Cloudy" },
  { day: "Mon", date: "Mar 17", high: 69, low: 56, icon: "partly-cloudy", precipitation: 20, condition: "Partly Cloudy" },
  { day: "Tue", date: "Mar 18", high: 71, low: 57, icon: "sunny", precipitation: 5, condition: "Sunny" },
];

export const savedLocations: SavedLocation[] = [
  { id: "1", name: "San Francisco", country: "US", temp: 68, condition: "partly-cloudy" },
  { id: "2", name: "New York", country: "US", temp: 55, condition: "cloudy" },
  { id: "3", name: "London", country: "UK", temp: 48, condition: "rain" },
  { id: "4", name: "Tokyo", country: "JP", temp: 62, condition: "clear" },
  { id: "5", name: "Sydney", country: "AU", temp: 77, condition: "sunny" },
  { id: "6", name: "Toronto", country: "CA", temp: 52, condition: "cloudy" },
  { id: "7", name: "Mumbai", country: "IN", temp: 84, condition: "sunny" },
];

export const precipitationData = hourlyForecast.map(h => ({
  time: h.time,
  probability: h.precipitation,
  temp: h.temp,
}));
