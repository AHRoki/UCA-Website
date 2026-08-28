import React from "react";
import "./NotFound.css";

const NotFound = () => {
  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <div className="not-found-code">404</div>

        <h1>Page Not Found</h1>

        <p>
          Sorry, the page you are looking for does not exist or may have been
          moved.
        </p>

        <button
          type="button"
          onClick={handleGoHome}
          className="not-found-button"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;