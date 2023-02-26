import "./App.css";
import Albums from "./albums";
import { useState } from "react";

function App() {
  const [showBands, setshowBands] = useState(false);

  return (
    <>
      <button
        className="toggle-button"
        onClick={() => setshowBands(!showBands)}
      >
        Show Bands Toggle
      </button>
      <div>{showBands ? <Albums /> : null} </div>
    </>
  );
}

export default App;
