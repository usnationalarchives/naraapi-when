import {
  NARA_LOGIN
} from '../../actions/NaraActions';


const intialState = {
  loggedIn: false,
  userName: ''
};

function userData(state = intialState, action) {
  switch (action.type) {
    case NARA_LOGIN:
      return {
        ...state,
        username: action.username,
        token: action.token,
        loggedIn: true
      }
    default:
      return state;
  }
};

export default userData;