import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ btnText, onClick, btnValue, btnName }) => {
  return(
    <button onClick={onClick} value={btnValue} name={btnName}>
      {btnText}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
  btnName: PropTypes.string,
  btnValue: PropTypes.string
};

export default Button;