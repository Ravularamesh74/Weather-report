import { hourlyForecast } from "@/data/weatherData";
import WeatherIcon from "./WeatherIcon";
import { Droplets } from "lucide-react";

const HourlyForecast = () => {
  return (
    <div className="glass-card p-5">
      <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
        24-Hour Forecast
      </h2>
      <div className="flex gap-1 overflow-x-auto pb-2 scrollbar-hide">
        {hourlyForecast.map((h, i) => (
          <div
            key={i}
            className={`flex flex-col items-center gap-1.5 min-w-[56px] py-3 px-2 rounded-lg transition-all ${
              i === 0 ? "bg-primary/10 border border-primary/20" : "hover:bg-muted/40"
            }`}
          >
            <span className="text-[11px] text-muted-foreground font-medium">{h.time}</span>
            <WeatherIcon condition={h.icon} size={18} className="text-foreground/80" />
            <span className="font-mono text-sm font-semibold text-foreground">{h.temp}°</span>
            <div className="flex items-center gap-0.5">
              <Droplets size={10} className="text-primary/60" />
              <span className="text-[10px] font-mono text-muted-foreground">{h.precipitation}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
