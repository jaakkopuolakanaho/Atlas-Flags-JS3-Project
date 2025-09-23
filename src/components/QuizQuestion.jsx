import Button from './Button.jsx';

const QuizQuestion = ({
  question,
  current,
  total,
  answer,
  setAnswer,
  feedback,
  onAnswer,
  onNext,
  onQuit
}) => (
  <div className="page-container">
    <h3>Question {current + 1} / {total}</h3>

    <img
      src={question.flags?.png}
      alt="country flag"
      width="200"
    />

    <div className="quiz-input">
      <input
        className="quiz-field"
        placeholder="Type country name"
        value={answer}
        onChange={e => setAnswer(e.target.value)}
      />
    </div>

    <div>
      <Button text="Answer" onClick={onAnswer} disabled={!!feedback} />
      <Button text="Next Question" onClick={onNext} disabled={!feedback} />
      <Button text="Quit Quiz" onClick={onQuit} />
    </div>

    {feedback && <p className="quiz-feedback">{feedback}</p>}
  </div>
);

export default QuizQuestion;