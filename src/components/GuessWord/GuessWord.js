//import PropTypes from "prop-types";

const GuessWord = ({ word, usedLetters }) => {
  const letters = Array.from(word.toUpperCase());
  return letters.map((letter) => {
    return (
      <li
        className={`guess-letter ${
          usedLetters.some((usedLetter) => letter === usedLetter) ? "" : "empty"
        }`}
      >
        {usedLetters.some((usedLetter) => letter === usedLetter) ? letter : ""}
      </li>
    );
  });
};

// GuessWord.propTypes = { word: PropTypes.string.isRequired };
export default GuessWord;
