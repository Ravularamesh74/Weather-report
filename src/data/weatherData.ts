export interface HourlyForecast {
  time: string;
  temp: number;
  icon: string;
  precipitation: number;
  wind: number;
}

export interface DailyForecast {
  day: string;
  date: string;
  high: number;
  low: number;
  icon: string;
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

export const currentWeather = {
  location: "San Francisco, CA",
  temp: 68,
  feelsLike: 65,
  condition: "Partly Cloudy",
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
  { time: "12 AM", temp: 59, icon: "cloudy", precipitation: 40, wind: 8 },
  { time: "1 AM", temp: 58, icon: "cloudy", precipitation: 25, wind: 7 },
  { time: "2 AM", temp: 58, icon: "clear", precipitation: 10, wind: 6 },
  { time: "3 AM", temp: 57, icon: "clear", precipitation: 5, wind: 5 },
  { time: "4 AM", temp: 57, icon: "clear", precipitation: 3, wind: 5 },
  { time: "5 AM", temp: 56, icon: "clear", precipitation: 2, wind: 4 },
  { time: "6 AM", temp: 56, icon: "partly-cloudy", precipitation: 5, wind: 6 },
  { time: "7 AM", temp: 58, icon: "partly-cloudy", precipitation: 8, wind: 8 },
  { time: "8 AM", temp: 60, icon: "sunny", precipitation: 5, wind: 10 },
  { time: "9 AM", temp: 63, icon: "sunny", precipitation: 3, wind: 11 },
  { time: "10 AM", temp: 65, icon: "sunny", precipitation: 2, wind: 12 },
  { time: "11 AM", temp: 67, icon: "partly-cloudy", precipitation: 5, wind: 12 },
];

export const dailyForecast: DailyForecast[] = [
  { day: "Today", date: "Mar 13", high: 72, low: 58, icon: "partly-cloudy", precipitation: 35, condition: "PM Showers" },
  { day: "Fri", date: "Mar 14", high: 65, low: 55, icon: "rain", precipitation: 80, condition: "Rain" },
  { day: "Sat", date: "Mar 15", high: 63, low: 52, icon: "rain", precipitation: 90, condition: "Heavy Rain" },
  { day: "Sun", date: "Mar 16", high: 66, low: 54, icon: "cloudy", precipitation: 40, condition: "Mostly Cloudy" },
  { day: "Mon", date: "Mar 17", high: 69, low: 56, icon: "partly-cloudy", precipitation: 20, condition: "Partly Cloudy" },
  { day: "Tue", date: "Mar 18", high: 71, low: 57, icon: "sunny", precipitation: 5, condition: "Sunny" },
  { day: "Wed", date: "Mar 19", high: 73, low: 59, icon: "sunny", precipitation: 3, condition: "Clear" },
  { day: "Thu", date: "Mar 20", high: 70, low: 56, icon: "partly-cloudy", precipitation: 15, condition: "Partly Cloudy" },
  { day: "Fri", date: "Mar 21", high: 68, low: 55, icon: "cloudy", precipitation: 30, condition: "Overcast" },
  { day: "Sat", date: "Mar 22", high: 67, low: 54, icon: "rain", precipitation: 60, condition: "Showers" },
];

export const savedLocations: SavedLocation[] = [
  { id: "1", name: "San Francisco", country: "US", temp: 68, condition: "Partly Cloudy" },
  { id: "2", name: "New York", country: "US", temp: 55, condition: "Overcast" },
  { id: "3", name: "London", country: "UK", temp: 48, condition: "Rain" },
  { id: "4", name: "Tokyo", country: "JP", temp: 62, condition: "Clear" },
  { id: "5", name: "Sydney", country: "AU", temp: 77, condition: "Sunny" },
];

export const precipitationData = hourlyForecast.map(h => ({
  time: h.time,
  probability: h.precipitation,
  temp: h.temp,
}));
