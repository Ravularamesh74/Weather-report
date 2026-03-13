import { currentWeather } from "@/data/weatherData";
import { Sun } from "lucide-react";

const UVIndexCard = () => {
  const uv = currentWeather.uvIndex;

  const getLabel = (index: number) => {
    if (index <= 2) return "Low";
    if (index <= 5) return "Moderate";
    if (index <= 7) return "High";
    if (index <= 10) return "Very High";
    return "Extreme";
  };

  const getColor = (index: number) => {
    if (index <= 2) return "text-success";
    if (index <= 5) return "text-accent";
    if (index <= 7) return "text-accent";
    return "text-destructive";
  };

  return (
    <div className="glass-card p-5">
      <div className="flex items-center gap-2 mb-4">
        <Sun size={14} className="text-muted-foreground" />
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          UV Index
        </h2>
      </div>
      <div className="flex items-end gap-3 mb-3">
        <span className={`font-mono text-4xl font-bold ${getColor(uv)}`}>{uv}</span>
        <span className={`text-sm font-medium mb-1 ${getColor(uv)}`}>{getLabel(uv)}</span>
      </div>
      <div className="w-full h-2 rounded-full bg-muted/60 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-success via-accent to-destructive"
          style={{ width: `${(uv / 11) * 100}%` }}
        />
      </div>
      <p className="text-xs text-muted-foreground mt-3">
        {uv >= 6
          ? "Wear sunscreen, hat, and sunglasses."
          : "Low risk. Sunscreen recommended for extended exposure."}
      </p>
    </div>
  );
};

export default UVIndexCard;
