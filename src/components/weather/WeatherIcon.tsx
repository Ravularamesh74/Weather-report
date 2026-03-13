import {
  Cloud,
  CloudDrizzle,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
  Moon,
  Sun,
  Wind,
} from "lucide-react";

interface WeatherIconProps {
  condition: string;
  size?: number;
  className?: string;
}

const iconMap: Record<string, any> = {
  clear: Sun,
  sunny: Sun,

  "partly cloudy": CloudSun,
  "partly-cloudy": CloudSun,

  cloudy: Cloud,
  overcast: Cloud,
  "mostly cloudy": Cloud,

  rain: CloudRain,
  "heavy rain": CloudRain,
  showers: CloudRain,
  "pm showers": CloudRain,

  drizzle: CloudDrizzle,

  snow: CloudSnow,

  thunder: CloudLightning,
  storm: CloudLightning,

  windy: Wind,

  night: Moon,
};

const WeatherIcon = ({
  condition,
  size = 24,
  className = "",
}: WeatherIconProps) => {
  const key = condition.toLowerCase();

  const Icon = iconMap[key] || CloudSun;

  return <Icon size={size} className={className} />;
};

export default WeatherIcon;