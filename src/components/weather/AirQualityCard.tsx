import { currentWeather } from "@/data/weatherData";
import { Wind } from "lucide-react";

const AirQualityCard = () => {
  const aq = currentWeather.airQuality;

  const getColor = (index: number) => {
    if (index <= 50) return "text-success";
    if (index <= 100) return "text-accent";
    return "text-destructive";
  };

  return (
    <div className="glass-card p-5">
      <div className="flex items-center gap-2 mb-4">
        <Wind size={14} className="text-muted-foreground" />
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Air Quality
        </h2>
      </div>
      <div className="flex items-end gap-3 mb-4">
        <span className={`font-mono text-4xl font-bold ${getColor(aq.index)}`}>{aq.index}</span>
        <span className={`text-sm font-medium mb-1 ${getColor(aq.index)}`}>{aq.label}</span>
      </div>
      <div className="w-full h-2 rounded-full bg-muted/60 mb-4 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-success via-accent to-destructive"
          style={{ width: `${(aq.index / 300) * 100}%` }}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <PollutantStat label="PM2.5" value={aq.pm25} unit="µg/m³" />
        <PollutantStat label="PM10" value={aq.pm10} unit="µg/m³" />
        <PollutantStat label="O₃" value={aq.o3} unit="ppb" />
        <PollutantStat label="NO₂" value={aq.no2} unit="ppb" />
      </div>
    </div>
  );
};

const PollutantStat = ({ label, value, unit }: { label: string; value: number; unit: string }) => (
  <div className="bg-muted/30 rounded-lg px-3 py-2">
    <p className="text-[11px] text-muted-foreground uppercase tracking-wider">{label}</p>
    <p className="font-mono text-sm font-semibold text-foreground">
      {value} <span className="text-[10px] text-muted-foreground font-normal">{unit}</span>
    </p>
  </div>
);

export default AirQualityCard;
