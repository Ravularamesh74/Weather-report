import { currentWeather } from "@/data/weatherData";
import { Sunrise, Sunset } from "lucide-react";

const SunriseSunset = () => {
  const w = currentWeather;

  // Simple arc progress (assume daytime ~6am-7pm = 13 hours, current ~12pm = ~46%)
  const dayProgress = 46;

  return (
    <div className="glass-card p-5">
      <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
        Sunrise & Sunset
      </h2>
      <div className="relative h-20 mb-4">
        <svg viewBox="0 0 200 80" className="w-full h-full" preserveAspectRatio="xMidYMax meet">
          <defs>
            <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(45, 93%, 58%)" stopOpacity={0.3} />
              <stop offset="50%" stopColor="hsl(45, 93%, 58%)" stopOpacity={0.8} />
              <stop offset="100%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.3} />
            </linearGradient>
          </defs>
          {/* Background arc */}
          <path
            d="M 20 70 Q 100 -10 180 70"
            fill="none"
            stroke="hsl(222, 30%, 22%)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Progress arc */}
          <path
            d="M 20 70 Q 100 -10 180 70"
            fill="none"
            stroke="url(#arcGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="220"
            strokeDashoffset={220 - (220 * dayProgress) / 100}
          />
          {/* Sun dot */}
          <circle
            cx={20 + (160 * dayProgress) / 100}
            cy={70 - Math.sin((dayProgress / 100) * Math.PI) * 75}
            r="5"
            fill="hsl(45, 93%, 58%)"
            className="animate-pulse-glow"
          />
        </svg>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Sunrise size={16} className="text-accent" />
          <div>
            <p className="text-[11px] text-muted-foreground uppercase">Sunrise</p>
            <p className="font-mono text-sm font-semibold text-foreground">{w.sunrise}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Sunset size={16} className="text-primary" />
          <div className="text-right">
            <p className="text-[11px] text-muted-foreground uppercase">Sunset</p>
            <p className="font-mono text-sm font-semibold text-foreground">{w.sunset}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunriseSunset;
