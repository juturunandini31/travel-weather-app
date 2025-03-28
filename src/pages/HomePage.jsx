import { useState, useEffect } from 'react';
import SearchForm from '../components/SearchForm';
import CityWeather from '../components/CityWeather';
import '../styles/home.css';

const HomePage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchCity, setSearchCity] = useState('');

  const handleSearch = async (city) => {
    setSearchCity(city);
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Special case for Pune
      if (city.toLowerCase() === 'pune') {
        setWeatherData({
          location: {
            name: 'Pune',
            country: 'IN'
          },
          current: {
            temp_c: 28,
            condition: {
              text: 'Partly Cloudy',
              icon: '/weather-icons/partly-cloudy.svg'
            },
            wind_kph: 12,
            humidity: 65
          },
          forecast: {
            forecastday: [
              // Add 5-day forecast data for Pune here
            ]
          },
          isFallback: true
        });
      } else {
        // Normal API call for other cities
        const response = await fetchWeatherData(city);
        setWeatherData(response);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-container">
      {/* ... (keep previous header code) ... */}

      <main className="weather-content">
        <div className="search-card">
          <SearchForm 
            onSearch={handleSearch}
            initialCity="Pune"
          />
        </div>

        {/* ... (keep loading and error states) ... */}

        {weatherData ? (
          <CityWeather weatherData={weatherData} />
        ) : (
          <div className="welcome-card">
            <img src="/weather-icons/search-weather.svg" alt="Weather icon" />
            <h3>Search for a city to see weather</h3>
            <p>Try: "Pune", "Delhi", or "London"</p>
          </div>
        )}
      </main>

      {/* ... (keep footer code) ... */}
    </div>
  );
};

export default HomePage;