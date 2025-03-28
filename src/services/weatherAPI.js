import axios from 'axios';
import { cityWeatherData } from './weatherData';

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Cache for API responses (valid for 10 minutes)
const weatherCache = {};

export const fetchWeatherData = async (city) => {
  const cacheKey = city.toLowerCase();
  
  // 1. Return cached data if available
  if (weatherCache[cacheKey] && Date.now() - weatherCache[cacheKey].timestamp < 600000) {
    return weatherCache[cacheKey].data;
  }

  // 2. Try real API if key exists
  if (API_KEY) {
    try {
      const [current, forecast] = await Promise.all([
        axios.get(`${BASE_URL}/weather`, {
          params: {
            q: city,
            appid: API_KEY,
            units: 'metric',
          },
          timeout: 5000
        }),
        axios.get(`${BASE_URL}/forecast`, {
          params: {
            q: city,
            appid: API_KEY,
            units: 'metric',
            cnt: 40
          },
          timeout: 5000
        })
      ]);

      const weatherData = {
        current: {
          temp_c: current.data.main?.temp ?? 0,
          condition: {
            text: current.data.weather?.[0]?.description || 'Unknown',
            icon: `https://openweathermap.org/img/wn/${current.data.weather?.[0]?.icon || '01d'}@2x.png`
          },
          wind_kph: ((current.data.wind?.speed ?? 0) * 3.6).toFixed(1),
          humidity: current.data.main?.humidity ?? 0
        },
        forecast: {
          forecastday: (forecast.data.list || [])
            .filter((_, i) => i % 8 === 0)
            .slice(0, 5)
            .map(item => ({
              date: item.dt_txt?.split(' ')[0] || new Date(item.dt * 1000).toLocaleDateString(),
              day: {
                avgtemp_c: item.main?.temp ?? 0,
                condition: {
                  text: item.weather?.[0]?.description || 'Unknown',
                  icon: `https://openweathermap.org/img/wn/${item.weather?.[0]?.icon || '01d'}@2x.png`
                },
                maxwind_kph: ((item.wind?.speed ?? 0) * 3.6).toFixed(1),
                avghumidity: item.main?.humidity ?? 0
              }
            }))
        },
        location: {
          name: current.data.name || city,
          country: current.data.sys?.country || 'N/A'
        },
        isFallback: false
      };

      // Cache the response
      weatherCache[cacheKey] = {
        data: weatherData,
        timestamp: Date.now()
      };

      return weatherData;

    } catch (error) {
      console.warn('API failed, trying fallback:', error.message);
    }
  }

  // 3. Check preloaded cities
  const normalizedCity = Object.keys(cityWeatherData).find(
    key => key.toLowerCase() === cacheKey
  );

  if (normalizedCity) {
    return {
      ...cityWeatherData[normalizedCity],
      isFallback: true
    };
  }

  // 4. Generate dynamic mock data as last resort
  return generateMockData(city);
};

function generateMockData(city) {
  const seasons = [
    { tempRange: [8, 18], conditions: ["Snow", "Fog", "Cold"] },    // Winter
    { tempRange: [18, 32], conditions: ["Sunny", "Clear", "Hot"] }, // Summer
    { tempRange: [22, 28], conditions: ["Rain", "Thunderstorm", "Humid"] } // Monsoon
  ];
  
  const season = seasons[new Date().getMonth() % 3];
  const temp = (Math.random() * (season.tempRange[1] - season.tempRange[0]) + season.tempRange[0]).toFixed(1);
  const condition = season.conditions[Math.floor(Math.random() * season.conditions.length)];
  
  return {
    current: {
      temp_c: temp,
      condition: {
        text: condition,
        icon: `https://openweathermap.org/img/wn/${
          condition === 'Sunny' ? '01d' :
          condition === 'Rain' ? '10d' :
          condition === 'Snow' ? '13d' : '03d'
        }@2x.png`
      },
      wind_kph: (Math.random() * 20 + 5).toFixed(1),
      humidity: Math.floor(Math.random() * 50 + 30)
    },
    forecast: {
      forecastday: [1, 2, 3, 4, 5].map(day => ({
        date: new Date(Date.now() + day * 86400000).toLocaleDateString(),
        day: {
          avgtemp_c: (parseFloat(temp) + (Math.random() * 4 - 2)).toFixed(1),
          condition: {
            text: season.conditions[Math.floor(Math.random() * season.conditions.length)],
            icon: `https://openweathermap.org/img/wn/${
              condition === 'Sunny' ? '01d' :
              condition === 'Rain' ? '10d' :
              condition === 'Snow' ? '13d' : '03d'
            }@2x.png`
          },
          maxwind_kph: (Math.random() * 15 + 5).toFixed(1),
          avghumidity: Math.floor(Math.random() * 40 + 40)
        }
      }))
    },
    location: {
      name: city.charAt(0).toUpperCase() + city.slice(1).toLowerCase(),
      country: ["US", "IN", "UK", "JP", "CA"][Math.floor(Math.random() * 5)]
    },
    isFallback: true
  };
}