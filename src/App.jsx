// import React Components
import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";

// import pages
import Home from "./pages/Home";
import QuestionsPage from "./pages/QuestionsPage";
import Results from "./pages/Results";

// Import scripts
import { quiz } from "./assets/scripts/data";
import { shuffleArray } from "./assets/scripts/utils";

// Styles
import "./assets/styles/index.css";
import "./assets/styles/pages.css";

function App() {
  const [data, setData] = useState([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  useEffect(() => {
    const newDataArray = quiz.map((obj) => ({
      ...obj,
      options: shuffleArray(obj.options),
    }));
    setData(newDataArray);
  }, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/quiz"
          element={
            <QuestionsPage
              data={data}
              currentIndex={currentQIndex}
              setIndex={setCurrentQIndex}
            />
          }
        />
        <Route
          path="results"
          element={
            <Results
              data={data}
              currentIndex={currentQIndex}
              setIndex={setCurrentQIndex}
            />
          }
        />
      </Routes>
      <div className="bubbles">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
