import React, { useState } from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard';
import GameBoard from './components/GameBoard';

function App() {
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [resetGame, setResetGame] = useState(false);

  const handleReset = () => {
    setScore(0);
    setMoves(0);
    setResetGame(prev => !prev); 
  };

  return (
    <div className="App">
      <h1>Space Memory</h1>
      <Scoreboard score={score} moves={moves} onReset={handleReset} />
      <GameBoard setScore={setScore} setMoves={setMoves} resetGame={resetGame} />
    </div>
  );
}

export default App;

