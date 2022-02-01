import PropTypes from "prop-types";

const UsedLetter = ({ usedLetter }) => {
  return <li className="used-letter">{usedLetter},&nbsp;</li>;
};

UsedLetter.propTypes = {
  usedLetter: PropTypes.string,
};

export default UsedLetter;
