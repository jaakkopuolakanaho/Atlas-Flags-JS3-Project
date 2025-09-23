import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../features/countries/countriesSlice.js';
import CountryCardDetails from '../components/CountryCardDetails.jsx';

const CountryDetail = () => {
  const { countryName } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { allCountries, status, error } = useSelector(state => state.countries);
  const [country, setCountry] = useState(null);
  const [savedCountries, setSavedCountries] = useState([]);

  const isSaved = country && savedCountries.some(c => c.cca3 === country.cca3);

  // FETCH ALL COUNTRIES NOT LOADED
  useEffect(() => {
    if (status === 'idle') dispatch(fetchCountries());
  }, [status, dispatch]);

  // FIND SELECTED COUNTRY
  useEffect(() => {
    if (!countryName || allCountries.length === 0) return;
    setCountry(
      allCountries.find(c => c.name.common.toLowerCase() === countryName.toLowerCase()) || null
    );
  }, [countryName, allCountries]);

  // LOAD SAVED FROM LOCALSTORAGE
  useEffect(() => {
    setSavedCountries(JSON.parse(localStorage.getItem('savedCountries')) || []);
  }, []);

  // TOGGLE SAVE/REMOVE COUNTRY
  const toggleSaveCountry = () => {
    if (!country) return;
    const updated = isSaved
      ? savedCountries.filter(c => c.cca3 !== country.cca3)
      : [...savedCountries, country];

    localStorage.setItem('savedCountries', JSON.stringify(updated));
    setSavedCountries(updated);
  };

  if (status === 'loading') return <p>Loading country...</p>;
  if (status === 'failed') return <p className="error">Error: {error}</p>;
  if (!country) return <p>Country not found.</p>;

  return (
    <div className="page-container">
      <CountryCardDetails
        country={country}
        isSaved={isSaved}
        toggleSaveCountry={toggleSaveCountry}
        onBack={() => navigate(-1)}
      />
    </div>
  );
};

export default CountryDetail;