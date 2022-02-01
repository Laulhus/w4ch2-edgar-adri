
import { useState } from "react";
import "./App.css";
import Letter from "./components/Letter/Letter";
import GameResult from "./components/GameResult/GameResult";
import GuessWord from "./components/GuessWord/GuessWord";
import Hangman from "./components/Hangman/Hangman";
function App() {
  const gameWord = "prueba";
  //const [usedLetters, setUsedLetters] = useState([]);

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


  const clickLetter = (clickedletter) => {
    setUsedLetters(usedLetters.push(clickedletter));
  };


  return (
    <div className="App">
      <div className="hangman-container">
        <Hangman errorCounter={7} />
      </div>
      <ul className="guess-letters">
        <GuessWord word={gameWord} usedLetters={usedLetters} />
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
          <Letter key={letter} letter={letter} actionOnClick={clickLetter} />
        ))}
      </ul>
    </div>
  );
}

export default App;
