<template>
  <div class="nav-bar" :class="{ 'is-fixed': isFixed}">
    <div class="container">
      <div class="pro-left">小米8 透明探索版</div>
      <div class="pro-right">
        <a href="javascript:;">概述</a>
        <span>|</span>
        <a href="javascript:;">参数</a>
        <span>|</span>
        <a href="javascript:;">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      isFixed: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.initHeight)
  },
  methods: {
    initHeight () {
      // document.body.scrollTop 兼容 IE 浏览器
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.isFixed = scrollTop > 151 ? true : false
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.initHeight)
  }
}
</script>

<style lang="scss" scoped>
@import './../assets/scss/base.scss';
.nav-bar {
  height: 71px;
  line-height: 71px;
  background-color: #FFF;
  border-top: 1px solid #E5E5E5;
  &.is-fixed {
    width: 100%;
    position: fixed;
    top: 0;
    box-shadow: 0 5px 5px #CCCCCC;
  }
  .container {
    display: flex;  
    flex-direction: row;
    justify-content: space-between;
    .pro-left {
      font-size: 18px;
      color: #333333;
      font-weight: bold;
    }
    .pro-right {
      font-size: 14px;
      a {
        color: #666666;
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  }
}
</style>
