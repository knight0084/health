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
        this.$router.push({name});

      }
    }
  }
</script>

<style lang="less">
  .navigator {

    .navigator-menu.ivu-menu-light.ivu-menu-horizontal {
      background-color: transparent;

      &::after {
        background-color: transparent;
      }

      // top-level
      > .ivu-menu-item,
        // second-level
      > .ivu-menu-submenu .ivu-menu-submenu-title {
        font-weight: 600;
        color: #fff;
        text-shadow: 0 1px 0 #999;
      }

      // activated
      > .ivu-menu-item.ivu-menu-item-active {
        color: #2990d3;
        text-shadow: none;
      }

      > .ivu-menu-submenu.ivu-menu-item-active .ivu-menu-submenu-title {
        color: #2990d3;
        text-shadow: none;
      }

    }

  }
</style>
