<template>
  <div class="layout">
    <!-- banner -->
    <section class="layout-banner">
      <banner/>
    </section>

    <!-- main -->
    <main class="layout-main">
      <template v-if="keepAlive">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </template>

      <template v-else>
        <router-view/>
      </template>
    </main>
  </div>
</template>

<script>
  import Banner from './banner';

  export default {
    name: 'Layout',
    components: {
      Banner
    },
    computed: {
      // whether using keep-alive
      keepAlive() {
        const currentRoute = this.$route;

        return currentRoute.meta && currentRoute.meta.keepAlive;

      }
    }
  }
</script>

<style scoped lang="less">
  .layout {
    position: relative;
    width: 100%;
    height: 100%;

    // banner
    .layout-banner {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }

    // main
    .layout-main {
      position: absolute;
      top: 400px;
      left: 50%;
      width: 1200px;
      min-height: 300px;
      border-radius: 5px 5px 0 0;
      margin-left: -600px;
      padding: 24px;
      background-color: #fff;
    }

  }
</style>
