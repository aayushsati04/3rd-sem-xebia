import React from 'react';

const BusCard = ({ bus, onBook }) => {
  return (
    <div className="bus-card">
      <h3>{bus.name}</h3>
      <p>{bus.from} ➡ {bus.to}</p>
      <p>🕒 {bus.time} | 💰 {bus.price}</p>
      <button onClick={onBook}>Book Now</button>
    </div>
  );
};

export default BusCard;
