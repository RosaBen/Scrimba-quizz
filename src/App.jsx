// import React Components
import { Routes, Route, useLocation } from "react-router";
import { useState, useEffect } from "react";

// import pages
import Home from "./pages/Home";
import QuestionsPage from "./pages/QuestionsPage";
import Results from "./pages/Results";

// Import scripts
import { quiz } from "./assets/scripts/data";
import { shuffleArray, selectItems, decodeHtml } from "./assets/scripts/utils";

// Styles
import "./assets/styles/index.css";
import "./assets/styles/pages.css";
import "./assets/styles/responsive.css";

function App() {
  const [data, setData] = useState([]);
  const [answers, setAnswers] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple",
    )
      .then((res) => res.json())
      .then((d) => {
        const results = d.results;
        const selectedData = selectItems(results, 5);
        const allData = selectedData.map((q) => {
          const newArray = shuffleArray([
            ...q.incorrect_answers,
            q.correct_answer,
          ]);
          return {
            question: decodeHtml(q.question),
            correct: decodeHtml(q.correct_answer),
            options: newArray,
          };
        });
        setData(allData);
      });
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
              decode={decodeHtml}
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
