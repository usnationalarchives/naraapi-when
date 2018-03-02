import React from 'react';
import PropTypes from 'prop-types';

const Button = (
  { onClick,
    btnText,
    btnRole,
    btnName,
    btnValue,
    btnColor,
    clicked }) => {

  let btnStyle;
  
  const color = {
    blue: {
      backgroundColor: '#112e51',
      color: '#ffffff',
      activeBackground: '#9bdaf1',
      activeColor: '#112e51'
    },
    white: {
      backgroundColor: '#ffffff',
      color: '#112e51'
    },
    red: {
      backgroundColor: 'red',
      color: '#ffffff'
    },
    green: {
      backgroundColor: 'green',
      color: '#ffffff'
    },
    translucent: {
      backgroundColor: 'rgba(255,255,255,.3)',
      color: '#112e51'
    }
  }

  switch (btnRole) {
    case 'arrow':
      btnStyle = {
        
      }
      break;
    case 'tag':
      btnStyle = {
        
      }
      break;
    case 'text':
      btnStyle = {
        padding: [1.5 + 'rem', 4 + 'rem', 1.5 + 'rem', 4 + 'rem'],
        letterSpacing: 0.1 + 'rem',
        fontWeight: 600,
        textTransform: 'uppercase'
      }
      break;
    case 'afterText':
      btnStyle = {
        padding: [1.5 + 'rem', 4 + 'rem', 1.5 + 'rem', 4 + 'rem'],
        letterSpacing: 0.1 + 'rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        after: {
          content: '""',
        }
      }
      break;
    case 'guess':
      btnStyle = {
        display: 'block',
        width: 45 + '%',
        fontWeight: 700,
        fontSize: 1.8 + 'rem',
        padding: [1 + 'rem', 1 + 'rem', 1 + 'rem', 1 + 'rem'],
        margin: [1 + 'rem',2.5 + '%',1 + 'rem',2.5 + '%']
      }
      break;
    default:
      btnStyle = {

      }
      break;
  }

  return(
    <button 
      onClick={onClick} 
      value={btnValue}
      name={btnName}>
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
          border-style: solid;
          border-width:0.3rem;
          border-left:0;
          border-top:0;
          transform:rotate(-45deg);
          float:right;
          transition:border-color 0.2s;
        }
      `}</style>
      <style jsx>{`
        button {
          background-color:${color[btnColor].backgroundColor};
          color:${color[btnColor].color};
        }
        button:active {
          background-color:${color[btnColor].activeBackground};
          color:${color[btnColor].activeColor};
          outline:none;
          box-shadow:inset 0.1rem 0.1rem 0.3rem #000;
        }
        button::after {
          border-color:${color[btnColor].color};
        }
        button:active::after {
          border-color:${color[btnColor].activeColor};
        }
      `}</style>
      <style jsx>{`
        button {
          display:${btnStyle.display ? btnStyle.display : 'inline-block'};
          padding-top:${btnStyle.padding ? btnStyle.padding[0] : 0};
          padding-right:${btnStyle.padding ? btnStyle.padding[1] : 0};
          padding-bottom:${btnStyle.padding ? btnStyle.padding[2] : 0};
          padding-left:${btnStyle.padding ? btnStyle.padding[3] : 0};
          margin-top:${btnStyle.margin ? btnStyle.margin[0] : 0};
          margin-right:${btnStyle.margin ? btnStyle.margin[1] : 0};
          margin-bottom:${btnStyle.margin ? btnStyle.margin[2] : 0};
          margin-left:${btnStyle.margin ? btnStyle.margin[3] : 0};
          width:${btnStyle.width ? btnStyle.width : 'auto'};
          font-size:${btnStyle.fontSize ? btnStyle.fontSize  + 'rem' : 1.3 + 'rem'};
          font-weight:${btnStyle.fontWeight ? btnStyle.fontWeight : 400};
          text-transform:${btnStyle.textTransform ? btnStyle.textTransform : 'auto'};
          letter-spacing: ${btnStyle.letterSpacing ? btnStyle.letterSpacing : 0};
        }
        button::after {
          content:${btnStyle.after ? btnStyle.after.content : ''};
        }
      `}</style>
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
  btnRole: PropTypes.oneOf(['arrow', 'tag', 'text', 'afterText', 'guess']).isRequired,
  btnColor: PropTypes.oneOf(['blue', 'white', 'green', 'red', 'translucent']).isRequired,
  btnName: PropTypes.string,
  btnValue: PropTypes.string,
  clicked: PropTypes.bool
};

export default Button;