import { savedLocations } from "@/data/weatherData";
import WeatherIcon from "./WeatherIcon";
import { Star } from "lucide-react";

const SavedLocations = () => {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between px-1 mb-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Saved Locations
        </h3>
        <Star size={14} className="text-accent" />
      </div>
      {savedLocations.map((loc) => (
        <button
          key={loc.id}
          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all text-left ${
            loc.id === "1"
              ? "bg-primary/10 border border-primary/20"
              : "hover:bg-muted/50"
          }`}
        >
          <div className="flex items-center gap-2.5">
            <WeatherIcon condition={loc.condition} size={18} className="text-muted-foreground" />
            <div>
              <p className="text-sm font-medium text-foreground">{loc.name}</p>
              <p className="text-[11px] text-muted-foreground">{loc.condition}</p>
            </div>
          </div>
          <span className="font-mono text-sm font-semibold text-foreground">{loc.temp}°</span>
        </button>
      ))}
    </div>
  );
};

export default SavedLocations;
