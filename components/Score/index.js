import React from 'react';
import PropTypes from 'prop-types';

const Score = ({score}) => {

  return (
    <div>
      <img src={"/static/star.png"} alt={""} />
      <span>{score}</span>
      <style jsx>{`
        div {
          float:left;
          margin-top:1.2rem;
          font-weight:700;
          color:#132f50;
          font-size:1.8rem;
          height:2.4rem;
        }
        img {
          width:2.4rem;
          height:2.4rem;
          margin-right:0.8rem;
        }
        span {
          line-height:2.4rem;
          vertical-align:top;
        }
      `}</style>
    </div>
  );
}

Score.propTypes = {
  score: PropTypes.number.isRequired
}

export default Score;