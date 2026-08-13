import { useEffect, useState } from "react";
import "./Loader.css";

function Loader({ onFinish }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setHide(true);
    }, 2200);

    const finishTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 2800);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div className={`loader-overlay ${hide ? "fade-out" : ""}`}>
      <div className="loader-container">
        <div className="loader-ring">
          <div className="loader-logo">
            <span className="loader-uca">UCA</span>

            <span className="loader-universal">
              UNIVERSAL
            </span>

            <span className="loader-agency">
              CONSULTING AGENCY
            </span>
          </div>
        </div>

        <div className="loader-progress">
          <div className="loader-progress-bar"></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;