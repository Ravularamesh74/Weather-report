import SearchBar from "@/components/weather/SearchBar";
import SavedLocations from "@/components/weather/SavedLocations";
import CurrentConditions from "@/components/weather/CurrentConditions";
import HourlyForecast from "@/components/weather/HourlyForecast";
import DailyForecast from "@/components/weather/DailyForecast";
import TemperatureChart from "@/components/weather/TemperatureChart";
import AirQualityCard from "@/components/weather/AirQualityCard";
import UVIndexCard from "@/components/weather/UVIndexCard";
import WindCard from "@/components/weather/WindCard";
import SunriseSunset from "@/components/weather/SunriseSunset";
import WeatherAlerts from "@/components/weather/WeatherAlerts";
import RadarPreview from "@/components/weather/RadarPreview";
import { currentWeather } from "@/data/weatherData";
import { Cloud } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="border-b border-border/50 bg-card/40 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cloud size={22} className="text-primary" />
            <span className="font-mono text-sm font-bold tracking-tight text-foreground">
              WEATHER<span className="text-primary">HQ</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-muted-foreground">
              Last updated: 12:00 PM PST
            </span>
            <div className="w-2 h-2 rounded-full bg-success animate-pulse-glow" />
          </div>
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left Column */}
          <aside className="lg:col-span-2 space-y-4">
            <SearchBar />
            <SavedLocations />
          </aside>

          {/* Center Column */}
          <main className="lg:col-span-7 space-y-4">
            <WeatherAlerts />
            <CurrentConditions
              data={{
                location: currentWeather.location,
                temperature: currentWeather.temp,
                feelsLike: currentWeather.feelsLike,
                condition: currentWeather.condition,
                icon: "partly-cloudy", // fallback string
                humidity: currentWeather.humidity,
                windSpeed: currentWeather.windSpeed,
                pressure: currentWeather.pressure,
                visibility: currentWeather.visibility,
                uvIndex: currentWeather.uvIndex,
                sunrise: currentWeather.sunrise,
                sunset: currentWeather.sunset,
              }}
            />
            <HourlyForecast />
            <TemperatureChart />
            <DailyForecast />
          </main>

          {/* Right Column */}
          <aside className="lg:col-span-3 space-y-4">
            <RadarPreview />
            <AirQualityCard
              aqi={currentWeather.airQuality.index}
              location={currentWeather.location}
              pollutants={{
                pm2_5: currentWeather.airQuality.pm25,
                pm10: currentWeather.airQuality.pm10,
                no2: currentWeather.airQuality.no2,
                so2: 0.5, // Mocking missing values
                o3: currentWeather.airQuality.o3,
                co: 0.2,   // Mocking missing values
              }}
            />
            <UVIndexCard />
            <WindCard />
            <SunriseSunset />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Index;
