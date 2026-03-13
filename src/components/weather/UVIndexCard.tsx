import { currentWeather } from "@/data/weatherData";
import { Sun } from "lucide-react";

const UVIndexCard = () => {
  const uv = currentWeather.uvIndex;

  const getLabel = (i: number) => {
    if (i <= 2) return "Low";
    if (i <= 5) return "Moderate";
    if (i <= 7) return "High";
    if (i <= 10) return "Very High";
    return "Extreme";
  };

  const getColor = (i: number) => {
    if (i <= 2) return "text-green-500";
    if (i <= 5) return "text-yellow-500";
    if (i <= 7) return "text-orange-500";
    if (i <= 10) return "text-red-500";
    return "text-purple-500";
  };

  const getAdvice = (i: number) => {
    if (i <= 2) return "Minimal risk. Sunglasses recommended.";
    if (i <= 5) return "Use SPF 30+ sunscreen when outdoors.";
    if (i <= 7) return "Seek shade midday and wear protection.";
    if (i <= 10) return "High exposure risk. Limit sun time.";
    return "Extreme UV. Avoid sun exposure.";
  };

  const progress = (uv / 11) * 100;

  return (
    <div className="glass-card p-5">

      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Sun size={14} className="text-muted-foreground" />
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          UV Index
        </h2>
      </div>

      {/* Main value */}
      <div className="flex items-end gap-3 mb-4">
        <span className={`font-mono text-4xl font-bold ${getColor(uv)}`}>
          {uv}
        </span>

        <span className={`text-sm font-medium mb-1 ${getColor(uv)}`}>
          {getLabel(uv)}
        </span>
      </div>

      {/* UV scale bar */}
      <div className="relative w-full h-2 rounded-full bg-muted/60 overflow-hidden">

        <div
          className="h-full rounded-full bg-gradient-to-r from-green-500 via-yellow-400 via-orange-400 to-red-500"
          style={{ width: `${progress}%` }}
        />

        {/* marker */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-2 h-4 bg-white rounded-sm shadow"
          style={{ left: `${progress}%` }}
        />

      </div>

      {/* UV scale numbers */}
      <div className="flex justify-between text-[10px] text-muted-foreground mt-2">
        <span>0</span>
        <span>3</span>
        <span>6</span>
        <span>8</span>
        <span>11+</span>
      </div>

      {/* Advice */}
      <p className="text-xs text-muted-foreground mt-4">
        {getAdvice(uv)}
      </p>

    </div>
  );
};

export default UVIndexCard;