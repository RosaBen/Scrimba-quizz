// import React Components
import { Routes, Route } from "react-router";

// import pages
import Home from "./pages/Home";

// Import scripts

import { quiz } from "./assets/scripts/data";

// Styles
import "./assets/styles/index.css";
import "./assets/styles/home.css";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <div className="bubbles">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
