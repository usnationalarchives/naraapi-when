import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

class GuessForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      year: props.year,
      naId: props.naId,
      currentItem: props.currentItem
    };
    this.guess = this.guess.bind(this);
    this.getRandomYear = this.getRandomYear.bind(this);
    this.buildGuesses = this.buildGuesses.bind(this);
  }

  guess(event) {
    event.preventDefault();

    const target = event.target;
    const guess = target.value;
    const name = target.name;
    this.props.onGuessYear(guess, this.state.year, this.state.currentItem);
  }

  getRandomYear(min, max, usedNumbers) {
    const _min = Math.ceil(min);
    const _max = Math.floor(max);

    let _newNumber = this.state.year;
    let _maxTries = 0;
    while(usedNumbers.includes(_newNumber) || _maxTries < 25) {
      _newNumber = Math.floor(Math.random() * (_max - _min + 1)) + _min;
      _maxTries ++;
    }
    return _newNumber;
  }

  buildGuesses(year) {
    const _yearMin = Number(year) - 10;
    const _yearMax = Number(year) + 10;
    let _buttons = [];
    const rightAnswer = Math.floor(Math.random() * (Math.floor(4) - Math.ceil(0) + 1)) + Math.ceil(0);
    let _usedNumbers = [year];
    for (let i = 0; i < 4; i++) {
      let _buttonObject = {};
      if(i == rightAnswer) {
        _buttonObject = {
          name: 'button_' + year,
          value: year.toString()
        };
      } else {
        const _btnYear = this.getRandomYear(_yearMin, _yearMax, _usedNumbers);
        _usedNumbers.push(_btnYear);
        _buttonObject = {
          name: 'button_' + _btnYear,
          value: _btnYear.toString()
        };
      }

      if(Math.random() % 2 == 0) {
        _buttons.push(_buttonObject);
      } else {
        _buttons.unshift(_buttonObject);
      }
    }
    return _buttons;
  }

  render() {
    const slideButtons = this.buildGuesses(this.state.year).map((button) =>
      <Button
        key={button.name}
        btnName={button.name}
        btnText={button.value}
        btnValue={button.value}
        onClick={this.guess}
      />
    );

    return (
      <form>
        {slideButtons}
      </form>
    );
  }
}

GuessForm.propTypes = {
  currentItem: PropTypes.number.isRequired,
  naId: PropTypes.string.isRequired,
  onGuessYear: PropTypes.func.isRequired,
  year: PropTypes.string.isRequired
}

export default GuessForm;
