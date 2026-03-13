import { precipitationData } from "@/data/weatherData";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const TemperatureChart = () => {
  return (
    <div className="glass-card p-5">
      <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
        Temperature & Precipitation
      </h2>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={precipitationData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="tempGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="precipGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 30%, 22%)" />
            <XAxis
              dataKey="time"
              tick={{ fontSize: 10, fill: "hsl(220, 9%, 64%)" }}
              tickLine={false}
              axisLine={false}
              interval={3}
            />
            <YAxis
              tick={{ fontSize: 10, fill: "hsl(220, 9%, 64%)" }}
              tickLine={false}
              axisLine={false}
              domain={["auto", "auto"]}
            />
            <Tooltip
              contentStyle={{
                background: "hsl(222, 41%, 14%)",
                border: "1px solid hsl(222, 30%, 22%)",
                borderRadius: "8px",
                fontSize: "12px",
                fontFamily: "Roboto Mono",
              }}
              labelStyle={{ color: "hsl(220, 13%, 91%)" }}
            />
            <Area
              type="monotone"
              dataKey="temp"
              stroke="hsl(217, 91%, 60%)"
              fill="url(#tempGrad)"
              strokeWidth={2}
              name="Temp (°F)"
            />
            <Area
              type="monotone"
              dataKey="probability"
              stroke="hsl(199, 89%, 48%)"
              fill="url(#precipGrad)"
              strokeWidth={2}
              name="Precip (%)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center gap-4 mt-3 justify-center">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-0.5 rounded-full bg-primary" />
          <span className="text-[11px] text-muted-foreground">Temperature</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-0.5 rounded-full bg-info" />
          <span className="text-[11px] text-muted-foreground">Precipitation</span>
        </div>
      </div>
    </div>
  );
};

export default TemperatureChart;
