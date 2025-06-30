
import React from 'react';
import { WeatherIcon } from './WeatherIcon';

interface DailyForecastItemProps {
    day: string;
    icon: string;
    maxTemp: number;
    minTemp: number;
}

export const DailyForecastItem: React.FC<DailyForecastItemProps> = ({ day, icon, maxTemp, minTemp }) => {
    return (
        <div className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-700/50 rounded-lg">
            <p className="font-medium w-12">{day}</p>
            <div className="w-10 h-10 text-custom-blue">
                <WeatherIcon iconCode={icon} />
            </div>
            <p className="font-medium text-right w-24">
                {maxTemp}° / <span className="opacity-60">{minTemp}°</span>
            </p>
        </div>
    );
};
