import React, { useState, useEffect } from 'react';

function Scoreboard({ score, moves, onReset }) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  useEffect(() => {
    setSeconds(0);
  }, [onReset]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const secs = time % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  return (
    <div className="scoreboard">
      <div>⏰ Time: {formatTime(seconds)}</div>
      <div>💖 Moves: {moves}</div>
      <div>🌟 Score: {score}</div>
      <button className="reset" onClick={onReset}>Reset</button>
    </div>
  );
}

export default Scoreboard;

