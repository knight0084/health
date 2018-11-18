import utils from "../utils";
import genMenuTree from './gen-menu-tree';

// recursively get the deepest first-leaf-menu-item's name
function recursivelyGetFirstChildName(menuItem) {
  if (!menuItem) return null;

  const children = menuItem._children;

  if (!children || !children.length) return menuItem.name;

  return recursivelyGetFirstChildName(children[0]);
}


// get the initial route-name according to role
export default () => {
  const {role} = utils.sessionStorage.get('profile');
  const menuTree = genMenuTree(role);

  // regarding the first-leaf-menu-item's name as the initial route name
  return recursivelyGetFirstChildName(menuTree[0]);
};
