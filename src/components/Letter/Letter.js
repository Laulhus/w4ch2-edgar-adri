const Letter = ({ letter, actionOnClick }) => {
  return (
    <li className="letter" onClick={actionOnClick}>
      {letter}
    </li>
  );
};

export default Letter;
