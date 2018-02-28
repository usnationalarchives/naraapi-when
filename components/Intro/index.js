import React from 'react';
import PropTypes from 'prop-types';
import Button from '../form/Button';

class Intro extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
  }

  render() {
    return (
      <div>
        {(this.state.page === 1) &&
          <div>
            <h1>How well do you know the picture of America?</h1>
            <Button
              btnText={"Continue"}
              onClick={() => this.setState({ page: 2 })}
              btnType={"primary"}
            />
          </div>
        }
        {(this.state.page === 2) &&
          <div>
            <p>We'll show you an image.</p>
            <p>You tell us what year it was taken.</p>
            <p>Guess as many years as you can in 90 seconds.</p>
            <p><em>Let's get started!</em></p>
            <Button
              btnText={"Start Game"}
              onClick={() => this.props.startGame()}
              btnType={"primary"}
            />
          </div>
        }
        <style jsx>{`
        `}</style>
      </div>
    );
  }

}

Intro.propTypes = {
  startGame: PropTypes.func.isRequired
};

export default Intro;