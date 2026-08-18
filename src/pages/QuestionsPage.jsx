import Questions from "../components/Questions";
import { Link } from "react-router";

export default function QuestionsPage({ data, currentIndex, setIndex }) {
  return (
    <main className="quiz-page">
      <Questions data={data} currentIndex={currentIndex} setIndex={setIndex} />
      <Link to="/results">Check answers</Link>
    </main>
  );
}
