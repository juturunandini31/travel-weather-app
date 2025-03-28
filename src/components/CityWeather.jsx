import '../styles/weather.css'

const CityWeather = ({ weatherData }) => {
  // Validate data structure before rendering
  if (!weatherData || !weatherData.location || !weatherData.current) {
    return (
      <div className="error-card">
        ⚠️ Weather data not available for this location
      </div>
    );
  }

  return (
    <div className="weather-card">
      {weatherData.isFallback && (
        <div className="demo-notice">Showing demo data</div>
      )}

      <div className="weather-header">
        <h2>
          {weatherData.location?.name || 'Unknown location'}, 
          {weatherData.location?.country || 'N/A'}
          <span className="current-date">{new Date().toLocaleDateString()}</span>
        </h2>
      </div>

      <div className="current-weather">
        <div className="temperature">
          {weatherData.current?.temp_c ?? '--'}°
          <span className="unit">C</span>
        </div>
        <div className="weather-condition">
          <img 
            src={weatherData.current?.condition?.icon || '/weather-icons/default.svg'} 
            alt={weatherData.current?.condition?.text || 'Weather icon'} 
          />
          <span>{weatherData.current?.condition?.text || 'Unknown'}</span>
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span>💨 Wind</span>
          <span>{weatherData.current?.wind_kph ?? '--'} km/h</span>
        </div>
        <div className="detail-item">
          <span>💧 Humidity</span>
          <span>{weatherData.current?.humidity ?? '--'}%</span>
        </div>
      </div>

      {weatherData.forecast?.forecastday?.length > 0 && (
        <div className="forecast-section">
          <h3>5-Day Forecast</h3>
          <div className="forecast-days">
            {weatherData.forecast.forecastday.map((day, index) => (
              <div key={index} className="forecast-day">
                <div className="day-name">
                  {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
                </div>
                <img 
                  src={day.day?.condition?.icon || '/weather-icons/default.svg'} 
                  alt={day.day?.condition?.text || 'Forecast'} 
                />
                <div className="day-temp">
                  {day.day?.avgtemp_c ?? '--'}°
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CityWeather;