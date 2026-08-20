import Questions from "../components/Questions";
import { Link } from "react-router";

export default function QuestionsPage({ data, path, answers, setAnswers }) {
  return (
    <main className="quiz-page">
      <Questions
        data={data}
        path={path}
        answers={answers}
        setAnswers={setAnswers}
      />
      <Link to="/results">Check answers</Link>
    </main>
  );
}
