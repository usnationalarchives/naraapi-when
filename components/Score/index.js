import React from 'react';
import PropTypes from 'prop-types';

const Score = ({score}) => {

  return (
    <div>
      {score}
    </div>
  );
}

Score.propTypes = {
  score: PropTypes.number.isRequired
}

export default Score;