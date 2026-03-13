import React from "react";

type WeatherData = {
  location: string;
  temperature: number;
  feelsLike: number;
  condition: string;
  icon: string;
  humidity: number;
  windSpeed: number;
  pressure: number;
  visibility: number;
  uvIndex: number;
  sunrise: string;
  sunset: string;
};

type Props = {
  data: WeatherData;
};

export default function CurrentConditions({ data }: Props) {
  if (!data) return null;

  return (
    <div className="current-card">

      <div className="current-header">
        <h2>{data.location || "N/A"}</h2>
        <p>{data.condition || "N/A"}</p>
      </div>

      <div className="current-main">

        <div className="temperature-block">
          <img src={data.icon} alt="weather icon" />
          <div>
            <h1>{data.temperature}°C</h1>
            <span>Feels like {data.feelsLike}°C</span>
          </div>
        </div>

        <div className="weather-grid">

          <WeatherStat label="Humidity" value={`${data.humidity}%`} />
          <WeatherStat label="Wind" value={`${data.windSpeed} km/h`} />
          <WeatherStat label="Pressure" value={`${data.pressure} hPa`} />
          <WeatherStat label="Visibility" value={`${data.visibility} km`} />
          <WeatherStat label="UV Index" value={data.uvIndex} />
          <WeatherStat label="Sunrise" value={data.sunrise} />
          <WeatherStat label="Sunset" value={data.sunset} />

        </div>

      </div>

    </div>
  );
}

function WeatherStat({
  label,
  value
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="weather-stat">
      <span className="stat-label">{label}</span>
      <span className="stat-value">{value}</span>
    </div>
  );
}