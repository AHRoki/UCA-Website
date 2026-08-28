import { useState } from "react";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";

function App() {
  const [loading, setLoading] = useState(true);

  const isHomePage =
    window.location.pathname === "/" ||
    window.location.pathname === "";

  return (
    <>
      {isHomePage ? <Home /> : <NotFound />}

      {loading && (
        <Loader onFinish={() => setLoading(false)} />
      )}
    </>
  );
}

export default App;