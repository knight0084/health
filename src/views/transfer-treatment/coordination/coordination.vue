<template>
  <div class="transfer-treatment-coordination">
    <!-- banner -->
    <div class="coordination-banner">
      <h2 class="banner-text">
        <span class="banner-icon"></span>
        <span class="banner-title">协作管理</span>
      </h2>
    </div>

    <!-- content -->
    <div class="coordination-content">
      <!-- form -->
      <div class="content-form">
        <Form ref="form"
              :mode="model"
              inline
              :label-width="75">
          <!-- add -->
          <FormItem class="form-btn"
                    :label-width="0">
            <Button type="primary"
                    @click="handleClickAdd">新增协作
            </Button>
          </FormItem>

          <!-- target -->
          <FormItem label="协作对象:">
            <Select v-model="model.target">
              <Option :value="0">全部</Option>
              <Option :value="1">我发起的</Option>
              <Option :value="2">我接收的</Option>
            </Select>
          </FormItem>

          <!-- category -->
          <FormItem label="协作类型:">
            <Select v-model="model.category">
              <Option :value="0">全部</Option>
              <Option :value="1">即时咨询</Option>
              <Option :value="2">双向转诊</Option>
            </Select>
          </FormItem>

          <!-- status -->
          <FormItem label="协作状态:">
            <Select v-model="model.status">
              <Option :value="0">全部</Option>
              <Option :value="1">已结束</Option>
              <Option :value="2">已打回</Option>
            </Select>
          </FormItem>

          <!-- search -->
          <FormItem class="form-search"
                    :label-width="0">
            <Input search
                   clearable
                   placeholder="任务主题/申请医生/申请机构"/>
          </FormItem>
        </Form>
      </div>

      <!-- table -->
      <div class="content-table">
        <Table stripe
               :data="coordination"
               :columns="columns"
               :loading="loading"/>
      </div>

      <!-- pager -->
      <div class="content-pager">
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
  export default {
    name: 'TransferTreatmentCoordination',
    data() {
      return {
        model: null,
        coordination: [],
        columns: [
          {
            key: 'category',
            title: '任务类型'
          },
          {
            key: 'title',
            title: '任务主题'
          },
          {
            key: 'status',
            title: '任务状态'
          },
          {
            key: 'category',
            title: '任务时间'
          }, {
            key: 'category',
            title: '申请机构'
          },
          {
            key: 'category',
            title: '申请医生'
          },
          {
            title: '操作',
            render: (h, params) => {
              return this.renderSeparator(h, params);

            }
          }
        ],
        loading: false,
        total: 100,
        pageSize: 10,
        pageNo: 1
      };

    },
    methods: {
      // init form model
      initFormModel() {
        this.model = {
          target: 0,
          category: 0,
          status: 0,
          keyword: ''
        };

      },
      // render separator
      renderSeparator(h, params) {
        const btn_detail = h('Button', {}, '详情');
        const btn_print = h('Button', {}, '打印');

        return h('div', [btn_detail, btn_print]);

      },
      // handle add coordination
      handleClickAdd() {
        console.log('add');

      },
      // handle page change
      handlePageChange(pageNo) {
        this.pageNo = pageNo;

      }
    },
    created() {
      this.initFormModel();

    }
  }
</script>

<style scoped lang="less">
  .transfer-treatment-coordination {

    // banner
    .coordination-banner {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 525px;
      background: url('../../../assets/img/transfer-treatment/coordination/banner.png') no-repeat;

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

    // content
    .coordination-content {
      margin: 400px 0 0;
      padding: 24px;
      border-radius: 5px 5px 0 0;
      overflow: hidden;

      // form
      .content-form {

        // form-btn
        .form-btn {
          margin-right: 25px;
        }

        // select
        .ivu-select {
          width: 120px;
        }

        // from-search
        .form-search {
          float: right;
          width: 200px;
          margin-right: 0;
        }

      }

      // table
      .content-table {

      }

      // pager
      .content-pager {
        margin: 30px 0 50px;
        text-align: right;
      }

    }

  }
</style>
