import { Link } from "react-router";

export default function Home() {
  return (
    <main className="homepage">
      <h1>Quizzical</h1>
      <p>
        Select one answer for each question, and see how many answers are
        correct
      </p>
      <Link to="/quiz" target="_blank" rel="noopener noreferrer">
        Start Quiz
      </Link>
    </main>
  );
}
