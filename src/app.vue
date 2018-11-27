<template>
  <div id="app" class="app">
    <!-- header -->
    <header class="header">
      <top/>
    </header>

    <!-- do not using layout -->
    <router-view v-if="notLayout"/>

    <!-- using layout -->
    <layout v-else/>
  </div>
</template>

<script>
  import Top from './views/layout/top';
  import Layout from './views/layout';
  import {mapMutations} from 'vuex';
  import {sessionStorage} from './utils';

  export default {
    name: 'App',
    components: {Top, Layout},
    computed: {
      // whether not using layout
      notLayout() {
        const currentRoute = this.$route;

        return currentRoute.meta && currentRoute.meta.notLayout;

      }
    },
    watch: {
      $route(n) {
        this.updateActivatedName(n);

      }
    },
    methods: {
      ...mapMutations('layout', [
        'mtt_update_menu_tree',
        'mtt_update_activated_name'
      ]),

      // update current activated menu name
      updateActivatedName(route) {
        const {name, meta} = route;
        const activatedName = meta && meta.highlight ? meta.highlight : name;

        this.mtt_update_activated_name(activatedName);

      }
    },
    created() {
      const profile = sessionStorage.get('profile');

      // update menu-tree by role
      this.mtt_update_menu_tree(profile ? profile.role : null);

      // update activate menu name
      this.updateActivatedName(this.$route);

    }
  }
</script>

<style scoped lang="less">
  .app {
    height: 100%;

    // header
    .header {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1001;
      width: 100%;
    }

  }
</style>
