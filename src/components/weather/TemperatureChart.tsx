import { precipitationData } from "@/data/weatherData";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ReferenceLine
} from "recharts";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload) return null;

  return (
    <div className="bg-background border border-border rounded-lg px-3 py-2 text-xs shadow-lg">
      <p className="font-semibold mb-1">{label}</p>
      <p className="text-primary">Temp: {payload[0]?.value}°</p>
      <p className="text-info">Rain: {payload[1]?.value}%</p>
    </div>
  );
};

const TemperatureChart = () => {
  return (
    <div className="glass-card p-5">

      <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
        Temperature & Precipitation
      </h2>

      <div className="h-52">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart
            data={precipitationData}
            margin={{ top: 10, right: 10, left: -15, bottom: 0 }}
          >

            <defs>

              <linearGradient id="tempGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="rainGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity={0} />
              </linearGradient>

            </defs>

            <CartesianGrid
              strokeDasharray="4 4"
              stroke="rgba(120,120,120,0.15)"
              vertical={false}
            />

            <XAxis
              dataKey="time"
              tick={{ fontSize: 11, fill: "#9ca3af" }}
              tickLine={false}
              axisLine={false}
              interval={3}
            />

            <YAxis
              yAxisId="temp"
              orientation="left"
              tick={{ fontSize: 10, fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              yAxisId="rain"
              orientation="right"
              tick={{ fontSize: 10, fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip content={<CustomTooltip />} />

            {/* Temperature */}
            <Area
              yAxisId="temp"
              type="monotone"
              dataKey="temp"
              stroke="#3b82f6"
              fill="url(#tempGrad)"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 4 }}
              animationDuration={800}
              name="Temperature"
            />

            {/* Precipitation */}
            <Area
              yAxisId="rain"
              type="monotone"
              dataKey="probability"
              stroke="#06b6d4"
              fill="url(#rainGrad)"
              strokeWidth={2}
              dot={false}
              animationDuration={900}
              name="Precipitation"
            />

            {/* Current time indicator */}
            <ReferenceLine
              yAxisId="temp"
              x={precipitationData[0]?.time}
              stroke="#facc15"
              strokeDasharray="3 3"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

      {/* Legend */}

      <div className="flex items-center justify-center gap-6 mt-3 text-[11px]">

        <div className="flex items-center gap-2">
          <div className="w-3 h-[2px] bg-blue-500 rounded-full" />
          <span className="text-muted-foreground">Temperature</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-3 h-[2px] bg-cyan-400 rounded-full" />
          <span className="text-muted-foreground">Precipitation</span>
        </div>

      </div>

    </div>
  );
};

export default TemperatureChart;