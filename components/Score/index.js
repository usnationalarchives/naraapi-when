import React from 'react';
import PropTypes from 'prop-types';

const Score = ({score, scoreType}) => {

  let scoreStyle;

  switch (scoreType) {
    case 'runningScore':
      scoreStyle = {
        float: 'left',
        marginTop: 1.2 + 'rem',
        fontWeight: '700',
        color: '#132f50',
        fontSize: 1.8 + 'rem',
        height: 2.4 + 'rem'
      }
      break;
    case 'finalScore':
      scoreStyle = {
        marginTop: 1.2 + 'rem',
        fontWeight: '700',
        color: '#ffffff',
        fontSize: 9 + 'rem',
        height: 'auto'
      }
      break;
    default:
      scoreStyle = {

      }
      break;
  }

  return (
    <div>
      <img src={"/static/star.png"} alt={""} />
      <span>{score}</span>
      <style jsx>{`
        div {
          float:${scoreStyle.float ? scoreStyle.float : 'none'};
          margin-top:${scoreStyle.marginTop ? scoreStyle.marginTop : 0};
          font-weight:${scoreStyle.fontWeight ? scoreStyle.fontWeight : 'normal'};
          color:${scoreStyle.color ? scoreStyle.color : '#132f50'};
          font-size:${scoreStyle.fontSize ? scoreStyle.fontSize : 0};
          height:${scoreStyle.height ? scoreStyle.height : 'auto'};
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
  score: PropTypes.number.isRequired,
  scoreType: PropTypes.oneOf(['runningScore', 'finalScore']).isRequired
}

export default Score;
