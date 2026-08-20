// import React Components
import { Routes, Route, useLocation } from "react-router";
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
  const [answers, setAnswers] = useState([]);
  const { pathname } = useLocation();

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
              path={pathname}
              answers={answers}
              setAnswers={setAnswers}
            />
          }
        />
        <Route
          path="results"
          element={
            <Results
              data={data}
              answers={answers}
              setAnswers={setAnswers}
              path={pathname}
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
