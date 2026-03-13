import { Layers, Maximize2 } from "lucide-react";

const RadarPreview = () => {
  return (
    <div className="glass-card p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Layers size={14} className="text-muted-foreground" />
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Radar
          </h2>
        </div>
        <button className="p-1.5 rounded-md hover:bg-muted/50 transition-colors">
          <Maximize2 size={14} className="text-muted-foreground" />
        </button>
      </div>
      <div className="relative aspect-video rounded-lg overflow-hidden bg-muted/30 border border-border/30">
        {/* Simulated radar grid */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute w-full border-t border-primary/20"
              style={{ top: `${(i + 1) * 12.5}%` }}
            />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute h-full border-l border-primary/20"
              style={{ left: `${(i + 1) * 12.5}%` }}
            />
          ))}
        </div>

        {/* Simulated precipitation blobs */}
        <div className="absolute top-[30%] left-[20%] w-16 h-12 rounded-full bg-primary/20 blur-xl" />
        <div className="absolute top-[40%] left-[35%] w-20 h-14 rounded-full bg-primary/30 blur-xl" />
        <div className="absolute top-[50%] left-[55%] w-12 h-10 rounded-full bg-info/20 blur-xl" />
        <div className="absolute top-[25%] left-[60%] w-8 h-8 rounded-full bg-success/15 blur-lg" />

        {/* Center marker */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-2 h-2 rounded-full bg-primary ring-2 ring-primary/30" />
        </div>

        {/* Legend */}
        <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded-md px-2 py-1">
          <div className="flex gap-0.5">
            {["bg-success/60", "bg-primary/60", "bg-accent/60", "bg-destructive/60"].map((c, i) => (
              <div key={i} className={`w-3 h-1.5 rounded-sm ${c}`} />
            ))}
          </div>
          <span className="text-[9px] text-muted-foreground ml-1">Light → Heavy</span>
        </div>
      </div>
    </div>
  );
};

export default RadarPreview;
