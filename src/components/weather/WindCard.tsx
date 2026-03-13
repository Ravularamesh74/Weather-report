import { currentWeather } from "@/data/weatherData";
import { Navigation, Wind } from "lucide-react";

const WindCard = () => {
  const w = currentWeather;

  const dirToDeg: Record<string, number> = {
    N: 0,
    NNE: 22.5,
    NE: 45,
    ENE: 67.5,
    E: 90,
    ESE: 112.5,
    SE: 135,
    SSE: 157.5,
    S: 180,
    SSW: 202.5,
    SW: 225,
    WSW: 247.5,
    W: 270,
    WNW: 292.5,
    NW: 315,
    NNW: 337.5,
  };

  const getWindStrength = (speed: number) => {
    if (speed < 5) return "Calm";
    if (speed < 12) return "Breeze";
    if (speed < 20) return "Windy";
    if (speed < 32) return "Strong";
    return "Storm";
  };

  const strength = getWindStrength(w.windSpeed);

  return (
    <div className="glass-card p-5">

      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Wind size={14} className="text-muted-foreground" />
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Wind
        </h2>
      </div>

      <div className="flex items-center gap-6">

        {/* Compass */}
        <div className="relative w-24 h-24">

          {/* outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-border/40" />

          {/* inner ring */}
          <div className="absolute inset-3 rounded-full border border-border/20" />

          {/* directions */}
          {["N", "E", "S", "W"].map((dir, i) => (
            <span
              key={dir}
              className="absolute text-[10px] text-muted-foreground font-medium"
              style={{
                top: i === 0 ? "4px" : i === 2 ? "auto" : "50%",
                bottom: i === 2 ? "4px" : "auto",
                left: i === 3 ? "6px" : i === 1 ? "auto" : "50%",
                right: i === 1 ? "6px" : "auto",
                transform:
                  i === 0 || i === 2
                    ? "translateX(-50%)"
                    : "translateY(-50%)",
              }}
            >
              {dir}
            </span>
          ))}

          {/* wind arrow */}
          <div className="absolute inset-0 flex items-center justify-center">

            <Navigation
              size={22}
              className="text-primary transition-transform duration-500 ease-out"
              style={{
                transform: `rotate(${dirToDeg[w.windDirection] || 0}deg)`,
              }}
              fill="hsl(217, 91%, 60%)"
            />

          </div>

        </div>

        {/* Data */}
        <div className="space-y-3">

          <div>
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider">
              Speed
            </p>
            <p className="font-mono text-2xl font-bold text-foreground">
              {w.windSpeed}
              <span className="text-sm text-muted-foreground font-normal ml-1">
                mph
              </span>
            </p>
          </div>

          <div>
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider">
              Gusts
            </p>
            <p className="font-mono text-lg font-semibold text-foreground">
              {w.windGust}
              <span className="text-sm text-muted-foreground font-normal ml-1">
                mph
              </span>
            </p>
          </div>

          <div>
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider">
              Direction
            </p>
            <p className="font-mono text-sm font-semibold text-foreground">
              {w.windDirection}
            </p>
          </div>

          <div>
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider">
              Strength
            </p>
            <p className="font-mono text-sm font-semibold text-primary">
              {strength}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default WindCard;