import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../features/countries/countriesSlice.js';
import FlagsGrid from '../components/FlagsGrid.jsx';
import Button from '../components/Button.jsx';

const LearnCountries = () => {
  const { region } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { allCountries, status, error } = useSelector(state => state.countries);
  const [countries, setCountries] = useState([]);

  const regions = ['Europe', 'Asia', 'Oceania', 'Americas', 'Africa'];

  // FETCHA ALL COUNTRIES
  useEffect(() => {
    if (status === 'idle') dispatch(fetchCountries());
  }, [status, dispatch]);

  // FILTER REGION
  useEffect(() => {
    if (!region || allCountries.length === 0) {
      setCountries([]);
      return;
    }
    const filtered = allCountries.filter(
      c => c.region?.toLowerCase() === region.toLowerCase()
    );
    setCountries(filtered);
  }, [region, allCountries]);

  const handleFlagClick = country =>
    navigate(`/country/${encodeURIComponent(country.name.common)}`);

  return (
    <div className="page-container">
      <h2>Learn Countries</h2>

      <h3>Select a region:</h3>
      {regions.map(r => (
        <Button key={r} text={r} link={`/learn/${r}`} />
      ))}

      {status === 'loading' && <p>Loading countries...</p>}
      {status === 'failed' && <p className="error">Error: {error}</p>}

      <FlagsGrid countries={countries} onFlagClick={handleFlagClick} />
    </div>
  );
};

export default LearnCountries;