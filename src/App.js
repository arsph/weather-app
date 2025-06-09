// App.js
import React, { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard';
import Calendar from './components/Calendar';
import MeteorologicalPredictions from './components/MeteorologicalPredictions';
import { getWeatherData } from './services/WeatherService';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [date, setDate] = useState('');
  const [meteorologicalPredictions, setMeteorologicalPredictions] = useState('');

  useEffect(() => {
    const currentDate = new Date().toDateString();
    const predictions = 'Meteorological predictions for the week: ...';

    setDate(currentDate);
    setMeteorologicalPredictions(predictions);
  }, []);

  const handleSearch = async () => {
    try {
      const data = await getWeatherData(city);
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Weather Forecast</h1>
      </header>

      <main className="app-main">
        <section className="search-section">
          <div className="search-container">
            <input
              type="text"
              placeholder="Enter city name..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyPress={handleKeyPress}
              className="search-input"
            />
            <button onClick={handleSearch} className="search-button">
              Search
            </button>
          </div>
        </section>

        <div className="weather-grid">
          {weatherData && (
            <section className="weather-section">
              <WeatherCard data={weatherData} />
            </section>
          )}
          
          <section className="calendar-section">
            {date && <Calendar date={date} />}
          </section>

          <section className="predictions-section">
            {meteorologicalPredictions && (
              <MeteorologicalPredictions predictions={meteorologicalPredictions} />
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;
