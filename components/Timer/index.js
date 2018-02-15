import React from 'react';
import PropTypes from 'prop-types';

class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      timeLeft: props.gameTime,
      endGame: props.endGame,
      lowTime: false,
      blink: false
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
        lowTime: true,
        blink: !prevState.blink
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
        <p>
          Time Left: 
          <span>{this.state.timeLeft}</span>
        </p>
        
        <style jsx>{`
            span {
              color: ${ this.state.lowTime ? 'red' : 'black' };
              visibility: ${ this.state.blink ? 'hidden' : 'visible'}
            }
          `}</style>
      </div>
    );
  }
}

Timer.propTypes = {
  gameTime: PropTypes.number.isRequired
};

export default Timer;
