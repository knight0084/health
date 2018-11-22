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

  export default {
    name: 'App',
    components: {Top, Layout},
    computed: {
      // whether not using layout
      notLayout() {
        const currentRoute = this.$route;

        return currentRoute.meta && currentRoute.meta.notLayout;

      }
    }
  }
</script>

<style scoped lang="less">
  .app {
    width: 100%;
    height: 100%;
  }
</style>
