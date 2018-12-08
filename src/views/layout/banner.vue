<template>
  <!-- banner -->
  <div class="banner"
       v-if="bannerConfig"
       :style="{backgroundImage: `url(${bannerConfig.image})`}">
    <h2 class="banner-text">
      <span class="banner-icon iconfont"
            :class="`icon-${bannerConfig.icon}`"></span>
      <span class="banner-title">{{bannerConfig.title}}</span>
    </h2>
  </div>
</template>

<script>
  import bannerMap from '../../configs/banner-map';

  export default {
    name: 'Banner',
    data() {
      return {
        bannerMap: bannerMap
      };

    },
    computed: {
      // banner config according to current route
      bannerConfig() {
        const currentRouteName = this.$route.name;

        return this.bannerMap[currentRouteName];

      }
    }

  }
</script>

<style scoped lang="less">
  .banner {
    height: 525px;
    padding-top: 200px;
    background: no-repeat center;
    background-size: cover;

    .banner-text {
      text-align: center;

      // icon
      .banner-icon {

      }

      // title
      .banner-title {
        font: 700 42px Cursive, Serif;
        color: rgb(41, 144, 211);
        letter-spacing: 5px;
      }

    }

  }
</style>
