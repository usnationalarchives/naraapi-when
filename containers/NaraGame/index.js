import { connect } from 'react-redux';
import App from '../../components/App';

import {
  startGame,
  endGame,
  guessYear,
  seeResults
} from '../../actions/GamePlay';

import {
  tagItem,
  logIn
} from '../../actions/NaraActions';

const mapStateToProps = state => {
  return {
    gameState: state.gameData,
    userState: state.userData
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onStartClick: () => {
      dispatch(startGame())
    },
    onEndGame: () => {
      dispatch(endGame())
    },
    onGuessYear: (year, guess, currentItem) => {
      dispatch(guessYear(year, guess, currentItem))
    },
    onTagItem: () => {
      dispatch(tagItem())
    },
    onLogIn: (username, token) => {
      dispatch(logIn(username, token))
    },
    onSeeResults: () => {
      dispatch(seeResults())
    }
  }
};

const NaraGame = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default NaraGame;