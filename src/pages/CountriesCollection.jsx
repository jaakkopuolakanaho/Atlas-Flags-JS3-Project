import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FlagsGrid from '../components/FlagsGrid.jsx';
import Button from '../components/Button.jsx';

const CountriesCollection = () => {
  const [savedCountries, setSavedCountries] = useState([]);
  const navigate = useNavigate();

  // LOAD SAVED COUNTRIES FROM LOCALSTORAGE
  useEffect(() => {
    setSavedCountries(JSON.parse(localStorage.getItem('savedCountries')) || []);
  }, []);

  // REMOVE SAVED COUNTRY FROM LOCALSTORAGE
  const removeCountry = (cca3) => {
    const updated = savedCountries.filter(c => c.cca3 !== cca3);
    localStorage.setItem('savedCountries', JSON.stringify(updated));
    setSavedCountries(updated);
  };

  const handleFlagClick = (country) =>
    navigate(`/country/${encodeURIComponent(country.name.common)}`);

  return (
    <div className="page-container">
      <h2>Saved Countries Collection</h2>
      {savedCountries.length === 0 && <p>No countries saved yet.</p>}

      <FlagsGrid
        countries={savedCountries}
        onFlagClick={handleFlagClick}
        renderExtras={(country) => (
          <Button
            text="X"
            onClick={(e) => { e.stopPropagation(); removeCountry(country.cca3); }}
          />
        )}
      />
    </div>
  );
};

export default CountriesCollection;