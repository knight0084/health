import utils from '../utils';
import genMenu from './gen-menu';

// recursively get the deepest first-leaf-menu-item's id
function recursivelyGetFirstChildId(menuItem) {
  if (!menuItem) return null;

  const children = menuItem._children;

  if (!children || !children.length) return menuItem.id;

  return recursivelyGetFirstChildId(children[0]);
}


// get the initial route-name according to role
export default () => {
  const {role} = utils.sessionStorage.get('profile');
  const menuTree = genMenu(role);

  // regarding the first-leaf-menu-item's name as the initial route name
  return recursivelyGetFirstChildId(menuTree[0]);
};
