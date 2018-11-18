import store from '../store';
import {global} from '../store/types';

/**
 * @desc init layout data with the vuex of layout
 * @param {string} role
 * @param {number} expandMenuId
 */
export default function (role, expandMenuId) {
  store.commit(global.UPDATE_MENU_TREE, role);
  store.commit(global.UPDATE_ACTIVATED_MENU_ID, expandMenuId);
  store.commit(global.UPDATE_INITIAL_ROUTE_NAME);
};
