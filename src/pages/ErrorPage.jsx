import { Link } from 'react-router-dom';
import '../styles/main.css';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="home-link">Return to Home</Link>
    </div>
  );
};

export default ErrorPage;