const FlagsGrid = ({ countries, onFlagClick, renderExtras }) => (
  <div className="flags-grid">
    {countries.map(c => (
      <div key={c.cca3} className="flag-item" onClick={() => onFlagClick(c)}>
        <img src={c.flags?.png} alt={c.name.common} />
        {renderExtras?.(c)}
      </div>
    ))}
  </div>
);

export default FlagsGrid;