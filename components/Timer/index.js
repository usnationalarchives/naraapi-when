import React from 'react';
import PropTypes from 'prop-types';

// The stroke-dasharray has to be equal to
// the circumference of the svg circle

class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      timeLeft: props.gameTime,
      endGame: props.endGame,
      lowTime: false,
      size: props.size,
      radius: (props.size / 2) - 5,
      offset: props.size / 2
    }
    this.countDown = this.countDown.bind(this);
  }

  componentDidMount() {
    this.countDownTime = setInterval(
      () => this.countDown(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.countDownTime);
  }

  countDown() {
    let currentTime = this.state.timeLeft;
    currentTime --;

    if(currentTime < 10) {
      this.setState(prevState => ({
        lowTime: true
      }));
    }

    if(currentTime > 0) {
      this.setState(prevState => ({
        timeLeft: currentTime
      }));
    } else {
      this.state.endGame();
    }
    
  }

  render() {
    return (
      <div>
        <span>{this.state.timeLeft}</span>
        <svg>
          <circle r={this.state.radius} cx={this.state.offset} cy={this.state.offset} style={{
            stroke: 'rgba(255, 255, 255, .25)', 
            animation: 'none'}}></circle>
        </svg>
        <svg>
          <circle r={this.state.radius} cx={this.state.offset} cy={this.state.offset} 
          style={{
            stroke: 'rgba(17, 46, 81, 1)',
            }}></circle>
        </svg>
        <style jsx>{`
            div {
              position: relative;
              float:right;
            }
            span {
              position: absolute;
              text-align: center;
              left: 0;
              top: 0;
            }
            svg {
              position: absolute;
              left: 0;
              top: 0;
              transform: rotateY(180deg) rotateX(180deg) rotateZ(90deg);
            }
            svg circle {
              stroke-dashoffset: 0px;
              stroke-linecap: square;
              stroke-width: 5px;
              fill: none;
              animation-timing-function: linear;
              animation-delay: initial;
              animation-iteration-countDown: infinite;
              animation-direction: initial;
              animation-fill-mode: forwards;
              animation-play-state: initial;
            }
          `}</style>
          <style jsx>{`
            div {
              width: ${this.state.size + 'px'};
              height: ${this.state.size + 'px'};
            }
            svg {
              width: ${this.state.size + 'px'};
              height: ${this.state.size + 'px'};
            }
            span {
              font-size:1.5rem;
              font-weight:700;
              width: ${this.state.size + 'px'};
              height: ${this.state.size + 'px'};
              line-height: ${this.state.size + 'px'};
              color: ${ this.state.lowTime ? '#132f50' : '#132f50;' };
            }
            svg circle {
            stroke-dasharray: ${Math.floor((2 * Math.PI * this.state.radius)) + 'px'};
            animation-name: countdown;
            animation-duration: ${this.props.gameTime + 's'};
            }
            @keyframes countdown {
              from {
                stroke-dashoffset: 0px;
              }
              to {
                stroke-dashoffset: ${Math.floor((2 * Math.PI * this.state.radius)) + 'px'};
              }
            }
            `}</style>
      </div>
    );
  }
}

Timer.propTypes = {
  gameTime: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired
};

export default Timer;
