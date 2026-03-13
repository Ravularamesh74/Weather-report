import { currentWeather } from "@/data/weatherData";
import WeatherIcon from "./WeatherIcon";
import { ArrowDown, ArrowUp, Droplets, Eye, Gauge, Wind } from "lucide-react";

const CurrentConditions = () => {
  const w = currentWeather;

  return (
    <div className="glass-card p-6 glow-primary">
      <div className="flex items-start justify-between mb-1">
        <div>
          <h1 className="text-lg font-semibold text-foreground">{w.location}</h1>
          <p className="text-xs text-muted-foreground mt-0.5">Updated just now</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground">Feels like</p>
          <p className="font-mono text-sm font-semibold text-foreground">{w.feelsLike}°F</p>
        </div>
      </div>

      <div className="flex items-center gap-6 my-6">
        <div className="flex items-center gap-4">
          <WeatherIcon condition={w.condition} size={56} className="text-primary" />
          <div>
            <p className="font-mono text-6xl font-bold text-foreground leading-none">{w.temp}°</p>
            <p className="text-sm text-muted-foreground mt-1">{w.condition}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Stat icon={<ArrowUp size={14} />} label="High" value={`${w.high}°F`} />
        <Stat icon={<ArrowDown size={14} />} label="Low" value={`${w.low}°F`} />
        <Stat icon={<Droplets size={14} />} label="Humidity" value={`${w.humidity}%`} />
        <Stat icon={<Wind size={14} />} label="Wind" value={`${w.windSpeed} mph`} />
        <Stat icon={<Eye size={14} />} label="Visibility" value={`${w.visibility} mi`} />
        <Stat icon={<Gauge size={14} />} label="Pressure" value={`${w.pressure} hPa`} />
        <Stat icon={<Droplets size={14} />} label="Dew Point" value={`${w.dewPoint}°F`} />
        <Stat icon={<Wind size={14} />} label="Gusts" value={`${w.windGust} mph`} />
      </div>
    </div>
  );
};

const Stat = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="bg-muted/40 rounded-lg px-3 py-2.5">
    <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
      {icon}
      <span className="text-[11px] uppercase tracking-wider">{label}</span>
    </div>
    <p className="font-mono text-sm font-semibold text-foreground">{value}</p>
  </div>
);

export default CurrentConditions;
