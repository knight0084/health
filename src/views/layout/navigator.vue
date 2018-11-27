<template>
  <nav class="navigator"
       v-if="mappedMenuTree.length">
    <!-- menu -->
    <Menu class="navigator-menu"
          ref="menu"
          mode="horizontal"
          accordion
          :active-name="activatedMenuName"
          @on-select="handleMenuSelect">
      <template v-for="menu in mappedMenuTree">
        <!-- has submenu -->
        <Submenu v-if="menu._children && menu._children.length"
                 :name="menu.name"
                 :key="menu.name">
          <!-- menu-title -->
          <template slot="title">{{menu.title}}</template>

          <!-- submenu-item -->
          <MenuItem v-for="submenu in menu._children"
                    :name="submenu.name"
                    :key="submenu.name">{{submenu.title}}
          </MenuItem>
        </Submenu>

        <!-- don't has submenu -->
        <MenuItem v-else
                  :name="menu.name"
                  :key="menu.name">{{menu.title}}
        </MenuItem>
      </template>
    </Menu>
  </nav>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: 'Navigator',
    computed: {
      // state stored in the layout module
      ...mapState('layout', ['menuTree', 'activatedName']),

      // menu-tree mapped according to the role
      mappedMenuTree() {
        return this.menuTree ? JSON.parse(JSON.stringify(this.menuTree)) : [];

      },
      // current activated menu name, default is 'home'
      activatedMenuName() {
        return this.activatedName || 'home';

      }
    },
    methods: {
      handleMenuSelect(name) {
        console.log(name);

      }
    }
  }
</script>

<style scoped lang="less">
  .navigator {

  }
</style>
