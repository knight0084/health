<template>
  <div class="top">
    <!-- logo -->
    <logo/>

    <!-- navigator -->
    <navigator/>

    <!-- profile -->
    <profile/>
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

  }
</style>
