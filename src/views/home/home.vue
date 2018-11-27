<template>
  <div class="home">
    <!-- type-area -->
    <div class="type-area">
      <!-- home-login -->
      <div class="home-login">
        <!-- login-title -->
        <div class="login-title">用户登录</div>

        <!-- login-form -->
        <div class="login-form">
          <Form ref="form"
                :model="model"
                :rules="rules">
            <!-- username -->
            <FormItem prop="username">
              <Input v-model="model.username"
                     type="text"
                     size="large"
                     autofocus
                     placeholder="手机号/会员名/邮箱"
                     prefix="md-person"
                     @on-enter="handleLoginClick"/>
            </FormItem>

            <!-- password-->
            <FormItem prop="password">
              <Input v-model="model.password"
                     type="password"
                     size="large"
                     placeholder="登录密码"
                     prefix="md-lock"
                     @on-enter="handleLoginClick"/>
            </FormItem>

            <FormItem>
              <Button type="primary"
                      size="large"
                      long
                      :loading="registering"
                      @click="handleLoginClick">登 录
              </Button>
            </FormItem>

            <!-- login-tips -->
            <p class="form-tips" v-if="usnOrPwdError">用户名或密码错误</p>
          </Form>
        </div>

        <!-- login-associated -->
        <!--<div class="login-associated">
          <span class="associated-forget">忘记密码?</span>
          <span class="associated-register">注册</span>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
  import {login} from '../../apis';

  export default {
    name: 'Home',
    data() {
      return {
        model: null,
        rules: {
          username: [
            {required: true, message: '请填写用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请填写用密码', trigger: 'blur'}
          ]
        },
        // whether registering
        registering: false,
        // username or password error
        usnOrPwdError: false
      };

    },
    methods: {
      initFormModel() {
        this.model = {
          username: '',
          password: ''
        };

      },
      async handleLoginClick() {
        const valid = await this.$refs.form.validate();

        if (!valid) return;

        // show loading
        this.registering = true;

        const res = await login(this.model);

        // hide loading
        this.registering = false;

        if (!res || !res.result) {
          this.usnOrPwdError = true;

          return;
        }

        const {result: {token, profile}} = res;

        // store token and profile in session storage
        utils.sessionStorage.set('token', token);
        utils.sessionStorage.set('profile', profile);

      }
    },
    created() {
      this.initFormModel();

    }
  }
</script>

<style scoped lang="less">
  .home {
    height: 100%;
    background: url('../../assets/img/home/bg.png');

    // type-area
    .type-area {
      position: relative;
      width: 1200px;
      height: 100%;
      margin: 0 auto;

      // home-login
      .home-login {
        position: absolute;
        top: 22%;
        right: 0;
        width: 360px;
        border-radius: 4px;
        background-color: rgba(255, 255, 255, .3);
        box-shadow: 0 3px 5px rgba(0, 0, 0, .2);

        // login-title
        .login-title {
          position: relative;
          height: 50px;
          padding: 0 16px;
          line-height: 50px;
          font-size: 14px;
          font-weight: 700;
          color: #2990d3;

          &::after {
            content: ' ';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #bbb;
          }

        }

        // login-form
        .login-form {
          height: 190px;
          margin: 40px 0 30px;
          padding: 0 16px;

          .ivu-form-item {
            margin-bottom: 30px;
          }

          // login-tips
          .form-tips {
            margin-top: -26px;
            margin-bottom: 0;
            color: #ed4014;
          }

        }

        // login-associated
        /*.login-associated {
          margin-bottom: 30px;
          padding-right: 16px;
          font-weight: 700;
          color: #999;
          text-align: right;
          cursor: pointer;

          // associated-forget
          .associated-forget {
            margin-right: 10px;
          }

          span:hover {
            color: #666;
          }

        }*/

      }

    }

  }
</style>
