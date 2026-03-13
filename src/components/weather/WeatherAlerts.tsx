import { AlertTriangle, ChevronRight, Clock } from "lucide-react";
import { useState } from "react";

type Alert = {
  id: string;
  title: string;
  description: string;
  severity: "watch" | "warning" | "advisory";
  time: string;
};

const alerts: Alert[] = [
  {
    id: "1",
    title: "Rain Advisory",
    description:
      "Heavy rain expected Friday evening through Saturday morning. 1–2 inches possible.",
    severity: "advisory",
    time: "Fri 6 PM – Sat 8 AM",
  },
];

const WeatherAlerts = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const getColor = (severity: string) => {
    switch (severity) {
      case "warning":
        return "text-red-500 bg-red-500/10 border-red-500/30";
      case "watch":
        return "text-orange-500 bg-orange-500/10 border-orange-500/30";
      default:
        return "text-accent bg-accent/10 border-accent/30";
    }
  };

  return (
    <div className="space-y-2">

      {alerts.map((alert) => {
        const isOpen = expanded === alert.id;

        return (
          <div
            key={alert.id}
            className={`glass-card p-4 border ${getColor(alert.severity)} transition-all`}
          >

            {/* Header */}
            <button
              onClick={() =>
                setExpanded(isOpen ? null : alert.id)
              }
              className="flex items-center gap-3 w-full text-left"
            >

              <div className="p-2 rounded-lg bg-current/10">
                <AlertTriangle size={16} />
              </div>

              <div className="flex-1 min-w-0">

                <p className="text-sm font-semibold">
                  {alert.title}
                </p>

                <div className="flex items-center gap-1 text-[11px] text-muted-foreground">

                  <Clock size={12} />

                  <span>{alert.time}</span>

                </div>

              </div>

              <ChevronRight
                size={16}
                className={`transition-transform ${
                  isOpen ? "rotate-90" : ""
                }`}
              />

            </button>

            {/* Expanded content */}
            {isOpen && (
              <div className="mt-3 pl-10 text-xs text-muted-foreground leading-relaxed">
                {alert.description}
              </div>
            )}

          </div>
        );
      })}

    </div>
  );
};

export default WeatherAlerts;