<template>
  <div class="login">
    <div class="login-header">
      <div class="container">
        <img src="/imgs/login-logo.png">
      </div>
    </div>
    <div class="login-body">
      <div class="container">
        <div class="login-form">
          <div class="title">账号登录</div>
          <div class="username">
            <input type="text" placeholder="邮箱/手机号码/小米ID" v-model="username">
          </div>
          <div class="password">
            <input type="password" placeholder="密码" v-model="password">
          </div>
          <div class="login-btn" @click="login">登 录</div>
          <div class="form-tip">
            <div class="tip-left">
              <a href="javascript:;">手机短信登录/注册</a>
            </div>
            <div class="tip-right">
               <a href="javascript:;">立即注册 | </a>
               <a href="javascript:;">忘记密码</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="login-footer">
      <div class="footer-link">
        <a href="javascript:;">简体 | </a>
        <a href="javascript:;">繁体 | </a>
        <a href="javascript:;">English | </a>
        <a href="javascript:;">常见问题 | </a>
        <a href="javascript:;">隐私政策</a>
      </div>
      <div class="footer-link">
        <a href="javascript:;">小米公司版权所有-京ICP备10046444-</a>
        <a href="javascript:;">京公网安备11010802020134号-京ICP证110507号</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      userId: ''
    }
  },
  methods: {
    login () {
      let { username, password } = this
      this.axios.post('/user/login', {
        username,
        password
      }).then( (res)=> {
        this.$cookie.set('userId', res.id, {expires: '1M'})
        this.$router.push('/index')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './../assets/scss/base.scss';
  .login {
    .login-header {
      .container {
        img {
          width: 200px;
          height: 98px;
        }
      }
    }
    .login-body {
      width: 100%;
      height: 576px;
      background: url('/imgs/login-bg.jpg') no-repeat center;
      .container {
        position: relative;
        .login-form {
          width: 410px;
          height: 510px;
          background-color: #ffffff;
          position: absolute;
          right: 0;
          top: 33px;
          padding: 40px 31px 0 31px;
          box-sizing: border-box;
          .title {
            text-align: center;
            font-size: 24px;
            color: #FF6600;
            font-weight: bold;
            margin-bottom: 49px;
          }
          .username {
            margin-bottom: 20px;
          }
          .password {
            margin-bottom: 30px;
          }
          input {
            width: 100%;
            height: 50px;
            line-height: 50px;
            border: 1px solid #E5E5E5;
            padding-left: 18px;
            box-sizing: border-box;
          }
          .login-btn {
            width: 100%;
            height: 50px;
            line-height: 50px;
            background-color: #FF6600;
            text-align: center;
            margin-bottom: 14px;
            font-size: 14px;
            color: #FFF;
            cursor: pointer;
          }
          .form-tip {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            .tip-left {
              a {
                color: #FF6600;
              }
            }
            .tip-right {
              a {
                color: #999999;
              }
            }
          }
        }
      }
    }
    .login-footer {
      position: relative;
      top: 100px;
      left: 50%;
      transform: translate(-50%, 0);
      text-align: center;
      a {
        color: #333333;
        font-size: 14px;
        line-height: 38px;
      }
    }
  }
</style>