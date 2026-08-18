// import React Components
import { Routes, Route } from "react-router";
import { useState } from "react";

// import pages
import Home from "./pages/Home";
import QuestionsPage from "./pages/QuestionsPage";

// Import scripts
import { quiz } from "./assets/scripts/data";
import { shuffleArray } from "./assets/scripts/utils";

// Styles
import "./assets/styles/index.css";
import "./assets/styles/pages.css";

function App() {
  const [data, setData] = useState([]);
  const newDataArray = quiz.map((obj) => ({
    ...obj,
    options: shuffleArray(obj.options),
  }));
  console.log(newDataArray);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuestionsPage />} />
      </Routes>
      <div className="bubbles">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
