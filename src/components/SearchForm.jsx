import React from 'react';

const SearchForm = ({ from, to, setFrom, setTo, onSearch, cities }) => {
  return (
    <div className="search-form">
      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        <option value="">From</option>
        {cities.map((city, i) => (
          <option key={i} value={city}>{city}</option>
        ))}
      </select>

      <select value={to} onChange={(e) => setTo(e.target.value)}>
        <option value="">To</option>
        {cities.map((city, i) => (
          <option key={i} value={city}>{city}</option>
        ))}
      </select>

      <button onClick={onSearch}>Search Buses</button>
    </div>
  );
};

export default SearchForm;
