import { currentWeather } from "@/data/weatherData";
import { Navigation, Wind } from "lucide-react";

const WindCard = () => {
  const w = currentWeather;

  const dirToDeg: Record<string, number> = {
    N: 0, NE: 45, E: 90, SE: 135, S: 180, SW: 225, W: 270, NW: 315,
  };

  return (
    <div className="glass-card p-5">
      <div className="flex items-center gap-2 mb-4">
        <Wind size={14} className="text-muted-foreground" />
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Wind
        </h2>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative w-24 h-24">
          {/* Compass */}
          <div className="absolute inset-0 rounded-full border-2 border-border/40" />
          <div className="absolute inset-2 rounded-full border border-border/20" />
          {["N", "E", "S", "W"].map((dir, i) => (
            <span
              key={dir}
              className="absolute text-[10px] text-muted-foreground font-medium"
              style={{
                top: i === 0 ? "2px" : i === 2 ? "auto" : "50%",
                bottom: i === 2 ? "2px" : "auto",
                left: i === 3 ? "4px" : i === 1 ? "auto" : "50%",
                right: i === 1 ? "4px" : "auto",
                transform:
                  i === 0 || i === 2
                    ? "translateX(-50%)"
                    : "translateY(-50%)",
              }}
            >
              {dir}
            </span>
          ))}
          <div
            className="absolute inset-0 flex items-center justify-center"
          >
            <Navigation
              size={20}
              className="text-primary transition-transform"
              style={{ transform: `rotate(${dirToDeg[w.windDirection] || 0}deg)` }}
              fill="hsl(217, 91%, 60%)"
            />
          </div>
        </div>
        <div className="space-y-3">
          <div>
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider">Speed</p>
            <p className="font-mono text-2xl font-bold text-foreground">
              {w.windSpeed} <span className="text-sm text-muted-foreground font-normal">mph</span>
            </p>
          </div>
          <div>
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider">Gusts</p>
            <p className="font-mono text-lg font-semibold text-foreground">
              {w.windGust} <span className="text-sm text-muted-foreground font-normal">mph</span>
            </p>
          </div>
          <div>
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider">Direction</p>
            <p className="font-mono text-sm font-semibold text-foreground">{w.windDirection}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindCard;
