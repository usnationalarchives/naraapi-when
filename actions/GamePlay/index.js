import fetch from 'cross-fetch';

export const BUILD_GAME = 'BUILD_GAME';
export const END_GAME = 'END_GAME';
export const REQUEST_GAMEDATA = 'REQUEST_DATA';
export const LOAD_GAME = 'LOAD_GAME';
export const GUESS_YEAR = 'GUESS_YEAR';

export function startGame() {
  return dispatch => {
    dispatch(buildGameState());
    dispatch(getGameItems());
  }
}

export function endGame() {
  return {
    type: END_GAME,
    gameActive: false
  }
}

export function guessYear(year, guess, currentItem) {
  const isCorrect = (year == guess) ? 25 : 0;
  return {
    type: GUESS_YEAR,
    currentItem: currentItem + 1,
    score: isCorrect
  }
}


function getGameItems() {

  // The API request
  let apiRequest = 'https://catalog.archives.gov/api/v1?';
  apiRequest += 'resultTypes=item';
  apiRequest += '&description.item.generalRecordsTypeArray.generalRecordsType.naId_is=10035674';
  apiRequest += '&rows=60';
  apiRequest += '&description.item.productionDateArray.proposableQualifiableDate.year=';

  return dispatch => {
    dispatch(requestGameData());
    return fetch(apiRequest + '1911')
      .then(response => response.json())
      .then(json => dispatch(loadGame(json)))
  }
}

function loadGame(data) {
  return {
    type: LOAD_GAME,
    data,
    recievedAt: Date.now(),
    isFetching: false,
    gameActive: true
  }
}

function buildGameState() {
  return {
    type: BUILD_GAME,
    gameTime: 60,
    currentItem: 0,
    score: 0
  }
}

function requestGameData() {
  return {
    type: REQUEST_GAMEDATA,
    isFetching: true
  }
}
