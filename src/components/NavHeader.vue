<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">loT</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">金融</a>
          <a href="javascript:;">有品</a>
          <a href="javascript:;">小爱开放平台</a>
          <a href="javascript:;">企业团购</a>
          <a href="javascript:;">资质证照</a>
          <a href="javascript:;">规则协议</a>
          <a href="javascript:;">Select Location</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{ username }}</a>
          <a href="javascript:;" v-if="!username" @click="login">登录</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;" class="topbar-cart" @click="goToCart"><span class="icon-cart"></span>购物车</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="menu-item">
            <span class="menu-text">小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item, index) in productList" :key="index">
                  <a :href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="menu-item">
            <span class="menu-text">RedMi红米</span>
          </div>
          <div class="menu-item">
            <span class="menu-text">电视</span>
          </div>
          <div class="menu-item">
            <span class="menu-text">笔记本</span>
          </div>
          <div class="menu-item">
            <span class="menu-text">家电</span>
          </div>
          <div class="menu-item">
            <span class="menu-text">服务</span>
          </div>
          <div class="menu-item">
            <span class="menu-text">社区</span>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavHeader',
  data () {
    return {
      username: '',
      productList: []
    }
  },
  filters: {
    currency (val) {
      if (!val) return '0.00'
      return '¥' + val.toFixed(2) + '元'
    }
  },
  mounted () {
    this.getProductList()
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    goToCart () {
      this.$router.push('/cart')
    },
    getProductList () {
      this.axios.get('/products', {
        params: {
          categoryId: '100012'
        }
      }).then( (res) => {
        if (res.list.length >= 6) {
          this.productList = res.list.slice(0, 6)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "./../assets/scss/base.scss";
  @import "./../assets/scss/mixin.scss";
  .header {
    .nav-topbar {
      height: 39px;
      line-height: 39px;
      background-color: #333333;
      .container {
        @include flex(space-between, center)
      }
      a {
        color: #B0B0B0;
        margin-right: 14px;
        &:last-child {
          margin-right: 0;
        }
      }
      .topbar-cart {
        display: inline-block;
        width: 110px;
        background-color: #FF6600;
        text-align: center;
        color: #FFFFFF;
        .icon-cart {
          @include bgImg(16px, 12px, '/imgs/icon-cart-checked.png', contain)
          margin-right: 4px;
        }
      }
    }
  }
  
  .nav-header {
    .container {
      position: relative;
      height: 112px;
      @include flex(space-between, center)
      .header-logo {
        width: 55px;
        height: 55px;
        background-color: #FF6600;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before {
            content: ' ';
            @include bgImg(55px, 55px, '/imgs/mi-logo.png', contain)
            transition: margin .2s;
          }
          &:after {
            content: ' ';
            @include bgImg(55px, 55px, '/imgs/mi-home.png', contain)
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin .2s;
          }
        }
      }
      .header-menu {
        width: 643px;
        padding-left: 209px;
        .menu-item {
          display: inline-block;
          font-size: 16px;
          line-height: 112px;
          color: #333333;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: #FF6600;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
        }
        .children {
          position: absolute;
          top: 112px;
          left: 0;
          width: 1226px;
          height: 0;
          opacity: 0;
          overflow: hidden;
          border-top: 1px solid #E5E5E5;
          box-shadow:0px 7px 6px 0px rgba(0, 0, 0, 0.11);
          transition: all .3s;
          .product {
            position: relative;
            float: left;
            width: 16.6%;
            height: 220px;
            line-height: 12px;
            font-size: 12px;
            text-align: center;
            &:before {
              content: ' ';
              width: 1px;
              height: 99px;
              background-color: #D7D7D7;
              position: absolute;
              top: 28px;
              right: 0;
            }
            &:last-child:before {
              display: none;
            }
            img {
              width: auto;
              height: 111px;
              margin-top: 26px;
            }
            .pro-name {
              margin-top: 19px;
              margin-bottom: 8px;
              color: #333333;
            }
            .pro-price {
              color: #FF6600;
            }
          }
        }
      }
      .header-search {
        .wrapper {
          width: 317px;
          height: 50px;
          border: 1px solid #E0E0E0;
          input {
            width: 264px;
            height: 50px;
            border: none;
            border-right: 1px solid #E0E0E0;
            box-sizing: border-box;
            padding-left: 14px;
          }
          a {
            @include bgImg(50px, 18px, '/imgs/icon-search.png', 18px)
          }
        }
      }
    }
  }
</style>
