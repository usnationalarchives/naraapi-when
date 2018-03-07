export const TAG_ITEM = 'TAG_ITEM';
export const NARA_LOGIN = 'NARA_LOGIN';

export function tagItem() {
  return {
    type: TAG_ITEM,
    score: 5
  }
}

export function logIn(username, token) {
  return {
    type: NARA_LOGIN,
    username: username,
    token: token
  }
}