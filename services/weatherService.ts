import { CurrentWeatherAPIResponse } from '../types';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export async function fetchCurrentWeather(city: string): Promise<CurrentWeatherAPIResponse> {
    const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);

    if (!response.ok) {
        const errorData = await response.json();
        const error = new Error(`Failed to fetch weather for ${city}: ${errorData.message || 'City not found'}`);
        // Attach city to error for better debugging in the component
        (error as any).city = city;
        throw error;
    }

    const current: CurrentWeatherAPIResponse = await response.json();
    return current;
}
