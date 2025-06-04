import React, { useState, useEffect } from 'react';
import Card from './Card';

const icons = ["🚀", "👩‍🚀", "🛸", "🌌", "🌙", "⭐️", "☄️", "🌍"];

function shuffleCards() {
  const pairedIcons = [...icons, ...icons];
  for (let i = pairedIcons.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pairedIcons[i], pairedIcons[j]] = [pairedIcons[j], pairedIcons[i]];
  }
  return pairedIcons.map((icon, index) => ({ id: index, icon, flipped: false, matched: false }));
}

function GameBoard({ setScore, setMoves, resetGame }) {
  const [cards, setCards] = useState(shuffleCards());
  const [flippedCards, setFlippedCards] = useState([]);

  useEffect(() => {
    setCards(shuffleCards());
    setFlippedCards([]);
  }, [resetGame]);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      if (cards[first].icon === cards[second].icon) {
        const newCards = cards.map((card, index) => {
          if (index === first || index === second) {
            return { ...card, matched: true };
          }
          return card;
        });
        setCards(newCards);
        setScore(prev => prev + 100);
      } else {
        setTimeout(() => {
          const newCards = cards.map(card => {
            if (card.id === first || card.id === second) {
              return { ...card, flipped: false };
            }
            return card;
          });
          setCards(newCards);
          setScore(prev => prev - 10);
        }, 1000);
      }
      setMoves(prev => prev + 1);
      setFlippedCards([]);
    }
  }, [flippedCards, cards, setScore, setMoves]);

  const handleCardClick = (index) => {
    if (flippedCards.length < 2 && !cards[index].flipped && !cards[index].matched) {
      const newCards = [...cards];
      newCards[index].flipped = true;
      setCards(newCards);
      setFlippedCards(prev => [...prev, index]);
    }
  };

  return (
    <div className="game-board">
      {cards.map((card, index) => (
        <Card key={index} card={card} onClick={() => handleCardClick(index)} />
      ))}
    </div>
  );
}

export default GameBoard;
