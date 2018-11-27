// original menu list, one-dimension array
import menuList from '../../configs/menu-list';
// generate menu tree according to the role
import genMenuTree from '../../libs/gen-menu-tree';

// state
const state = {
  menuList,
  menuTree: null,
  activatedName: ''
};

// mutations
const mutations = {
  // update the menu tree according to the role
  mtt_update_menu_tree(state, role) {
    state.menuTree = genMenuTree(role);

  },
  // update the activated menu name
  mtt_update_activated_name(state, name) {
    state.activatedName = name || 'home';

  }
};

export default {
  namespaced: true,
  state,
  mutations
};
