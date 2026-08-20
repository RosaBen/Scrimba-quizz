import { Link } from "react-router";
import Questions from "../components/Questions";
export default function Results({ data, answers, setAnswers, path }) {
  const score = answers.reduce((total, answer, index) => {
    console.log(data[index].correct, answer);
    return answer === data[index].correct ? total + 1 : total;
  }, 0);

  return (
    <main className="results-page">
      <Questions
        data={data}
        path={path}
        answers={answers}
        setAnswers={setAnswers}
      />
      <div className="score">
        <p>You scored correct {`${score}/${data.length}`} answers</p>
        <Link to="/">Play again</Link>
      </div>
    </main>
  );
}
