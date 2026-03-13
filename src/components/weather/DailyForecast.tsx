import { dailyForecast } from "@/data/weatherData";
import WeatherIcon from "./WeatherIcon";
import { Droplets } from "lucide-react";

const DailyForecast = () => {

  const minTemp = Math.min(...dailyForecast.map(d => d.low));
  const maxTemp = Math.max(...dailyForecast.map(d => d.high));

  const range = maxTemp - minTemp;

  return (
    <div className="glass-card p-5">

      <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
        10-Day Forecast
      </h2>

      <div className="space-y-1">

        {dailyForecast.map((d, i) => {

          const start = ((d.low - minTemp) / range) * 100;
          const width = ((d.high - d.low) / range) * 100;

          return (
            <div
              key={i}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all 
                ${i === 0 
                  ? "bg-primary/10 border border-primary/20" 
                  : "hover:bg-muted/40"}
              `}
              aria-label={`${d.day} weather forecast`}
            >

              {/* Day */}
              <span className="text-sm font-medium text-foreground w-12">
                {d.day}
              </span>

              {/* Date */}
              <span className="text-xs text-muted-foreground w-14">
                {d.date}
              </span>

              {/* Weather Icon */}
              <WeatherIcon
                condition={d.icon}
                size={18}
                className="text-foreground/70"
              />

              {/* Condition */}
              <span className="text-xs text-muted-foreground flex-1 ml-2">
                {d.condition}
              </span>

              {/* Rain */}
              <div className="flex items-center gap-1 w-12 justify-end">
                <Droplets size={10} className="text-primary/60" />
                <span className="text-[11px] font-mono text-muted-foreground">
                  {d.precipitation}%
                </span>
              </div>

              {/* Temperature Range */}
              <div className="flex items-center gap-1 w-24 justify-end">

                <span className="font-mono text-sm font-semibold text-foreground">
                  {d.high}°
                </span>

                <div className="w-14 h-1.5 rounded-full bg-muted mx-1 relative overflow-hidden">

                  <div
                    className="absolute inset-y-0 rounded-full bg-gradient-to-r from-primary/60 to-primary"
                    style={{
                      left: `${start}%`,
                      width: `${width}%`
                    }}
                  />

                </div>

                <span className="font-mono text-sm text-muted-foreground">
                  {d.low}°
                </span>

              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DailyForecast;