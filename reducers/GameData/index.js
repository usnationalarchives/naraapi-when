import {
  BUILD_GAME,
  END_GAME,
  REQUEST_GAMEDATA,
  LOAD_GAME,
  GUESS_YEAR
} from '../../actions/GamePlay';

const intialState = {
  gameActive: false,
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
        gameActive: action.gameActive
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
    case GUESS_YEAR:
      return {
        ...state,
        currentItem: action.currentItem,
        score: state.score + action.score
      }
    default:
      return state;
  }
};

export default gameData;