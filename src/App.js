import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import '../src/styles/app.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="main-header">
          <h1 className="logo">WeatherPlanner</h1>
          <nav className="main-nav">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              About
            </NavLink>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;