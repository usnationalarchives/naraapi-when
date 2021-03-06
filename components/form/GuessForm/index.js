import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

class GuessForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      year: props.year,
      naId: props.naId,
      currentItem: props.currentItem,
      onGuessYear: props.onGuessYear,
      slideButtons: []
    };
    this.guess = this.guess.bind(this);
    this.getRandomYear = this.getRandomYear.bind(this);
    this.buildGuesses = this.buildGuesses.bind(this);
    this.getColor = this.getColor.bind(this);
  }

  getColor(name, target, value) {
    // if correct
    if (this.state.year == value) {
      // if clicked
      if (target == name) {
        return {
          [name]: {
            color: 'green',
            clicked: true,
            strike: false,
          }
        }
      } else {
        return {
          [name]: {
            color: 'white',
            clicked: false,
            strike: false,
          }
        }
      }
    } else {
      if (target == name) {
        return {
          [name]: {
            color: 'red',
            clicked: true,
            strike: true,
          }
        }
      } else {
        return {
          [name]: {
            color: 'translucent',
            clicked: false,
            strike: true,
          }
        }
      }
    }
  }

  guess(event) {
    event.preventDefault();

    const target = event.target;
    const guess = target.value;
    const name = target.name;
    
    let slideBtns = this.state.slideButtons.map((button) => (
      this.setState((prevState, props) => {
        return this.getColor(button.name, name, button.value);
      })
      )
    );

    this.state.onGuessYear(guess, this.state.year, this.state.currentItem);
    
  }

  getRandomYear(min, max, usedNumbers) {
    
    const _min = Math.ceil(min);
    const _max = Math.floor(max);

    let _newNumber = this.state.year;
    let _maxTries = 0;
    while(usedNumbers.includes(_newNumber) || _maxTries < 25) {
      _newNumber = Math.floor(Math.random() * (_max - _min + 1)) + _min;
      _maxTries++;
    }
    return _newNumber;
  }

  buildGuesses(year) {
    const _currentYear = (new Date()).getFullYear();
    const _guessRange = 30; // range of years the choices will encompass
    let _yearMin = Number(year) - Math.round(_guessRange / 2);
    let _yearMax = Number(year) + Math.round(_guessRange / 2);
    if ( _yearMax > _currentYear ) {
      _yearMax = _currentYear;
      _yearMin = _yearMax - _guessRange;
    }
    let _buttons = [];
    const rightAnswer = Math.floor(Math.random() * (Math.floor(2) - Math.ceil(0) + 1)) + Math.ceil(0);
    let _usedNumbers = [Number(year)];
    for (let i = 0; i < 4; i++) {
      let _buttonObject = {};
      if(i == rightAnswer) {
        _buttonObject = {
          name: 'button_' + year,
          value: year.toString(),
        };
      } else {
        const _btnYear = this.getRandomYear(_yearMin, _yearMax, _usedNumbers);
        _usedNumbers.push(_btnYear);
        _buttonObject = {
          name: 'button_' + _btnYear,
          value: _btnYear.toString(),
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
  // Create an onchange function that watches for the click. When clicked, update that buttons clicked prop to true and trigger color change
  componentWillMount() {
    let btns = [];
    const slideButtons = this.buildGuesses(this.state.year).map((button) =>
     ({
       name: button.name,
       text: button.text,
       value: button.value,
       onClick: this.guess,
       role: 'guess',
       color: 'white',
       clicked: false,
     })
    );

    this.setState((prevState, props) => {return {slideButtons: slideButtons};});
  }


  render() {
    return (
      <form id={'form_' + this.state.currentItem}>
        {this.state.slideButtons.map((button) =>
          <Button
            key={button.name}
            btnName={button.name}
            btnText={button.value}
            btnValue={button.value}
            onClick={this.guess}
            btnRole={'guess'}
            clicked={this.state[button.name] ? this.state[button.name].clicked : false}
            strike={this.state[button.name] ? this.state[button.name].strike : false}
            btnColor={this.state[button.name] ? this.state[button.name].color : 'white'}
          />
        )
        }
        <style jsx global>{`
          body {
            background-image:linear-gradient( to top right, #235692, #20bee4 );
          }
        `}</style>
        <style jsx>{`
          display:flex;
          flex-wrap:wrap;
          margin:2rem;
        `}</style>
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
