import clsx from "clsx";
import { useEffect } from "react";
import { decodeHtml } from "../assets/scripts/utils";

export default function Questions({ data, path, answers, setAnswers }) {
  const questionsList = data.map((q, index) => {
    const currentQuestion = index;
    const correctAnswer = q.correct;
    let classOption;
    const optionsList = q.options.map((opt, i) => {
      function handleSelect(value, questionIndex) {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = value;
        setAnswers(newAnswers);
      }
      if (path === "/quiz") {
        classOption =
          answers.includes(opt) && path === "/quiz"
            ? clsx("option", "answer")
            : clsx("option");
      } else if (path === "/results") {
        if (
          (opt === answers[index] && answers[index] === correctAnswer) ||
          opt === correctAnswer
        ) {
          classOption = clsx("option", "correct");
        } else if (opt === answers[index] && answers[index] !== correctAnswer) {
          classOption = clsx("option", "incorrect");
        } else {
          classOption = clsx("option");
        }
      }
      return (
        <button
          key={i}
          onClick={() => handleSelect(opt, currentQuestion)}
          className={classOption}
          disabled={path === "/results" ? "disabled" : ""}
        >
          {decodeHtml(opt)}
        </button>
      );
    });

    return (
      <div className={`question${index} question`} key={index}>
        <p>{decodeHtml(q.question)}</p>
        <div className="options-btn">{optionsList}</div>
      </div>
    );
  });
  return <div className="questions">{questionsList}</div>;
}
