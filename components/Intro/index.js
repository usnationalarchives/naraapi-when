import React from 'react';
import PropTypes from 'prop-types';
import Button from '../form/Button';

class Intro extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      loadGame: false
    }
  }

  render() {
    return (
      <div className={"intro-container state-"+this.state.page+" load-"+this.state.loadGame}>
        <section className={"text-section"}>
          <div className={"text-1"}>
            <h1>How well<br />do you know<br />the picture<br />of America?</h1>
          </div>
          <div className={"text-2"}>
            <p>We&apos;ll show you<br />an image.</p>
            <p>You tell us<br />what year it was taken.</p>
            <p>Guess as many years<br />as you can in 90 seconds.</p>
            <p><em>Let&apos;s get started!</em></p>
          </div>
        </section>
        <section className={"button-section"}>
          <hr />
          <button onClick={this.state.page === 1 ? () => this.setState({ page: 2 }) : () => this.setState({ loadGame: true }, () => this.props.startGame())}>
            <span>{this.state.page === 1 ? "Continue" : "Start Game"}</span>
          </button>
        </section>
        <style jsx>{`
          .intro-container {
            text-align:left;
            -webkit-animation:fadeIn 1s;
            animation:fadeIn 1s;
            position:relative;
            width:200%;
          }
          .intro-container.state-2 {
            -webkit-animation:slideLeft 1s forwards;
            animation:slideLeft 1s forwards;
          }

          .text-section {
            margin:8rem 0 0;
          }
          .text-section div {
            box-sizing:border-box;
            width:50%;
            float:left;
            padding:2rem;
          }
          .text-section:after {
            content:'';
            clear:both;
            display:table;
          }
          h1 {
            color:#132f50;
            font-weight:700;
            font-size:3.6rem;
            margin:0;
          }
          p {
            font-size:2rem;
            font-weight:600;
            margin:0 0 1.5rem;
          }
          em {
            color:#132f50;
            font-style:normal;
          }

          .button-section {
            position:relative;
            height:4rem;
            padding:0 10% 0 2rem;
          }
          hr {
            background:#fff;
            border:0;
            height:0.3rem;
            box-shadow:0 0.1rem 0.3rem rgba(0,0,0,0.3);
            position:relative;
            top:50%;
          }
          button {
            background:#132f50;
            border:0;
            overflow:hidden;
            border-radius:50%;
            box-shadow:0 0.3rem 0.6rem rgba( 0, 0, 0, 0.4 );
            outline:none;
            width:4rem;
            height:4rem;
            top:0.2rem;
            position:absolute;
            -webkit-animation:buttonFlash 4s infinite;
            animation:buttonFlash 4s infinite;
          }
          button span {
            position:absolute;
            height:1px;
            width:1px;
            overflow:hidden;
            clip:rect(1px, 1px, 1px, 1px);
          }
          button::after {
            content:'';
            display:inline-block;
            width:1rem;
            height:1rem;
            border:0.3rem solid #fff;
            border-left:0;
            border-top:0;
            transform:rotate(-45deg);
            margin-top:0.2rem;
            margin-left:-0.5rem;
          }

          .intro-container.state-2 button {
            -webkit-animation:arrowSlide 1s forwards, buttonFlash 4s infinite;
            animation:arrowSlide 1s forwards, buttonFlash 4s infinite;
          }

          .intro-container.load-true button::after {
            border:0.3rem solid #fff;
            border-top-color:#54a2bf;
            border-radius:50%;
            width:1.3rem;
            height:1.3rem;
            margin-left:0.0rem;
            -webkit-animation:buttonLoad 1s infinite;
            animation:buttonLoad 1s infinite;
          }

          @-webkit-keyframes fadeIn {
            0% {
              opacity:0;
            }
            100% {
              opacity:100%;
            }
          }
          @keyframes fadeIn {
            0% {
              opacity:0;
            }
            100% {
              opacity:100%;
            }
          }

          @-webkit-keyframes slideLeft {
            0% {
              left:0;
            }
            100% {
              left:-100%;
            }
          }
          @keyframes slideLeft {
            0% {
              left:0;
            }
            100% {
              left:-100%;
            }
          }

          @-webkit-keyframes arrowSlide {
            0% {
              left:2rem;
            }
            100% {
              left:90%;
            }
          }
          @keyframes arrowSlide {
            0% {
              left:2rem;
            }
            100% {
              left:90%;
            }
          }

          @-webkit-keyframes buttonFlash {
            50% {
              background-color:#132f50;
            }
            75% {
              background-color:#54a2bf;
            }
            100% {
              background-color:#132f50;
            }
          }
          @keyframes buttonFlash {
            50% {
              background-color:#132f50;
            }
            75% {
              background-color:#54a2bf;
            }
            100% {
              background-color:#132f50;
            }
          }

          @-webkit-keyframes buttonLoad {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          @keyframes buttonLoad {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

}

Intro.propTypes = {
  startGame: PropTypes.func.isRequired
};

export default Intro;
