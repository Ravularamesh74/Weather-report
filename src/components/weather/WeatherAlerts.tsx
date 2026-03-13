import { AlertTriangle, ChevronRight } from "lucide-react";

const WeatherAlerts = () => {
  return (
    <div className="glass-card p-4 border-accent/30">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-accent/10">
          <AlertTriangle size={16} className="text-accent" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-accent">Rain Advisory</p>
          <p className="text-xs text-muted-foreground truncate">
            Heavy rain expected Friday evening through Saturday morning. 1-2 inches possible.
          </p>
        </div>
        <ChevronRight size={16} className="text-muted-foreground shrink-0" />
      </div>
    </div>
  );
};

export default WeatherAlerts;
