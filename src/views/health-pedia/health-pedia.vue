<template>
  <div class="health-pedia">
    <!-- tab -->
    <div class="health-pedia-tab"></div>

    <!-- pane -->
    <div class="health-pedia-pane">
      <!-- pane-list -->
      <ul class="health-pedia-pane-list">
        <li class="health-pedia-pane-item"
            v-for="news in newsList">
          <news-item :value="news"/>
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
    margin-top: -24px;

    // news-tab
    .health-pedia-tab {

    }

    // news-pane
    .health-pedia-pane {

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
        margin: 30px 0;
        text-align: center;
      }

    }

  }
</style>
