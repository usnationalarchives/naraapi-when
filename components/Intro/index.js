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
            <img className={"nara"} src={"/static/nara-logo-blue.png"} alt={"National Archives"} />
            <img className={"logo"} src={"/static/logo.png"} alt={"When Am I?"} />
            <Button
              btnText={"Start"}
              onClick={() => this.setState({ page: 2 })}
              btnRole={'afterTextWide'}
              btnColor={'white'}
            />
          </div>
          <div className={"text-2"}>
            <h1>How well<br />do you know<br />the picture<br />of America?</h1>
          </div>
          <div className={"text-3"}>
            <p>We&apos;ll show you<br />an image.</p>
            <p>You tell us<br />what year it was taken.</p>
            <p>Guess as many years<br />as you can in {this.props.gameTime} seconds.</p>
            <p><em>Let&apos;s get started!</em></p>
          </div>
        </section>
        <section className={"button-section"}>
          <hr />
          <button onClick={this.state.page === 2 ? () => this.setState({ page: 3 }) : () => this.setState({ loadGame: true }, () => this.props.startGame())}>
            <span>{this.state.page === 1 ? "Continue" : "Start Game"}</span>
          </button>
        </section>
        <footer>
          <img className={"nara-bottom"} src={"/static/nara-logo-blue.png"} alt={"National Archives"} />
        </footer>
        <style jsx global>{`
          body {
            background-image:url('/static/tiles${this.state.page}.png');
          }
        `}</style>
        <style jsx>{`
          .intro-container {
            text-align:left;
            -webkit-animation:fadeIn 1s;
            animation:fadeIn 1s;
            position:relative;
            width:300%;
            left:0;
            transition:left 1s;
          }
          .intro-container.state-2 {
            left:-100%;
          }
          .intro-container.state-3 {
            left:-200%;
          }

          .text-section {
            margin:4rem 0 0;
          }
          .text-section > div {
            box-sizing:border-box;
            width:33.333333%;
            float:left;
            padding:2rem;
          }
          .text-1 {
            text-align:center;
          }
          .text-section:after {
            content:'';
            clear:both;
            display:table;
          }
          img {
            display:block;
            margin:0 auto;
          }
          .nara {
            max-width:14rem;
            margin-bottom:6rem;
          }
          .logo {
            max-width:27rem;
            margin-bottom:6rem;
          }
          h1 {
            color:#132f50;
            font-weight:700;
            font-size:5rem;
            line-height:1.2;
            letter-spacing:-0.05rem;
            margin:11rem 0 0;
          }
          .text-3 {
            margin-top:6.5rem;
          }
          p {
            font-size:2.6rem;
            line-height:1.2;
            font-weight:600;
            margin:0 0 1.5rem;
          }
          em {
            color:#132f50;
            font-style:normal;
          }

          .button-section {
            box-sizing:border-box;
            position:relative;
            top:-7rem;
            padding:0 2rem;
            transition:left 1s;
            width:66.666666%;
            float:right;
            height:6.4rem;
          }
          hr {
            background:#fff;
            border:0;
            height:0.4rem;
            box-shadow:0 0.1rem 0.3rem rgba(0,0,0,0.1);
            position:relative;
            top:50%;
            margin:0 2rem;
          }
          button {
            background:#132f50;
            border:0;
            overflow:hidden;
            border-radius:50%;
            box-shadow:0 0.3rem 0.6rem rgba( 0, 0, 0, 0.4 );
            outline:none;
            width:6.2rem;
            height:6.2rem;
            top:0.2rem;
            position:absolute;
          }
          button:focus {
            outline:2px dotted #ffffff;
            outline-offset:3px;
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
            width:1.4rem;
            height:1.4rem;
            border:0.4rem solid #fff;
            border-left:0;
            border-top:0;
            transform:rotate(-45deg);
            margin-top:0.2rem;
            margin-left:-0.5rem;
            -webkit-animation:buttonRemind 3500ms infinite;
            animation:buttonRemind 3500ms infinite;
          }

          .intro-container.state-3 button {
            -webkit-animation:arrowSlide 1s forwards;
            animation:arrowSlide 1s forwards;
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

          .intro-container.state-1 footer {
            opacity:0;
          }
          footer {
            position:fixed;
            bottom:4rem;
            width:33.333333%;
            left:33.333333%;
            text-align:center;
            opacity:1;
            transition:opacity 1s;
          }
          .nara-bottom {
            max-width:14.7rem;
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

          @-webkit-keyframes buttonRemind {
            50% {
              transform:rotate(-45deg) scale(1.0);
            }
            75% {
              transform:rotate(-45deg) scale(1.3);
            }
            100% {
              transform:rotate(-45deg) scale(1.0);
            }
          }
          @keyframes buttonRemind {
            50% {
              transform:rotate(-45deg) scale(1.0);
            }
            75% {
              transform:rotate(-45deg) scale(1.3);
            }
            100% {
              transform:rotate(-45deg) scale(1.0);
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
