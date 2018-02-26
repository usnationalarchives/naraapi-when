import React from 'react';
import PropTypes from 'prop-types';

const Button = (
  { btnText,
    onClick,
    btnValue,
    btnName,
    btnType }) => {

    let btnState = {};

    switch (btnType) {
      case 'choice':
        btnState = {
          display: 'block',
          width: 45 + '%',
          fontWeight: 700,
          fontSize: 1.8,
          backgroundColor: '#fff',
          color: '#9bdaf1',
          padding: [1,1,1,1],
          margin: [1 + 'rem',2.5 + '%',1 + 'rem',2.5 + '%'],
          active:{}
        }
        break;
      default:
        btnState = {
          display: 'inline-block',
          margin: [0,0,0,0],
          padding: [1.5, 4, 1.5, 4],
          backgroundColor: '#112e51',
          color: '#fff',
          textTransform: 'uppercase',
          letterSpacing: 0.1,
          after: {
            content: '""',
            active: {
              borderColor: '#112e51'
            }
          },
          active: {
            backgroundColor: '#9bdaf1',
            color: '#112e51',
            outline: 'none',
            boxShadow: 'inset 0.1rem 0.1rem 0.3rem #000'
          }
        }
    }
  return(
    <button onClick={onClick} value={btnValue} name={btnName}>
      {btnText}
      <style jsx>{`
        button {
          border-radius:2.5rem;
          border:0;
          -webkit-font-smoothing:inherit;
          -moz-osx-font-smoothing:inherit;
          -webkit-appearance:none;
          font:inherit;
          line-height:normal;
          box-shadow:0 0.3rem 0.6rem rgba( 0, 0, 0, 0.4 );
          outline:none;
          transition:all 0.2s;
        }
        button::after {
          display:inline-block;
          width:1rem;
          height:1rem;
          margin-top:0.2rem;
          border:0.3rem solid #fff;
          border-left:0;
          border-top:0;
          transform:rotate(-45deg);
          float:right;
          transition:border-color 0.2s;
        }
        button::active::after {
          border-color:#112e51;
        }
      `}</style>
      <style jsx>{`
        button {
          display:${btnState.display};
          width:${btnState.width ? btnState.width : 'auto'};
          font-size:${btnState.fontSize ? btnState.fontSize  + 'rem' : 1.3 + 'rem'};
          font-weight:${btnState.fontWeight ? btnState.fontWeight : 600};
          background-color:${btnState.backgroundColor};
          color:${btnState.color};
          padding-top:${btnState.padding[0] + 'rem'};
          padding-right:${btnState.padding[1] + 'rem'};
          padding-bottom:${btnState.padding[2] + 'rem'};
          padding-left:${btnState.padding[3] + 'rem'};
          margin-top:${btnState.margin[0]};
          margin-right:${btnState.margin[1]};
          margin-bottom:${btnState.margin[2]};
          margin-left:${btnState.margin[3]};
          text-transform:${btnState.textTransform ? btnState.textTransform : 'auto'};
          letter-spacing: ${btnState.letterSpacing ? btnState.letterSpacing + 'rem' : 0};
        }
        button:active {
          background:${btnState.active.backgroundColor ? btnState.active.backgroundColor : '#fff'};
          color:${btnState.active.color ? btnState.active.color : '#112e51'};
          outline:${btnState.active.outline ? btnState.active.outline : 'none'};
          box-shadow:${btnState.active.boxShadow ? btnState.active.boxShadow : 'none'};
        }
        button::after {
          content:${btnState.after ? btnState.after.content : ''};
        }
        button:active::after {
          border-color:${btnState.after ? btnState.after.active.borderColor : 'transparent'}
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