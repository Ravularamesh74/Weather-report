import { hourlyForecast } from "@/data/weatherData";
import WeatherIcon from "./WeatherIcon";
import { Droplets } from "lucide-react";

const HourlyForecast = () => {

  const minTemp = Math.min(...hourlyForecast.map(h => h.temp));
  const maxTemp = Math.max(...hourlyForecast.map(h => h.temp));
  const range = maxTemp - minTemp || 1;

  return (
    <div className="glass-card p-5">

      <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
        24-Hour Forecast
      </h2>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">

        {hourlyForecast.map((h, i) => {

          const height = ((h.temp - minTemp) / range) * 40 + 10;

          return (
            <div
              key={i}
              aria-label={`Forecast for ${h.time}`}
              className={`flex flex-col items-center gap-2 min-w-[64px] py-3 px-2 rounded-lg transition-all
              ${
                i === 0
                  ? "bg-primary/10 border border-primary/20"
                  : "hover:bg-muted/40"
              }`}
            >

              {/* Time */}
              <span className="text-[11px] text-muted-foreground font-medium">
                {h.time}
              </span>

              {/* Icon */}
              <WeatherIcon
                condition={h.icon}
                size={18}
                className="text-foreground/80"
              />

              {/* Temperature */}
              <span className="font-mono text-sm font-semibold text-foreground">
                {h.temp}°
              </span>

              {/* Temperature bar */}
              <div className="w-2 rounded-full bg-muted h-10 relative overflow-hidden">
                <div
                  className="absolute bottom-0 w-full rounded-full bg-gradient-to-t from-primary to-primary/40"
                  style={{ height }}
                />
              </div>

              {/* Rain */}
              <div className="flex items-center gap-0.5">
                <Droplets size={10} className="text-primary/60" />
                <span className="text-[10px] font-mono text-muted-foreground">
                  {h.precipitation}%
                </span>
              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default HourlyForecast;