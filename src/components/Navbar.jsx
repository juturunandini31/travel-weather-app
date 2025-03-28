import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">WeatherPlanner</Link>
      <div className="nav-links">
        <Link to="/"><FaHome /> Home</Link>
        <Link to="/about"><FaInfoCircle /> About</Link>
      </div>
    </nav>
  );
};

export default Navbar;