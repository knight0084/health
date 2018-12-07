<template>
  <div class="health-pedia">
    <!-- banner -->
    <div class="health-pedia-banner">
      <h2 class="banner-text">
        <span class="banner-icon"></span>
        <span class="banner-title">健康百科</span>
      </h2>
    </div>

    <!-- tab -->
    <div class="health-pedia-tab"></div>

    <!-- pane -->
    <div class="health-pedia-pane">
      <!-- pane-list -->
      <ul class="health-pedia-pane-list">
        <li class="health-pedia-pane-item"
            v-for="news in newsList">
          <news-item :value="news"></news-item>
        </li>
      </ul>

      <!-- pane-pager -->
      <div class="health-pedia-pane-pager">
        <Page :total="total"
              :current="pageNo"
              :page-size="pageSize"
              show-elevator
              @on-change="handlePageChange"/>
      </div>
    </div>
  </div>
</template>

<script>
  import {NewsItem} from '../news-info/components'
  // TODO: to delete, mock data
  import {list} from '../../mock/health-pedia';
  // TODO: to delete, mock loading
  import {LoadingBar} from 'iview';

  export default {
    name: 'HealthPedia',
    components: {NewsItem},
    data() {
      return {
        // TODO: using remote news list
        // newsList: list,
        total: list.length,
        pageSize: 5,
        pageNo: 1
      };

    },
    computed: {
      // TODO: to delete, just mock
      newsList() {
        const startIndex = (this.pageNo - 1) * this.pageSize;
        const endIndex = this.pageNo * this.pageSize;

        return list.slice(startIndex, endIndex);

      }
    },
    methods: {
      // handle page change
      handlePageChange(pageNo) {
        LoadingBar.start();

        setTimeout(() => {
          this.pageNo = pageNo;

          LoadingBar.finish();

        }, 1000);

      }
    }
  }
</script>

<style scoped lang="less">
  .health-pedia {

    // news-banner
    .health-pedia-banner {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 525px;
      background: url('../../assets/img/health-pedia/banner.png') no-repeat;

      .banner-text {
        margin-top: 200px;
        text-align: center;

        // banner-title
        .banner-title {
          font: 700 42px Cursive, Seri;
          color: #0876D5;
          letter-spacing: 5px;
        }

      }

    }

    // news-tab
    .health-pedia-tab {

    }

    // news-pane
    .health-pedia-pane {
      margin: 400px 0 50px;
      border-radius: 5px 5px 0 0;
      overflow: hidden;

      // news-list
      .health-pedia-pane-list {
        list-style-type: none;

        // news-item
        .health-pedia-pane-item {
          position: relative;

          &::after {
            content: ' ';
            position: absolute;
            left: 5%;
            bottom: 0;
            width: 90%;
            border: 1px dashed #dcdcdc;
          }

        }

      }

      // news-pager
      .health-pedia-pane-pager {
        margin: 50px 0;
        text-align: center;
      }

    }

  }
</style>
