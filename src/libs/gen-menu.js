import menuRole from '../configs/menu-role';
import menuList from '../configs/menu-list';

// generate menu according to role
export default role => {
  const menuTree = [],
    menuItemIds = !role || !menuRole[role.toLowerCase()]
      ? menuRole.default
      : menuRole[role.toLowerCase()];

  menuItemIds.forEach(menuItemId => {
    // find the menuItem by id
    const menuItem = menuList.find(menuItem => menuItem.id === menuItemId);

    if (!menuItem) throw new Error(`the menu-item's id:${menuItemId} defined for role:${role} in the menu-role.js module is not a valid menu-item in menu-list.js module`);

    const pId = menuItem.pid;

    // if the pId field of this menu-item equals null, means it is a top-level menu-item
    if (!pId) {
      // remove the children to avoid generator repeated child while calling this function multi-times
      delete menuItem.children;

      menuTree.push(menuItem);

      return;
    }

    // is not a top-level menu-item, find it's parent menu-item
    const pMenu = menuList.find(menuItem => menuItem.id === pId);

    if (!pMenu) throw new Error(`menu-item ${menuItemId}'s parent-menu's id:${pId} doesn't match anyone in the menu-list.js module`);

    // attach children the parent-menu object to store the children menu-item
    pMenu.children = pMenu.children || [];

    pMenu.children.push(menuItem);

  });

  return menuTree;

}


