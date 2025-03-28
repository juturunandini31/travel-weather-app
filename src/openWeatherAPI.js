import axios from 'axios';

const API_KEY = 'your-openweathermap-api-key';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    return formatOpenWeatherData(response.data);
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch weather data');
  }
};

function formatOpenWeatherData(data) {
  return {
    current: {
      temp_c: data.list[0].main.temp,
      condition: {
        text: data.list[0].weather[0].description,
        icon: `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`
      },
      wind_kph: data.list[0].wind.speed * 3.6, // Convert m/s to km/h
      humidity: data.list[0].main.humidity
    },
    forecast: {
      forecastday: data.list
        .filter((_, index) => index % 8 === 0) // Get daily forecast
        .slice(0, 5) // Limit to 5 days
        .map(item => ({
          date: item.dt_txt.split(' ')[0],
          day: {
            avgtemp_c: item.main.temp,
            condition: {
              text: item.weather[0].description,
              icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
            },
            maxwind_kph: item.wind.speed * 3.6,
            avghumidity: item.main.humidity
          }
        }))
    },
    location: {
      name: data.city.name,
      country: data.city.country
    }
  };
}