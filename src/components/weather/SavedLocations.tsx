import { savedLocations } from "@/data/weatherData";
import WeatherIcon from "./WeatherIcon";
import { Star, Trash2, MapPin } from "lucide-react";
import { useState } from "react";

const SavedLocations = () => {

  const [favorites, setFavorites] = useState<string[]>(["1"]);
  const [active, setActive] = useState("1");

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((f) => f !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="space-y-1.5">

      {/* Header */}
      <div className="flex items-center justify-between px-1 mb-3">

        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Saved Locations
        </h3>

        <MapPin size={14} className="text-accent" />

      </div>

      {savedLocations.map((loc) => {

        const isFavorite = favorites.includes(loc.id);
        const isActive = active === loc.id;

        return (
          <div
            key={loc.id}
            className={`group w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all
            ${
              isActive
                ? "bg-primary/10 border border-primary/20"
                : "hover:bg-muted/50"
            }`}
          >

            {/* Location Info */}
            <button
              onClick={() => setActive(loc.id)}
              className="flex items-center gap-2.5 text-left flex-1"
            >

              <WeatherIcon
                condition={loc.condition}
                size={18}
                className="text-muted-foreground"
              />

              <div>

                <p className="text-sm font-medium text-foreground">
                  {loc.name}
                </p>

                <p className="text-[11px] text-muted-foreground">
                  {loc.condition}
                </p>

              </div>

            </button>

            {/* Temperature */}
            <span className="font-mono text-sm font-semibold text-foreground mr-2">
              {loc.temp}°
            </span>

            {/* Actions */}
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">

              {/* Favorite */}
              <button
                onClick={() => toggleFavorite(loc.id)}
                className="p-1 rounded-md hover:bg-muted"
              >
                <Star
                  size={14}
                  className={
                    isFavorite
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-muted-foreground"
                  }
                />
              </button>

              {/* Delete */}
              <button
                className="p-1 rounded-md hover:bg-muted"
              >
                <Trash2
                  size={14}
                  className="text-muted-foreground"
                />
              </button>

            </div>

          </div>
        );
      })}

    </div>
  );
};

export default SavedLocations;