import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>

        <p>
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <Link to="/" className="home-btn">
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;