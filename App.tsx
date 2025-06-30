
import React, { useState, useEffect, useCallback } from 'react';
import { CurrentWeatherAPIResponse } from './types';
import { fetchCurrentWeather } from './services/weatherService';
import { SearchBar } from './components/SearchBar';
import { ThemeToggle } from './components/ThemeToggle';
import { WeatherIcon } from './components/WeatherIcon';
import { FiWind, FiDroplet } from 'react-icons/fi';
import { FaTemperatureHigh } from 'react-icons/fa';

const initialCities = ['New York', 'London', 'Tokyo', 'Sydney', 'Paris', 'Cairo'];

interface CityWeatherCardProps {
    weatherData: CurrentWeatherAPIResponse;
}

const CityWeatherCard: React.FC<CityWeatherCardProps> = ({ weatherData }) => {
    return (
        <article aria-labelledby={`city-name-${weatherData.id}`} className="p-6 rounded-3xl bg-cover bg-center relative text-white min-h-[320px] flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300" style={{ backgroundImage: `url(https://picsum.photos/seed/${weatherData.name.replace(/\s/g, '-')}/800/600)` }}>
            <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>
            <div className="relative z-10 flex flex-col h-full flex-grow">
                <header className="flex justify-between items-start">
                    <div>
                        <h2 id={`city-name-${weatherData.id}`} className="text-2xl font-bold">{weatherData.name}</h2>
                    </div>
                    <div className="w-20 h-20 -mt-2 -mr-2">
                        <WeatherIcon iconCode={weatherData.weather[0].icon} />
                    </div>
                </header>
                <div className="mt-auto">
                    <p className="text-6xl font-bold mb-1">{Math.round(weatherData.main.temp)}°C</p>
                    <p className="text-lg capitalize mb-4 font-medium">{weatherData.weather[0].description}</p>
                    <div className="flex justify-between items-center text-sm border-t border-white/20 pt-3">
                        <div className="flex items-center space-x-2" title="Feels Like">
                            <FaTemperatureHigh className="text-yellow-400" />
                            <span>{Math.round(weatherData.main.feels_like)}°C</span>
                        </div>
                        <div className="flex items-center space-x-2" title="Humidity">
                            <FiDroplet className="text-blue-400" />
                            <span>{weatherData.main.humidity}%</span>
                        </div>
                        <div className="flex items-center space-x-2" title="Wind Speed">
                            <FiWind className="text-gray-400" />
                            <span>{weatherData.wind.speed.toFixed(1)} m/s</span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};


const App: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');
    const [cities, setCities] = useState<string[]>(initialCities);
    const [weatherData, setWeatherData] = useState<CurrentWeatherAPIResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(theme === 'light' ? 'dark' : 'light');
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const fetchAllWeatherData = useCallback(async () => {
        setLoading(true);
        setError(null);

        const results = await Promise.allSettled(
            cities.map(city => fetchCurrentWeather(city))
        );

        const fulfilledWeatherData = results
            .filter((r): r is PromiseFulfilledResult<CurrentWeatherAPIResponse> => r.status === 'fulfilled')
            .map(r => r.value);

        setWeatherData(fulfilledWeatherData);

        if (fulfilledWeatherData.length < cities.length) {
             if (fulfilledWeatherData.length === 0) {
                setError("Failed to fetch weather for all cities. Please check the city names and your connection.");
             }
             // For partial errors, we just show the data we managed to get.
        }

        setLoading(false);
    }, [cities]);

    useEffect(() => {
        fetchAllWeatherData();
    }, [fetchAllWeatherData]);

    const handleSearch = (searchCity: string) => {
        const sanitizedSearchCity = searchCity.trim();
        if (!sanitizedSearchCity || cities.map(c => c.toLowerCase()).includes(sanitizedSearchCity.toLowerCase())) {
            return;
        }
        setCities(prevCities => [sanitizedSearchCity, ...prevCities.slice(1, 6)]);
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-200 transition-colors duration-300">
            <div className="container mx-auto p-4 md:p-8 lg:p-12 relative">
                <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20">
                    <ThemeToggle theme={theme} toggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
                </div>

                <header className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">World Weather</h1>
                    <div className="max-w-xl mx-auto">
                        <SearchBar onSearch={handleSearch} />
                    </div>
                </header>

                {loading ? (
                    <div className="flex justify-center items-center h-[50vh]">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-custom-blue"></div>
                    </div>
                ) : error ? (
                    <div className="text-center p-10 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl">
                        <h2 className="text-2xl font-bold mb-4">Error</h2>
                        <p>{error}</p>
                        <button onClick={fetchAllWeatherData} className="mt-6 px-4 py-2 bg-custom-blue text-white rounded-lg hover:opacity-90 transition-opacity">
                            Try Again
                        </button>
                    </div>
                ) : (
                     <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {weatherData.map((weather) => (
                            <CityWeatherCard key={weather.id} weatherData={weather} />
                        ))}
                    </main>
                )}
            </div>
        </div>
    );
};

export default App;
