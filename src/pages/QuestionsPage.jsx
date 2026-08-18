import Questions from "../components/Questions";

export default function QuestionsPage({ data, currentIndex, setIndex }) {
  return (
    <main className="quiz-page">
      <Questions data={data} currentIndex={currentIndex} setIndex={setIndex} />
      <a href="/answers">Check answers</a>
    </main>
  );
}
