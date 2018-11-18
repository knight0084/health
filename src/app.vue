<template>
  <div id="app" class="app">
    <!-- don't using layout -->
    <router-view/>

    <!-- using layout -->
    <layout/>
  </div>
</template>

<script>
  import Layout from './views/layout';

  export default {
    name: 'App',
    components: {Layout},
    computed: {},
    created() {
    }
  }
</script>

<style scoped lang="less">
  .app {
    width: 100%;
    height: 100%;
  }
</style>
