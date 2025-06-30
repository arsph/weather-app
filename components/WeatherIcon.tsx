
import React from 'react';
import {
    WiDaySunny, WiNightClear, WiDayCloudy, WiNightAltCloudy,
    WiCloud, WiCloudy, WiDayShowers, WiNightAltShowers,
    WiDayRain, WiNightAltRain, WiDayThunderstorm, WiNightAltThunderstorm,
    WiDaySnow, WiNightAltSnow, WiDayFog, WiNightFog,
} from 'react-icons/wi';

interface WeatherIconProps {
    iconCode: string;
    className?: string;
}

export const WeatherIcon: React.FC<WeatherIconProps> = ({ iconCode, className }) => {
    const iconMap: { [key: string]: React.ReactNode } = {
        '01d': <WiDaySunny />,
        '01n': <WiNightClear />,
        '02d': <WiDayCloudy />,
        '02n': <WiNightAltCloudy />,
        '03d': <WiCloud />,
        '03n': <WiCloud />,
        '04d': <WiCloudy />,
        '04n': <WiCloudy />,
        '09d': <WiDayShowers />,
        '09n': <WiNightAltShowers />,
        '10d': <WiDayRain />,
        '10n': <WiNightAltRain />,
        '11d': <WiDayThunderstorm />,
        '11n': <WiNightAltThunderstorm />,
        '13d': <WiDaySnow />,
        '13n': <WiNightAltSnow />,
        '50d': <WiDayFog />,
        '50n': <WiNightFog />,
    };

    return (
        <div className={`w-full h-full flex items-center justify-center text-5xl ${className}`}>
            {iconMap[iconCode] || <WiDaySunny />}
        </div>
    );
};
