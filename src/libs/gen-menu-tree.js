import menuList from '../configs/menu-list';
import menuRole from '../configs/menu-role';

// generate menu-tree according to role
export default role => {
  const menuTree = [];
  const mappedMenus = !role || !menuRole[role.toLowerCase()] ? menuRole.default : menuRole[role.toLowerCase()];

  mappedMenus.forEach(menuId => {
    // find the menu by id
    const menuItem = menuList.find(menu => menu.id === menuId);

    if (!menuItem) throw new Error(`the id:${menuId} of menu defined for role:${role} in the menu-role.js module is not a valid menu in menu-list.js module`);

    const pId = menuItem.pid;

    // if the pId field of this menu equals null, means it is a top-level menu
    if (!pId) {
      // remove the children to avoid generator repeated child while calling this function multi-times
      delete menuItem.children;

      menuTree.push(menuItem);

      return;
    }

    // is not a top-level menu, find it's parent menu
    const pMenu = menuList.find(menu => menu.id === pId);

    if (!pMenu) throw new Error(`menu ${menuId}'s parent-menu's id:${pId} doesn't match anyone in the menu-list.js module`);

    // attach _children property to the parent-menu object to store the children menu
    pMenu._children = pMenu._children || [];

    pMenu._children.push(menuItem);

  });

  return menuTree;

};
