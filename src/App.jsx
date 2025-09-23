import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu.jsx';
import LearnCountries from './pages/LearnCountries.jsx';
import CountryDetail from './pages/CountryDetail.jsx';
import CountriesCollection from './pages/CountriesCollection.jsx';
import Quiz from './pages/Quiz.jsx';
import QuizLeaderboard from './pages/QuizLeaderboard.jsx';

function App() {
  return (
    <Router>

      <Menu />

        <Routes>
          <Route path="/" element={<div>Welcome! Select a page above.</div>}/>
          <Route path="/learn" element={<LearnCountries />} />
          <Route path="/learn/:region" element={<LearnCountries />} /> 
          <Route path="/collection" element={<CountriesCollection />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/leaderboard" element={<QuizLeaderboard />} />
          <Route path="/country/:countryName" element={<CountryDetail />} />
        </Routes>
    </Router>
  );
}

export default App;