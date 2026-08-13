import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

import { ThemeProvider } from "./context/ThemeContext";

// ==========================================
// React Application
// ==========================================

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);

// ==========================================
// Deferred AOS Loading
// ==========================================

const loadAOS = async () => {
  try {
    const [{ default: AOS }] = await Promise.all([
      import("aos"),
      import("aos/dist/aos.css"),
    ]);

    AOS.init({
      duration: 1000,
      once: true,
    });
  } catch (error) {
    console.error("AOS failed to load:", error);
  }
};

// Load AOS after the browser becomes idle
if ("requestIdleCallback" in window) {
  window.requestIdleCallback(loadAOS);
} else {
  window.setTimeout(loadAOS, 1500);
}