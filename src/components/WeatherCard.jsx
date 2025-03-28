const WeatherCard = ({ date, temp, condition, icon, wind, humidity }) => {
    return (
      <div className="weather-card">
        <h4>{date}</h4>
        <div className="weather-icon">
          <img src={icon} alt={condition} />
        </div>
        <div className="temp">{temp}°C</div>
        <div className="condition">{condition}</div>
        <div className="details">
          <div>Wind: {wind} km/h</div>
          <div>Humidity: {humidity}%</div>
        </div>
      </div>
    );
  };
  
  export default WeatherCard;