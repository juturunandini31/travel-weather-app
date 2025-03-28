export const cityWeatherData = {
    // Indian Cities
    "Bangalore": {
      current: {
        temp_c: 26,
        condition: "Partly Cloudy",
        icon: "03d",
        wind_kph: 10,
        humidity: 65
      },
      forecast: [
        { date: new Date(Date.now() + 86400000).toLocaleDateString(), temp_c: 27, condition: "Cloudy", icon: "03d" },
        { date: new Date(Date.now() + 172800000).toLocaleDateString(), temp_c: 26, condition: "Rain", icon: "10d" },
        { date: new Date(Date.now() + 259200000).toLocaleDateString(), temp_c: 25, condition: "Thunderstorm", icon: "11d" },
        { date: new Date(Date.now() + 345600000).toLocaleDateString(), temp_c: 26, condition: "Partly Cloudy", icon: "03d" },
        { date: new Date(Date.now() + 432000000).toLocaleDateString(), temp_c: 27, condition: "Sunny", icon: "01d" }
      ]
    },
    "Delhi": {
      current: { 
        temp_c: 32, 
        condition: "Haze", 
        icon: "50d", 
        wind_kph: 8, 
        humidity: 42 
      },
      forecast: [
        { date: new Date(Date.now() + 86400000).toLocaleDateString(), temp_c: 33, condition: "Haze", icon: "50d" },
        { date: new Date(Date.now() + 172800000).toLocaleDateString(), temp_c: 34, condition: "Sunny", icon: "01d" },
        { date: new Date(Date.now() + 259200000).toLocaleDateString(), temp_c: 32, condition: "Haze", icon: "50d" },
        { date: new Date(Date.now() + 345600000).toLocaleDateString(), temp_c: 31, condition: "Cloudy", icon: "03d" },
        { date: new Date(Date.now() + 432000000).toLocaleDateString(), temp_c: 33, condition: "Sunny", icon: "01d" }
      ]
    },
    "Mumbai": {
      current: { 
        temp_c: 30, 
        condition: "Humid", 
        icon: "50d", 
        wind_kph: 12, 
        humidity: 78 
      },
      forecast: [
        { date: new Date(Date.now() + 86400000).toLocaleDateString(), temp_c: 31, condition: "Humid", icon: "50d" },
        { date: new Date(Date.now() + 172800000).toLocaleDateString(), temp_c: 29, condition: "Rain", icon: "10d" },
        { date: new Date(Date.now() + 259200000).toLocaleDateString(), temp_c: 30, condition: "Humid", icon: "50d" },
        { date: new Date(Date.now() + 345600000).toLocaleDateString(), temp_c: 28, condition: "Thunderstorm", icon: "11d" },
        { date: new Date(Date.now() + 432000000).toLocaleDateString(), temp_c: 31, condition: "Humid", icon: "50d" }
      ]
    },
    "Hyderabad": {
      current: { 
        temp_c: 34, 
        condition: "Sunny", 
        icon: "01d", 
        wind_kph: 14, 
        humidity: 43 
      },
      forecast: [
        { date: new Date(Date.now() + 86400000).toLocaleDateString(), temp_c: 35, condition: "Sunny", icon: "01d" },
        { date: new Date(Date.now() + 172800000).toLocaleDateString(), temp_c: 33, condition: "Partly Cloudy", icon: "03d" },
        { date: new Date(Date.now() + 259200000).toLocaleDateString(), temp_c: 34, condition: "Sunny", icon: "01d" },
        { date: new Date(Date.now() + 345600000).toLocaleDateString(), temp_c: 36, condition: "Sunny", icon: "01d" },
        { date: new Date(Date.now() + 432000000).toLocaleDateString(), temp_c: 34, condition: "Clear", icon: "01d" }
      ]
    },
    "Chennai": {
      current: { 
        temp_c: 36, 
        condition: "Hot", 
        icon: "01d", 
        wind_kph: 16, 
        humidity: 62 
      },
      forecast: [
        { date: new Date(Date.now() + 86400000).toLocaleDateString(), temp_c: 35, condition: "Hot", icon: "01d" },
        { date: new Date(Date.now() + 172800000).toLocaleDateString(), temp_c: 36, condition: "Humid", icon: "50d" },
        { date: new Date(Date.now() + 259200000).toLocaleDateString(), temp_c: 37, condition: "Hot", icon: "01d" },
        { date: new Date(Date.now() + 345600000).toLocaleDateString(), temp_c: 35, condition: "Humid", icon: "50d" },
        { date: new Date(Date.now() + 432000000).toLocaleDateString(), temp_c: 36, condition: "Hot", icon: "01d" }
      ]
    },
    "Kolkata": {
      current: { 
        temp_c: 33, 
        condition: "Humid", 
        icon: "50d", 
        wind_kph: 10, 
        humidity: 77 
      },
      forecast: [
        { date: new Date(Date.now() + 86400000).toLocaleDateString(), temp_c: 32, condition: "Humid", icon: "50d" },
        { date: new Date(Date.now() + 172800000).toLocaleDateString(), temp_c: 33, condition: "Rain", icon: "10d" },
        { date: new Date(Date.now() + 259200000).toLocaleDateString(), temp_c: 31, condition: "Humid", icon: "50d" },
        { date: new Date(Date.now() + 345600000).toLocaleDateString(), temp_c: 34, condition: "Thunderstorm", icon: "11d" },
        { date: new Date(Date.now() + 432000000).toLocaleDateString(), temp_c: 32, condition: "Humid", icon: "50d" }
      ]
    },
    "Pune": {
      current: { 
        temp_c: 28, 
        condition: "Clear", 
        icon: "01d", 
        wind_kph: 12, 
        humidity: 54 
      },
      forecast: [
        { date: new Date(Date.now() + 86400000).toLocaleDateString(), temp_c: 27, condition: "Clear", icon: "01d" },
        { date: new Date(Date.now() + 172800000).toLocaleDateString(), temp_c: 28, condition: "Partly Cloudy", icon: "03d" },
        { date: new Date(Date.now() + 259200000).toLocaleDateString(), temp_c: 26, condition: "Rain", icon: "10d" },
        { date: new Date(Date.now() + 345600000).toLocaleDateString(), temp_c: 27, condition: "Clear", icon: "01d" },
        { date: new Date(Date.now() + 432000000).toLocaleDateString(), temp_c: 29, condition: "Sunny", icon: "01d" }
      ]
    },
    "Jaipur": {
      current: { 
        temp_c: 35, 
        condition: "Sunny", 
        icon: "01d", 
        wind_kph: 15, 
        humidity: 38 
      },
      forecast: [
        { date: new Date(Date.now() + 86400000).toLocaleDateString(), temp_c: 36, condition: "Sunny", icon: "01d" },
        { date: new Date(Date.now() + 172800000).toLocaleDateString(), temp_c: 34, condition: "Clear", icon: "01d" },
        { date: new Date(Date.now() + 259200000).toLocaleDateString(), temp_c: 35, condition: "Sunny", icon: "01d" },
        { date: new Date(Date.now() + 345600000).toLocaleDateString(), temp_c: 37, condition: "Sunny", icon: "01d" },
        { date: new Date(Date.now() + 432000000).toLocaleDateString(), temp_c: 35, condition: "Clear", icon: "01d" }
      ]
    },
    // Global Cities
    "London": {
      current: { 
        temp_c: 18, 
        condition: "Rain", 
        icon: "10d", 
        wind_kph: 20, 
        humidity: 82 
      },
      forecast: [
        { date: new Date(Date.now() + 86400000).toLocaleDateString(), temp_c: 17, condition: "Rain", icon: "10d" },
        { date: new Date(Date.now() + 172800000).toLocaleDateString(), temp_c: 16, condition: "Cloudy", icon: "03d" },
        { date: new Date(Date.now() + 259200000).toLocaleDateString(), temp_c: 18, condition: "Drizzle", icon: "09d" },
        { date: new Date(Date.now() + 345600000).toLocaleDateString(), temp_c: 19, condition: "Partly Cloudy", icon: "03d" },
        { date: new Date(Date.now() + 432000000).toLocaleDateString(), temp_c: 17, condition: "Rain", icon: "10d" }
      ]
    },
    "New York": {
      current: { 
        temp_c: 22, 
        condition: "Cloudy", 
        icon: "03d", 
        wind_kph: 15, 
        humidity: 65 
      },
      forecast: [
        { date: new Date(Date.now() + 86400000).toLocaleDateString(), temp_c: 21, condition: "Cloudy", icon: "03d" },
        { date: new Date(Date.now() + 172800000).toLocaleDateString(), temp_c: 23, condition: "Sunny", icon: "01d" },
        { date: new Date(Date.now() + 259200000).toLocaleDateString(), temp_c: 20, condition: "Rain", icon: "10d" },
        { date: new Date(Date.now() + 345600000).toLocaleDateString(), temp_c: 22, condition: "Partly Cloudy", icon: "03d" },
        { date: new Date(Date.now() + 432000000).toLocaleDateString(), temp_c: 24, condition: "Sunny", icon: "01d" }
      ]
    }
  };
  
  export const getSeasonalAdjustment = () => {
    const month = new Date().getMonth();
    return month >= 3 && month <= 5 ? 3 :  // Summer
           month >= 6 && month <= 9 ? -2 : // Monsoon
           month >= 10 && month <= 11 ? 1 : // Autumn
           0; // Winter
  };