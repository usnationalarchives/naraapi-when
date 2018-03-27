import fetch from 'cross-fetch';

export const BUILD_GAME = 'BUILD_GAME';
export const END_GAME = 'END_GAME';
export const REQUEST_GAMEDATA = 'REQUEST_DATA';
export const LOAD_GAME = 'LOAD_GAME';
export const IS_CORRECT = 'IS_CORRECT';
export const NEXT_GUESS = 'NEXT_GUESS';
export const SEE_RESULTS = 'SEE_RESULTS';

export function startGame() {
  return dispatch => {
    dispatch(buildGameState());
    dispatch(getGameItems());
  }
}

export function endGame() {
  return {
    type: END_GAME,
    gameActive: false,
    gameOver: true
  }
}

export function guessYear(year, guess, currentItem) {
  const guessCorrect = (year == guess) ? true : false;
  let score = guessCorrect ? 25 : 0;
  return dispatch => {
    dispatch(isCorrect(score, guessCorrect));
    setTimeout(
      () => dispatch(nextGuess(currentItem)),
      1000
    );

  }
}

function isCorrect(points, correct) {
  return {
    type: IS_CORRECT,
    isCorrect: correct,
    score: points
  }
}

function nextGuess(currentItem) {
  return {
    type: NEXT_GUESS,
    currentItem: currentItem + 1,
    isCorrect: null,
  }
}

function getGameItems() {

  // The API request
  let apiRequest = 'https://catalog.archives.gov/api/v1?';
  apiRequest += 'resultTypes=item';
  apiRequest += '&description.item.generalRecordsTypeArray.generalRecordsType.naId_is=10035674';
  apiRequest += '&rows=60';
  apiRequest += '&objects.object.file.@mime_is=image/jpeg'
  apiRequest += '&exists=description.item.productionDateArray.proposableQualifiableDate.year';
  apiRequest += '&offset=' + Math.floor(Math.random() * 1000);
  return dispatch => {
    dispatch(requestGameData());
    return fetch(apiRequest)
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

export function seeResults() {
  return {
    type: SEE_RESULTS
  }
}
