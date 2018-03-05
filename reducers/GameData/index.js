import {
  BUILD_GAME,
  END_GAME,
  REQUEST_GAMEDATA,
  LOAD_GAME,
  IS_CORRECT,
  NEXT_GUESS
} from '../../actions/GamePlay';

const intialState = {
  gameActive: false,
  gameOver: false,
  timeLeft: 0,
  isFetching: false
};

function gameData(state = intialState, action) {
  switch (action.type) {
    case BUILD_GAME:
      return {
        ...state,
        gameTime: action.gameTime,
        currentItem: action.currentItem,
        score: action.score
      }
    case END_GAME:
      return {
        ...state,
        gameActive: action.gameActive,
        gameOver: action.gameOver
      }
    case REQUEST_GAMEDATA:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case LOAD_GAME:
      return {
        ...state,
        isFetching: action.isFetching,
        recievedAt: action.recievedAt,
        data: action.data,
        gameActive: action.gameActive
      }
    case IS_CORRECT:
      return {
        ...state,
        // isCorrect: action.isCorrect,
        score: state.score + action.score
      }
    case NEXT_GUESS:
      return {
        ...state,
        currentItem: action.currentItem,
        //isCorrect: action.isCorrect
      }
    default:
      return state;
  }
};

export default gameData;
