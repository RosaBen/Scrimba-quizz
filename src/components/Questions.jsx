import clsx from "clsx";

export default function Questions({
  data,
  // currentIndex,
  // setIndex,
  path,
  answers,
  setAnswers,
}) {
  const questionsList = data.map((q, index) => {
    const currentQuestion = index;
    const correctAnswer = q.correct;
    console.log(correctAnswer);
    const optionsList = q.options.map((opt, i) => {
      let classOption;
      function handleSelect(value, questionIndex) {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = value;
        setAnswers(newAnswers);
      }
      if (answers.includes(opt) && path === "/quiz") {
        classOption = clsx("option", "answer");
      } else {
        classOption = clsx("option");
      }

      return (
        <button
          key={i}
          onClick={() => handleSelect(opt, currentQuestion)}
          className={classOption}
        >
          {opt}
        </button>
      );
    });
    return (
      <div className={`question${index} question`} key={index}>
        <p>{q.question}</p>
        <div className="options-btn">{optionsList}</div>
      </div>
    );
  });
  return <div className="questions">{questionsList}</div>;
}
