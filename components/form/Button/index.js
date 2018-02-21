import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ btnText, onClick, btnValue, btnName, btnClass }) => {
  return(
    <button onClick={onClick} value={btnValue} name={btnName} className={btnClass}>
      {btnText}
      <style jsx>{`
        
        button {
          -webkit-font-smoothing:inherit;
          -moz-osx-font-smoothing:inherit;
          -webkit-appearance:none;
          font:inherit;
          line-height:normal;
          width:auto;
          border:0;
          border-radius:2.5rem;
          margin:0;
          padding:1.5rem 4rem;
          box-shadow:0 0.3rem 0.6rem rgba( 0, 0, 0, 0.4 );
          outline:none;
          transition:all 0.2s;
        }

        // multiple choice buttons
        .choice {
          display:block;
          width:45%;
          font-weight:700;
          font-size:1.8rem;
          margin:1rem 2.5%;
          padding:1rem;
        }

        // blue backgrounds
        .primary {
          background:#112e51;
          color:#fff;
          font-weight:600;
          text-transform:uppercase;
          letter-spacing:0.1rem;
          font-size:1.3rem;
        }
        .primary:active {
          background:#9bdaf1;
          color:#112e51;
          outline:none;
          box-shadow:inset 0.1rem 0.1rem 0.3rem #000;
        }
        .primary:after {
          content:'';
          display:inline-block;
          width:1rem;
          height:1rem;
          margin-top:0.2rem;
          margin-left:0.5rem;
          border:0.3rem solid #fff;
          border-left:0;
          border-top:0;
          transform:rotate(-45deg);
          float:right;
          transition:border-color 0.2s;
        }
        .primary:active:after {
          border-color:#112e51;
        }

      `}</style>
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