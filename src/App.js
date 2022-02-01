// import { useState } from "react";
import "./App.css";
import Letter from "./components/Letter/Letter";
import GameResult from "./components/GameResult/GameResult";
import Hangman from "./components/Hangman/Hangman";

function App() {
  // const gameWord = "string";
  // const [usedLetters, setUsedLetters] = useState([]);
  const abecedary = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "Ñ",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  // const [gameStatus, setGameStatus] = useState(null);
  // const [errorCounter, setErrorCounter] = useState(0);

  return (
    <div className="App">
      <div className="hangman-container">
        <Hangman errorCounter={7} />
      </div>
      <ul className="guess-letters">
        <li className="guess-letter empty"></li>
        <li className="guess-letter">A</li>
        <li className="guess-letter empty"></li>
        <li className="guess-letter">A</li>
        <li className="guess-letter empty"></li>
      </ul>
      <section className="used-letters-container">
        <h2>Used letters</h2>
        <ul className="used-letters">
          <li className="used-letter">B,&nbsp;</li>
          <li className="used-letter">B,&nbsp;</li>
          <li className="used-letter">B</li>
        </ul>
      </section>
      <GameResult />
      <ul className="letters">
        {abecedary.map((letter) => (
          <Letter letter={letter} />
        ))}
      </ul>
    </div>
  );
}

export default App;
