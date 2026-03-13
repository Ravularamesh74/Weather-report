import { Search, MapPin, X } from "lucide-react";
import { useState, useEffect } from "react";

type Suggestion = {
  name: string;
  country: string;
};

const mockSuggestions: Suggestion[] = [
  { name: "Hyderabad", country: "India" },
  { name: "London", country: "UK" },
  { name: "New York", country: "USA" },
  { name: "Tokyo", country: "Japan" }
];

const SearchBar = ({ onSelect }: { onSelect?: (city: string) => void }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [open, setOpen] = useState(false);

  /* debounce search */
  useEffect(() => {
    const timer = setTimeout(() => {

      if (!query) {
        setSuggestions([]);
        return;
      }

      const filtered = mockSuggestions.filter((s) =>
        s.name.toLowerCase().includes(query.toLowerCase())
      );

      setSuggestions(filtered);
      setOpen(true);

    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const handleSelect = (city: string) => {
    setQuery(city);
    setOpen(false);
    onSelect?.(city);
  };

  const detectLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log("User location:", pos.coords);
    });
  };

  return (
    <div className="relative">

      {/* Search icon */}
      <Search
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
      />

      {/* Input */}
      <input
        type="text"
        placeholder="Search location..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full bg-muted/50 border border-border/50 rounded-lg pl-9 pr-14 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
      />

      {/* Clear button */}
      {query && (
        <button
          onClick={() => setQuery("")}
          className="absolute right-9 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-muted"
        >
          <X size={14} />
        </button>
      )}

      {/* Detect location */}
      <button
        onClick={detectLocation}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-muted transition-colors"
      >
        <MapPin size={16} className="text-primary" />
      </button>

      {/* Suggestions dropdown */}
      {open && suggestions.length > 0 && (
        <div className="absolute mt-2 w-full rounded-lg border border-border bg-background shadow-lg z-20">

          {suggestions.map((s, i) => (
            <button
              key={i}
              onClick={() => handleSelect(s.name)}
              className="w-full text-left px-3 py-2 hover:bg-muted/50 flex justify-between text-sm"
            >

              <span>{s.name}</span>
              <span className="text-muted-foreground text-xs">
                {s.country}
              </span>

            </button>
          ))}

        </div>
      )}

    </div>
  );
};

export default SearchBar;