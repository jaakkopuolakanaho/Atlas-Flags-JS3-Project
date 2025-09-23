import Button from './Button.jsx';

const QuizResult = ({ username, score, total, onBack }) => (
  <div>
    <h2>Quiz Complete!</h2>
    <p>{username}, you scored {score} / {total}</p>
    <Button text="Back to Start" onClick={onBack} />
  </div>
);

export default QuizResult;