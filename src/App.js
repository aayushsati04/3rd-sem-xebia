import React, { useState } from 'react';
import './App.css';
import { busData, cities } from './data';
import SearchForm from './components/SearchForm';
import BusCard from './components/BusCard';
import SuccessPage from './components/SuccessPage';

function App() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [results, setResults] = useState([]);
  const [successBus, setSuccessBus] = useState(null);

  const handleSearch = () => {
    const filtered = busData.filter(
      (bus) =>
        bus.from.toLowerCase().trim() === from.toLowerCase().trim() &&
        bus.to.toLowerCase().trim() === to.toLowerCase().trim()
    );
    setResults(filtered);
  };

  const handleBooking = (bus) => {
    setSuccessBus(bus);
  };

  const goBack = () => {
    setSuccessBus(null);
    setFrom('');
    setTo('');
    setResults([]);
  };

  return (
    <div className="app">
      <h1>🚌 <span style={{ color: "#007bff" }}>QuickBus</span></h1>
      {!successBus ? (
        <>
          <SearchForm from={from} to={to} setFrom={setFrom} setTo={setTo} onSearch={handleSearch} cities={cities} />
          <div className="results">
            {results.length > 0
              ? results.map((bus, i) => <BusCard key={i} bus={bus} onBook={() => handleBooking(bus)} />)
              : <p>No buses found</p>}
          </div>
        </>
      ) : (
        <SuccessPage bus={successBus} onBack={goBack} />
      )}
    </div>
  );
}

export default App;
