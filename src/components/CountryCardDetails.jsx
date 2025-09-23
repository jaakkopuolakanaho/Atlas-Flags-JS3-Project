import Button from './Button.jsx';

const CountryCardDetails = ({ country, isSaved, toggleSaveCountry, onBack }) => {
  if (!country) return null;

  const currency = Object.values(country.currencies ?? {})[0]?.name ?? 'N/A';
  const capital = country.capital?.join(', ') ?? 'N/A';

  return (
    <div className="country-card">
      <Button text="← Back" onClick={onBack} />

      <h2>{country.name.common}</h2>
      <img src={country.flags?.png} alt={country.name.common} width="200" />
      <p>Population: {country.population?.toLocaleString() ?? 'N/A'}</p>
      <p>Capital: {capital}</p>
      <p>Currency: {currency}</p>
      <p>
        <a href={country.maps?.googleMaps} target="_blank" rel="noopener noreferrer">
          View on Google Maps
        </a>
      </p>

      <Button
        text={isSaved ? 'Remove from Collection' : 'Add to Collection'}
        onClick={toggleSaveCountry}
      />
    </div>
  );
};

export default CountryCardDetails;