// import React Components
import { Routes, Route, useLocation } from "react-router";
import { useState, useEffect } from "react";

// import pages
import Home from "./pages/Home";
import QuestionsPage from "./pages/QuestionsPage";
import Results from "./pages/Results";

// Import scripts
import { quiz, difficulty } from "./assets/scripts/data";
import {
  shuffleArray,
  selectItems,
  randomInt,
  fetchquiz,
} from "./assets/scripts/utils";

// Styles/images
import "./assets/styles/index.css";
import "./assets/styles/pages.css";
import "./assets/styles/responsive.css";
import "./assets/styles/loader.css";
import loader from "./assets/images/loader.svg";

function App() {
  const [data, setData] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    async function loadQuiz() {
      try {
        const result = await fetchquiz(difficulty);
        const allData = result.map((q) => {
          const newArray = shuffleArray([
            ...q.incorrect_answers,
            q.correct_answer,
          ]);
          return {
            question: q.question,
            correct: q.correct_answer,
            options: newArray,
          };
        });
        setData(allData);
        setLoading(true);
      } catch (error) {
        console.error(error);
      }
    }
    loadQuiz();
  }, []);

  if (!loading) {
    return (
      <div className="loader">
        <svg
          class="ap"
          viewBox="0 0 128 256"
          width="128px"
          height="256px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="ap-grad1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="hsl(223,90%,55%)" />
              <stop offset="100%" stop-color="hsl(253,90%,55%)" />
            </linearGradient>
            <linearGradient id="ap-grad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="hsl(193,90%,55%)" />
              <stop offset="50%" stop-color="hsl(223,90%,55%)" />
              <stop offset="100%" stop-color="hsl(253,90%,55%)" />
            </linearGradient>
          </defs>
          <circle
            class="ap__ring"
            r="56"
            cx="64"
            cy="192"
            fill="none"
            stroke="#ddd"
            stroke-width="16"
            stroke-linecap="round"
          />
          <circle
            class="ap__worm1"
            r="56"
            cx="64"
            cy="192"
            fill="none"
            stroke="url(#ap-grad1)"
            stroke-width="16"
            stroke-linecap="round"
            stroke-dasharray="87.96 263.89"
          />
          <path
            class="ap__worm2"
            d="M120,192A56,56,0,0,1,8,192C8,161.07,16,8,64,8S120,161.07,120,192Z"
            fill="none"
            stroke="url(#ap-grad2)"
            stroke-width="16"
            stroke-linecap="round"
            stroke-dasharray="87.96 494"
          />
        </svg>
      </div>
    );
  }

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
