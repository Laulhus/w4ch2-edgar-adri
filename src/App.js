/* import { useState } from "react"; */
import "./App.css";
import GameResult from "./GameResult/GameResult";

function App() {
  /*   const gameWord = "string";
  const [usedLetters, setUsedLetters] = useState([]);
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
  const [gameStatus, setGameStatus] = useState(null);
  const [errorCounter, setErrorCounter] = useState(0); */

  return (
    <div className="App">
      <div className="hangman-container">
        <svg className="hangman" viewBox="0 0 96 96" width="300" height="300">
          <line className="stage11" x1="62" y1="70" x2="56" y2="56"></line>
          <line className="stage10" x1="50" y1="70" x2="56" y2="56"></line>
          <line className="stage9" x1="68" y1="46" x2="56" y2="40"></line>
          <line className="stage8" x1="44" y1="46" x2="56" y2="40"></line>
          <line className="stage7" x1="56" y1="40" x2="56" y2="56"></line>
          <circle
            className="stage6"
            cx="56"
            cy="34"
            r="6"
            fill="#bee5eb"
          ></circle>
          <line className="stage5" x1="56" y1="16" x2="56" y2="28"></line>
          <line className="stage4" x1="24" y1="24" x2="32" y2="16"></line>
          <line className="stage3" x1="21" y1="16" x2="60" y2="16"></line>
          <line className="stage2" x1="24" y1="80" x2="24" y2="16"></line>
          <line className="stage1" x1="16" y1="80" x2="32" y2="80"></line>
        </svg>
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
        <li className="letter">
          <a href="a">A</a>
        </li>
        <li className="letter">
          <a href="b">B</a>
        </li>
        <li className="letter">
          <a href="c">C</a>
        </li>
        <li className="letter">
          <a href="d">D</a>
        </li>
        <li className="letter">
          <a href="e">E</a>
        </li>
        <li className="letter">
          <a href="f">F</a>
        </li>
        <li className="letter">
          <a href="g">G</a>
        </li>
        <li className="letter">
          <a href="h">H</a>
        </li>
        <li className="letter">
          <a href="i">I</a>
        </li>
        <li className="letter">
          <a href="j">J</a>
        </li>
        <li className="letter">
          <a href="k">K</a>
        </li>
        <li className="letter">
          <a href="l">L</a>
        </li>
        <li className="letter">
          <a href="m">M</a>
        </li>
        <li className="letter">
          <a href="n">N</a>
        </li>
        <li className="letter">
          <a href="ñ">Ñ</a>
        </li>
        <li className="letter">
          <a href="o">O</a>
        </li>
        <li className="letter">
          <a href="p">P</a>
        </li>
        <li className="letter">
          <a href="q">Q</a>
        </li>
        <li className="letter">
          <a href="r">R</a>
        </li>
        <li className="letter">
          <a href="s">S</a>
        </li>
        <li className="letter">
          <a href="t">T</a>
        </li>
        <li className="letter">
          <a href="u">U</a>
        </li>
        <li className="letter">
          <a href="v">V</a>
        </li>
        <li className="letter">
          <a href="w">W</a>
        </li>
        <li className="letter">
          <a href="x">X</a>
        </li>
        <li className="letter">
          <a href="y">Y</a>
        </li>
        <li className="letter">
          <a href="z">Z</a>
        </li>
      </ul>
    </div>
  );
}

export default App;
