import { useState } from 'react';
import '../styles/search.css';

const SearchForm = ({ onSearch, initialCity = '' }) => {
  const [city, setCity] = useState(initialCity);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        required
      />
      <button type="submit">
        <span className="button-text">Get Weather</span>
        <span className="button-icon">🌤️</span>
      </button>
    </form>
  );
};

export default SearchForm;