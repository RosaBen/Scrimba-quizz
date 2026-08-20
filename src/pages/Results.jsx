import { Link } from "react-router";
import Questions from "../components/Questions";
export default function Results({
  data,
  // currentIndex,
  // setIndex,
  path,
}) {
  return (
    <main className="results-page">
      <Questions
        data={data}
        // currentIndex={currentIndex}
        // setIndex={setIndex}
        path={path}
      />
      <div className="score">
        <p>You scored 3/5 correct answers</p>
        <Link to="/">Play again</Link>
      </div>
    </main>
  );
}
