import React from 'react';

function Card({ card, onClick }) {
  return (
    <div
      className={`card ${card.flipped || card.matched ? 'flipped' : ''} ${card.matched ? 'matched' : ''}`}
      onClick={onClick}
    >
      {/* Front side (shows emoji/icon) */}
      <div className="front">
        {card.icon}
      </div>
      {/* Back side */}
      <div className="back"></div>
    </div>
  );
}

export default Card;
