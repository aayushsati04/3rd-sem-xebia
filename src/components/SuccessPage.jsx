import React from 'react';

const SuccessPage = ({ bus, onBack }) => {
  return (
    <div className="bus-card">
      <h2>🎉 Booking Confirmed!</h2>
      <p><strong>Bus:</strong> {bus.name}</p>
      <p><strong>Route:</strong> {bus.from} → {bus.to}</p>
      <p><strong>Time:</strong> {bus.time}</p>
      <p><strong>Price:</strong> {bus.price}</p>
      <button onClick={onBack}>Search Again</button>
    </div>
  );
};

export default SuccessPage;
