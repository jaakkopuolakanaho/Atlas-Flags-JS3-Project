import Button from './Button.jsx';

const regions = ['Europe', 'Asia', 'Oceania', 'Americas', 'Africa'];

const QuizSetup = ({ username, setUsername, region, setRegion, onStart, onQuit }) => (
  <>
    <h2>Start Quiz</h2>

    <div className="quiz-input">
      <input
        className="quiz-field"
        placeholder="Enter username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

      <select
        className="quiz-field"
        value={region}
        onChange={e => setRegion(e.target.value)}
      >
      <option value="">Select region</option>
        {regions.map(r => (
          <option key={r} value={r}>{r}</option>
        ))}
      </select>
    </div>

    {(!username || !region) && (
      <p style={{ color: 'red', marginBottom: '10px' }}>
        Please enter a username and select a region to start.
      </p>
    )}

    <Button text="Start Quiz" onClick={onStart} disabled={!username || !region} />
    <Button text="Quit Quiz" onClick={onQuit} />
  </>
);

export default QuizSetup;