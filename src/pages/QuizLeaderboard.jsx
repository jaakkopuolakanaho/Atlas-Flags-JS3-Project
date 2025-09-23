import { useState, useEffect } from 'react';
import Button from '../components/Button.jsx';
import Leaderboard from '../components/Leaderboard.jsx';

const regions = ['Europe', 'Asia', 'Oceania', 'Americas', 'Africa'];

const QuizLeaderboard = () => {
  const [results, setResults] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('Europe');

  // LOAD SAVED RESULTS FROM LOCALSTORAGE
  useEffect(() => {
    setResults(JSON.parse(localStorage.getItem('quizResults')) || []);
  }, []);

  // FILTER + SORT RESULTS
  const filteredResults = results
    .filter(r => r.region === selectedRegion)
    .sort((a, b) => b.score - a.score);

  return (
    <div className="page-container">
      <h2>Quiz Leaderboard</h2>

      <h3>Select Region:</h3>
      {regions.map(r => (
        <Button key={r} text={r} onClick={() => setSelectedRegion(r)} />
      ))}

      <Leaderboard results={filteredResults} />
    </div>
  );
};

export default QuizLeaderboard;