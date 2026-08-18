export default function Questions({ data, currentIndex, setIndex }) {
  const questionsList = data.map((q, index) => {
    const optionsList = q.options.map((opt, i) => {
      return <button key={i}>{opt}</button>;
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
