import { connect } from 'react-redux';
import App from '../../components/App';

import {
  startGame,
  endGame,
  guessYear
} from '../../actions/GamePlay';

const mapStateToProps = state => {
  return {
    gameState: state.gameData,
    currentItem: state.currentItem
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
    }
  }
};

const NaraGame = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default NaraGame;