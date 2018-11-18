import {refreshToken} from '../apis';
import utils from '../utils';
import store from '../store';
import {global} from '../store/types';

/**
 * @desc refresh token and update it stored in session storage
 * @desc refresh token and update the flag of token invalid notice in global vuex
 */
export default async () => {
  const res = await refreshToken();

  if (!res) return;

  const {result: {token}} = res;

  // update the token stored in session storage
  utils.sessionStorage.set('token', token);

  // update the flag of token invalid notice stored in global vuex
  store.commit(global.UPDATE_TOKEN_VALID_STATUS, true);
};
