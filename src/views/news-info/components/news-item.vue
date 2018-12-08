<template>
  <!-- the item of news-info -->
  <div class="news-item">
    <!-- date -->
    <div class="item-date">
      <p class="date-day">{{value.publishTime | getFormattedDate}}</p>

      <p class="date-month">
        <span>{{value.publishTime | getFormattedYear}}</span> /
        <span>{{value.publishTime | getFormattedMonth}}</span>
      </p>
    </div>

    <!-- cover -->
    <div class="item-cover">
      <img :src="value.cover">
    </div>

    <!-- content -->
    <div class="item-content">
      <!-- title -->
      <h6 class="content-title">{{value.title}}</h6>

      <!-- summary-->
      <p class="content-summary">{{clipOverChars(value.summary)}}</p>

      <!-- view the detail -->
      <div class="content-detail">
        <span @click="handleViewDetail(value.id)">【查看详情】</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {string} from '../../../utils';

  export default {
    name: 'NewsItem',
    props: {
      // the item of news-info
      value: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        // the max chars of summary
        limitCount: 140
      };

    },
    filters: {
      getFormattedDate(value) {
        const date = new Date(value).getDate();

        return date < 10 ? "0" + date : "" + date;

      },
      getFormattedMonth(value) {
        const month = new Date(value).getMonth() + 1;

        return month < 10 ? "0" + month : "" + month;

      },
      getFormattedYear(value) {
        return new Date(value).getFullYear();

      }
    },
    methods: {
      // clip the over chars according to the the specified count
      clipOverChars(str) {
        return string.limitCharCount(str, this.limitCount);

      },
      // handle view the detail
      handleViewDetail(id) {
        this.$emit('on-view-detail', id);

      }
    }
  }
</script>

<style scoped lang="less">
  @import '../../../styles/mixin/index.less';

  .news-item {
    .clear();

    padding: 40px 80px;
    background-color: #fff;

    .item-date,
    .item-cover,
    .item-content {
      float: left;
    }

    // date
    .item-date {
      width: 95px;
      padding: 40px 0;

      .date-day {
        padding-left: 10px;
        line-height: 50px;
        font-size: 36px;
      }

      .date-day,
      .date-month {
        color: rgb(41, 144, 211);
      }

    }

    // cover
    .item-cover {
      width: 230px;
      height: 172px;
      border-radius: 2px;
      overflow: hidden;

      img {
        width: 230px;
        height: 172px;
      }

    }

    // content
    .item-content {
      width: 675px;
      margin-left: 40px;

      .content-title {
        height: 44px;
        line-height: 44px;
        font-size: 18px;
        color: #333;
      }

      .content-summary {
        height: 90px;
        padding: 8px 0 10px;
        line-height: 1.75;
        color: #999;
      }

      .content-detail {

        span {
          margin-left: -5px;
          color: rgb(41, 144, 211);
          cursor: pointer;
        }

      }

    }

  }
</style>
