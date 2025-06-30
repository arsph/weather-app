
import React from 'react';

interface HighlightCardProps {
    title: string;
    icon: React.ReactNode;
    value: string;
}

export const HighlightCard: React.FC<HighlightCardProps> = ({ title, icon, value }) => {
    return (
        <div className="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-xl flex items-center space-x-4">
            <div className="text-2xl">{icon}</div>
            <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
                <p className="text-lg font-bold">{value}</p>
            </div>
        </div>
    );
};
