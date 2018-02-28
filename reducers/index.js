import { combineReducers } from 'redux';

import gameData from './GameData';
import userData from './UserData';

const naraStore = combineReducers({
  gameData,
  userData
});

export default naraStore;