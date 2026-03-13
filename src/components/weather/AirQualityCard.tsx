import React from "react";

type Pollutants = {
  pm2_5: number;
  pm10: number;
  no2: number;
  so2: number;
  o3: number;
  co: number;
};

type AirQualityCardProps = {
  aqi: number;
  pollutants: Pollutants;
  location: string;
  trend?: "up" | "down" | "stable";
};

const aqiLevels = [
  { label: "Good", color: "#22c55e", range: "0-50" },
  { label: "Moderate", color: "#eab308", range: "51-100" },
  { label: "Unhealthy for Sensitive", color: "#f97316", range: "101-150" },
  { label: "Unhealthy", color: "#ef4444", range: "151-200" },
  { label: "Very Unhealthy", color: "#8b5cf6", range: "201-300" },
  { label: "Hazardous", color: "#7f1d1d", range: "301+" }
];

function getAQILevel(aqi: number) {
  if (aqi <= 50) return aqiLevels[0];
  if (aqi <= 100) return aqiLevels[1];
  if (aqi <= 150) return aqiLevels[2];
  if (aqi <= 200) return aqiLevels[3];
  if (aqi <= 300) return aqiLevels[4];
  return aqiLevels[5];
}

export default function AirQualityCard({
  aqi,
  pollutants,
  location,
  trend = "stable"
}: AirQualityCardProps) {
  if (!pollutants) return null;
  const level = getAQILevel(aqi);

  const trendIcon =
    trend === "up" ? "⬆️"
      : trend === "down" ? "⬇️"
      : "➖";

  return (
    <div className="aqi-card">

      <div className="aqi-header">
        <h3>Air Quality</h3>
        <span>{location}</span>
      </div>

      <div className="aqi-main">

        <div
          className="aqi-score"
          style={{ backgroundColor: level.color }}
        >
          {aqi}
        </div>

        <div className="aqi-info">
          <h4>{level.label}</h4>
          <p>Range {level.range}</p>
          <span className="aqi-trend">
            Trend {trendIcon}
          </span>
        </div>

      </div>

      <div className="pollutants-grid">

        <Pollutant name="PM2.5" value={pollutants.pm2_5} />
        <Pollutant name="PM10" value={pollutants.pm10} />
        <Pollutant name="NO₂" value={pollutants.no2} />
        <Pollutant name="SO₂" value={pollutants.so2} />
        <Pollutant name="O₃" value={pollutants.o3} />
        <Pollutant name="CO" value={pollutants.co} />

      </div>

    </div>
  );
}

function Pollutant({ name, value }: { name: string; value: number }) {
  return (
    <div className="pollutant-item">
      <span className="pollutant-name">{name}</span>
      <span className="pollutant-value">{value}</span>
    </div>
  );
}