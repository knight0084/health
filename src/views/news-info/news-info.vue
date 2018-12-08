<template>
  <div class="news-info">
    <!-- banner -->
    <div class="news-info-banner">
      <h2 class="banner-text">
        <span class="banner-icon"></span>
        <span class="banner-title">新闻资讯</span>
      </h2>
    </div>

    <!-- tab -->
    <div class="news-info-tab"></div>

    <!-- pane -->
    <div class="news-info-pane">
      <!-- pane-list -->
      <ul class="news-info-pane-list">
        <li class="news-info-pane-item"
            v-for="news in newsList">
          <news-item :value="news"></news-item>
        </li>
      </ul>

      <!-- pane-pager -->
      <div class="news-info-pane-pager">
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
  import {NewsItem} from './components'
  // TODO: to delete, mock data
  import {list} from '../../mock/news-info';
  // TODO: to delete, mock loading
  import {LoadingBar} from 'iview';

  export default {
    name: 'NewsInfo',
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
  .news-info {

    // news-banner
    .news-info-banner {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 525px;
      background: url('../../assets/img/news-info/banner.png') no-repeat;

      .banner-text {
        margin-top: 200px;
        text-align: center;

        // banner-title
        .banner-title {
          font: 700 42px Cursive, Seri;
          color: rgb(41, 144, 211);
          letter-spacing: 5px;
        }

      }

    }

    // news-tab
    .news-info-tab {

    }

    // news-pane
    .news-info-pane {
      margin: 400px 0 0;
      border-radius: 5px 5px 0 0;
      overflow: hidden;

      // news-list
      .news-info-pane-list {
        list-style-type: none;

        // news-item
        .news-info-pane-item {
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
      .news-info-pane-pager {
        margin: 50px 0;
        text-align: center;
      }

    }

  }
</style>
