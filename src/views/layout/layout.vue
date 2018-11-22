<template>
  <div class="layout">
    <!-- main content -->
    <main class="main">
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
  export default {
    name: 'Layout',
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
    width: 100%;
    height: 100%;

    // header
    .header {

    }

    // main content
    .main {

    }

  }
</style>
