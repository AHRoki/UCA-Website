import { useState } from "react";
import Loader from "./components/Loader";
import Home from "./pages/Home";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Home />

      {loading && (
        <Loader onFinish={() => setLoading(false)} />
      )}
    </>
  );
}

export default App;