import { Link } from "react-router";
import Questions from "../components/Questions";
export default function Results({ data, answers, setAnswers, path }) {
  return (
    <main className="results-page">
      <Questions
        data={data}
        path={path}
        answers={answers}
        setAnswers={setAnswers}
      />
      <div className="score">
        <p>You scored 3/5 correct answers</p>
        <Link to="/">Play again</Link>
      </div>
    </main>
  );
}
