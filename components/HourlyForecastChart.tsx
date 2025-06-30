
import React from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface HourlyForecastChartProps {
    data: { time: string; temp: number }[];
}

const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg">
                <p className="label">{`${label}`}</p>
                <p className="intro text-custom-blue">{`Temp: ${payload[0].value}°C`}</p>
            </div>
        );
    }
    return null;
};

export const HourlyForecastChart: React.FC<HourlyForecastChartProps> = ({ data }) => {
    return (
        <div style={{ width: '100%', height: 150 }}>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 20,
                        left: -10,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} vertical={false} />
                    <XAxis dataKey="time" tick={{ fill: 'currentColor', fontSize: 12 }} tickLine={false} axisLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Line type="monotone" dataKey="temp" stroke="var(--color-custom-blue)" strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};
