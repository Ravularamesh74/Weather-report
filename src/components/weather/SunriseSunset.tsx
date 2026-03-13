import { currentWeather } from "@/data/weatherData";
import { Sunrise, Sunset } from "lucide-react";
import { useMemo } from "react";

const SunriseSunset = () => {
  const w = currentWeather;

  /* Convert time string (e.g., "6:42 AM") to minutes */
  const toMinutes = (time: string) => {
    const [timeStr, period] = time.split(" ");
    const [hStr, mStr] = timeStr.split(":");
    let h = parseInt(hStr, 10);
    const m = parseInt(mStr, 10);
    
    if (period === "PM" && h !== 12) h += 12;
    if (period === "AM" && h === 12) h = 0;
    
    return h * 60 + m;
  };

  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const sunrise = toMinutes(w.sunrise);
  const sunset = toMinutes(w.sunset);

  const dayLength = Math.max(1, sunset - sunrise);

  const progress = useMemo(() => {
    if (currentMinutes < sunrise) return 0;
    if (currentMinutes > sunset) return 100;
    return ((currentMinutes - sunrise) / dayLength) * 100;
  }, [currentMinutes, sunrise, sunset, dayLength]);

  const daylightHours = Math.floor(dayLength / 60);
  const daylightMinutes = dayLength % 60;

  return (
    <div className="glass-card p-5">

      <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
        Sunrise & Sunset
      </h2>

      {/* Arc */}
      <div className="relative h-24 mb-4">

        <svg
          viewBox="0 0 200 80"
          className="w-full h-full"
          preserveAspectRatio="xMidYMax meet"
        >

          <defs>
            <linearGradient id="sunArc" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#facc15" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#facc15" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Background arc */}
          <path
            d="M 20 70 Q 100 -10 180 70"
            fill="none"
            stroke="hsl(222, 30%, 22%)"
            strokeWidth="2"
          />

          {/* Progress arc */}
          <path
            d="M 20 70 Q 100 -10 180 70"
            fill="none"
            stroke="url(#sunArc)"
            strokeWidth="3"
            strokeDasharray="220"
            strokeDashoffset={220 - (220 * progress) / 100}
            strokeLinecap="round"
          />

          {/* Sun */}
          <circle
            cx={20 + (160 * progress) / 100}
            cy={70 - Math.sin((progress / 100) * Math.PI) * 70}
            r="6"
            fill="#facc15"
            className="drop-shadow-md"
          />

        </svg>

      </div>

      {/* Daylight duration */}
      <div className="text-center mb-3">
        <p className="text-[11px] text-muted-foreground uppercase">
          Daylight
        </p>
        <p className="text-sm font-semibold font-mono text-foreground">
          {daylightHours}h {daylightMinutes}m
        </p>
      </div>

      {/* Sunrise / Sunset */}
      <div className="flex justify-between">

        <div className="flex items-center gap-2">
          <Sunrise size={16} className="text-accent" />
          <div>
            <p className="text-[11px] text-muted-foreground uppercase">
              Sunrise
            </p>
            <p className="font-mono text-sm font-semibold text-foreground">
              {w.sunrise}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Sunset size={16} className="text-primary" />
          <div className="text-right">
            <p className="text-[11px] text-muted-foreground uppercase">
              Sunset
            </p>
            <p className="font-mono text-sm font-semibold text-foreground">
              {w.sunset}
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default SunriseSunset;