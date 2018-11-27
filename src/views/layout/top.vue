<template>
  <div class="top">
    <!-- type area -->
    <div class="top-type-area">
      <!-- logo -->
      <logo class="top-logo"/>

      <!-- navigator -->
      <navigator class="top-navigator"/>

      <!-- profile -->
      <profile class="top-profile"/>
    </div>
  </div>
</template>

<script>
  import Logo from './logo';
  import Navigator from './navigator';
  import Profile from './profile';

  export default {
    name: 'Top',
    components: {Logo, Navigator, Profile}
  }
</script>

<style scoped lang="less">
  .top {
    background-color: rgba(255, 255, 255, .15);

    // top-type-area
    .top-type-area {
      position: relative;
      width: 1200px;
      margin: 0 auto;
      padding: 0 100px 0 260px;

      // top-logo
      .top-logo {
        position: absolute;
        top: 0;
        left: 0;
        width: 260px;
        height: 100%;
      }

      // top-navigator
      .top-navigator {

      }

      // top-profile
      .top-profile {
        position: absolute;
        top: 0;
        right: 0;
        width: 100px;
        height: 100%;
      }

    }

  }
</style>
