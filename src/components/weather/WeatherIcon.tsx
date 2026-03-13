import { Cloud, CloudDrizzle, CloudLightning, CloudRain, CloudSnow, CloudSun, Moon, Sun, Wind } from "lucide-react";

interface WeatherIconProps {
  condition: string;
  size?: number;
  className?: string;
}

const WeatherIcon = ({ condition, size = 24, className = "" }: WeatherIconProps) => {
  const iconProps = { size, className };

  switch (condition) {
    case "sunny":
    case "clear":
    case "Clear":
    case "Sunny":
      return <Sun {...iconProps} />;
    case "partly-cloudy":
    case "Partly Cloudy":
      return <CloudSun {...iconProps} />;
    case "cloudy":
    case "Cloudy":
    case "Overcast":
    case "Mostly Cloudy":
      return <Cloud {...iconProps} />;
    case "rain":
    case "Rain":
    case "Heavy Rain":
    case "Showers":
    case "PM Showers":
      return <CloudRain {...iconProps} />;
    case "drizzle":
      return <CloudDrizzle {...iconProps} />;
    case "snow":
      return <CloudSnow {...iconProps} />;
    case "thunder":
      return <CloudLightning {...iconProps} />;
    case "windy":
      return <Wind {...iconProps} />;
    case "night":
      return <Moon {...iconProps} />;
    default:
      return <CloudSun {...iconProps} />;
  }
};

export default WeatherIcon;
