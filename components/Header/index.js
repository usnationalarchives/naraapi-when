import React from 'react';
import PropTypes from 'prop-types';

import Score from '../Score';
import Timer from '../Timer';

const Header = ({ gameTime, endGame, size, score, scoreType }) => {
  return (
    <div>
      <Timer
        gameTime={gameTime}
        endGame={endGame}
        size={50}
      />
      <Score
        score={score}
        scoreType={'runningScore'}
      />
      <style jsx>{`
        div {
          padding:4rem 4rem 2rem;
        }
        div:after {
          content:'';
          clear:both;
          display:table;
        }
      `}</style>
    </div>
  );
};

Header.propTypes = {
  gameTime: PropTypes.number.isRequired,
  endGame: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  scoreType: PropTypes.oneOf(['runningScore', 'finalScore']).isRequired
};

export default Header;
