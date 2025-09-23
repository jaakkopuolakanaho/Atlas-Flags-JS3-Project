import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../features/countries/countriesSlice.js';
import QuizSetup from '../components/QuizSetup.jsx';
import QuizQuestion from '../components/QuizQuestion.jsx';
import QuizResult from '../components/QuizResult.jsx';

const Quiz = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { allCountries, status, error } = useSelector(state => state.countries);

  const [username, setUsername] = useState('');
  const [region, setRegion] = useState('');
  const [phase, setPhase] = useState('setup');
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);

  // FETCH COUNTRIES IF NOT LOADED
  useEffect(() => {
    if (phase === 'quiz' && status === 'idle') dispatch(fetchCountries());
  }, [phase, status, dispatch]);

  // 15 RANDOM QUESTIONS FOR QUIZ
  useEffect(() => {
    if (phase !== 'quiz' || !region || allCountries.length === 0) return;

    const filtered = allCountries.filter(c => c.region?.toLowerCase() === region.toLowerCase());
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 15));
    setCurrent(0);
    setScore(0);
    setAnswer('');
    setFeedback('');
  }, [phase, region, allCountries]);

  // HANDLE ANSWER + NEXT QUESTION + DELAY FOR ANSWER
  const handleAnswer = () => {
    const correct = questions[current].name.common.toLowerCase();
    const isCorrect = answer.trim().toLowerCase() === correct;

    if (isCorrect) setScore(prev => prev + 1);

    setFeedback(isCorrect ? 'Correct!' : `Wrong! Correct: ${questions[current].name.common}`);

    setTimeout(() => {
      setAnswer('');
      setFeedback('');
      if (current + 1 < questions.length) {
        setCurrent(prev => prev + 1);
      } else {
        setPhase('result');
        const previousResults = JSON.parse(localStorage.getItem('quizResults')) || [];
        localStorage.setItem('quizResults', JSON.stringify([...previousResults, { username, region, score }]));
      }
    }, 1500);
  };

  return (
    <div className="page-container">
      {phase === 'setup' && (
        <QuizSetup
          username={username} setUsername={setUsername}
          region={region} setRegion={setRegion}
              onStart={() => {
          if (!username || !region) return;    
      setPhase('quiz');
    }}

          onQuit={() => navigate('/')}
        />
      )}

      {phase === 'quiz' && status === 'loading' && <p>Loading questions…</p>}
      {phase === 'quiz' && status === 'failed' && <p style={{ color: 'red' }}>Error: {error}</p>}

      {phase === 'quiz' && questions.length > 0 && status === 'succeeded' && (
        <QuizQuestion
          question={questions[current]}
          current={current}
          total={questions.length}
          answer={answer} setAnswer={setAnswer}
          feedback={feedback}
          onAnswer={handleAnswer}
          onQuit={() => navigate('/')}
        />

      )}

      {phase === 'result' && (
        <QuizResult
          username={username}
          score={score}
          total={questions.length}
          onBack={() => setPhase('setup')}
        />
      )}
    </div>
  );
};

export default Quiz;