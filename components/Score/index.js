import React from 'react';
import PropTypes from 'prop-types';

const Score = ({score}) => {

  return (
    <div>
      {score}
      <style jsx>{`
        div {
          float:left;
          margin-top:1.2rem;
          font-weight:700;
          color:#132f50;
          font-size:1.8rem;
        }
      `}</style>
    </div>
  );
}

Score.propTypes = {
  score: PropTypes.number.isRequired
}

export default Score;