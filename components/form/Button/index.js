import React from 'react';
import PropTypes from 'prop-types';

const Button = (
  { onClick,
    btnText,
    btnRole,
    btnName,
    btnValue,
    btnColor,
    clicked,
    strike }) => {

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
      backgroundColor: '#e31c3d',
      color: '#ffffff'
    },
    green: {
      backgroundColor: '#4aa564',
      color: '#ffffff'
    },
    translucent: {
      backgroundColor: 'rgba(255,255,255,.3)',
      color: '#112e51'
    }
  }

  switch (btnRole) {
    case 'arrow':
    case 'arrowPrev':
    case 'arrowNext':
      btnStyle = {
        width:6.2+'rem',
        height:6.2+'rem',
        textIndent:-9999+'rem',
        after: {
          content:'""',
          display:'inline-block',
          width:1.4+'rem',
          height:1.4+'rem',
          border:'0.4rem solid #fff',
          borderLeft:0,
          borderTop:0,
          transform:'rotate(-45deg)',
          position:'absolute',
          top:2+'rem',
          left:1.5+'rem'
        }
      }
      if ( btnRole === 'arrowPrev' || btnRole === 'arrowNext' ) {
        btnStyle.transform = 'scale(0.5)';
        btnStyle.position = 'absolute';
        btnStyle.top = 11+'rem';
        btnStyle.right = 0+'rem';
      }
      if ( btnRole === 'arrowPrev' ) {
        btnStyle.left = 0+'rem';
        btnStyle.right = 'auto';
        btnStyle.after.transform = 'rotate(-225deg)';
        btnStyle.after.left = 2.2+'rem';
      }
      break;

    case 'tag':
      btnStyle = {

      }
      break;
    case 'secondary':
      btnStyle = {
        padding: [1.3 + 'rem', 2.5 + 'rem', 1.3 + 'rem', 2.5 + 'rem'],
        letterSpacing: 0.1 + 'rem',
        fontWeight: 400,
        textTransform: 'uppercase',
        fontSize:1.4 + 'rem'
      }
    break;
    case 'text':
      btnStyle = {
        padding: [1.5 + 'rem', 4 + 'rem', 1.5 + 'rem', 4 + 'rem'],
        letterSpacing: 0.1 + 'rem',
        fontWeight: 700,
        textTransform: 'uppercase'
      }
      break;
    case 'afterTextWide':
      btnStyle = {
        padding: [1.5 + 'rem', 4 + 'rem', 1.5 + 'rem', 4 + 'rem'],
        letterSpacing: 0.1 + 'rem',
        fontWeight: 700,
        minWidth: '26rem',
        textTransform: 'uppercase',
        after: {
          content: '""',
        }
      }
      break;
      case 'afterTextNarrow':
        btnStyle = {
          padding: [1 + 'rem', 1.5 + 'rem', 1 + 'rem', 1.5 + 'rem'],
          letterSpacing: 0.1 + 'rem',
          fontWeight: 700,
          fontSize:1.4+'rem',
          width: 48 + '%',
          textTransform: 'uppercase',
          after: {
            content: '""',
          }
        }
        break;
    case 'afterText':
      btnStyle = {
        padding: [1.5 + 'rem', 4 + 'rem', 1.5 + 'rem', 4 + 'rem'],
        letterSpacing: 0.1 + 'rem',
        fontWeight: 700,
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

  btnStyle.after = btnStyle.after ? btnStyle.after : {};

  return(
    <button
      onClick={onClick}
      value={btnValue}
      name={btnName}>
      {btnText}
      <style jsx>{`
        button {
          border-radius:${(['arrow','arrowPrev','arrowNext'].indexOf(btnRole) !== -1) ? '50%' : '2.5rem'};
          border:0;
          -webkit-font-smoothing:inherit;
          -moz-osx-font-smoothing:inherit;
          -webkit-appearance:none;
          font:inherit;
          line-height:normal;
          box-shadow:0 0.3rem 0.6rem rgba( 0, 0, 0, 0.4 );
          outline:none;
          transition:all 0.2s;
          overflow:hidden;
          position:relative;
          text-decoration:${strike?'line-through':'none'};
        }
        button::after {
          display:inline-block;
          margin-top:0.2rem;
          border-style: solid;
          border-width:${(['arrow','arrowPrev','arrowNext'].indexOf(btnRole) !== -1) ? 0.4+'rem' : 0.3+'rem'};
          border-color:${(['arrow','arrowPrev','arrowNext'].indexOf(btnRole) !== -1) ? '#fff' : 'inherit'};
          border-left:0;
          border-top:0;
          margin-left:0.3rem;
          transition:border-color 0.2s;
          text-indent:0;
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
          height:${btnStyle.height ? btnStyle.height : 'auto'};
          font-size:${btnStyle.fontSize ? btnStyle.fontSize : 1.7 + 'rem'};
          font-weight:${btnStyle.fontWeight ? btnStyle.fontWeight : 400};
          text-transform:${btnStyle.textTransform ? btnStyle.textTransform : 'auto'};
          letter-spacing: ${btnStyle.letterSpacing ? btnStyle.letterSpacing : 0};
          min-width: ${btnStyle.minWidth ? btnStyle.minWidth : 0};
          text-indent: ${btnStyle.textIndent ? btnStyle.textIndent : 0};
          transform:${btnStyle.transform ? btnStyle.transform : 'none'};
          position:${btnStyle.position ? btnStyle.position : 'relative'};
          top:${typeof btnStyle.top !== 'undefined' ? btnStyle.top : 'auto'};
          right:${typeof btnStyle.right !== 'undefined' ? btnStyle.right : 'auto'};
          bottom:${typeof btnStyle.bottom !== 'undefined' ? btnStyle.bottom : 'auto'};
          left:${typeof btnStyle.left !== 'undefined' ? btnStyle.left : 'auto'};
        }
        button::after {
          content:${btnStyle.after.content ? btnStyle.after.content : ''};
          width:${btnStyle.after.width ? btnStyle.after.width : '1rem'};
          height:${btnStyle.after.height ? btnStyle.after.height : '1rem'};
          transform:${btnStyle.after.transform ? btnStyle.after.transform : 'rotate(-45deg)'};
          position:${btnStyle.after.position ? btnStyle.after.position : 'relative'};
          top:${typeof btnStyle.after.top !== 'undefined' ? btnStyle.after.top : 'auto'};
          right:${typeof btnStyle.after.right !== 'undefined' ? btnStyle.after.right : 'auto'};
          bottom:${typeof btnStyle.after.bottom !== 'undefined' ? btnStyle.after.bottom : 'auto'};
          left:${typeof btnStyle.after.left !== 'undefined' ? btnStyle.after.left : 'auto'};
        }
      `}</style>
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
  btnRole: PropTypes.oneOf(['arrow', 'arrowPrev', 'arrowNext', 'tag', 'text', 'secondary', 'afterText', 'afterTextWide', 'afterTextNarrow', 'guess']).isRequired,
  btnColor: PropTypes.oneOf(['blue', 'white', 'green', 'red', 'translucent']).isRequired,
  btnName: PropTypes.string,
  btnValue: PropTypes.string,
  clicked: PropTypes.bool,
  strike: PropTypes.bool,
};

export default Button;
