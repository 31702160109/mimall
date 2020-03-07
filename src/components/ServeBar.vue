<template>
  <div class="serve">
    <div class="container">
      <ul>
        <li class="serve-item">
          <span class="item-icon-1"></span>
          <span class="item-text">预约维修服务</span>
        </li>
        <li class="serve-item">
          <span class="item-icon-2"></span>
          <span class="item-text">7天无理由退货</span>
        </li>
        <li class="serve-item">
          <span class="item-icon-3"></span>
          <span class="item-text">15天免费换货</span>
        </li>
        <li class="serve-item">
          <span class="item-icon-4"></span>
          <span class="item-text">满150元包邮</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServeBar'
}
</script>

<style lang="scss" scoped>
  @import './../assets/scss/base.scss';
  @import './../assets/scss/mixin.scss';
  .serve {
    padding: 20px 0;
    background-color: #ffffff;
    font-size: 16px;
    .container{
      .serve-item {
        display: inline-block;
        width: 24.9%;
        text-align: center;
        border-right: 1px solid #E5E5E5;
        cursor: pointer;
        .item-text {
          vertical-align: middle;
          line-height: 40px;
          margin-left: 6px;
        }
        .item-icon-1 {
          @include bgImg(20px, 20px, '/imgs/icon-setting.png', contain);
          vertical-align: middle;
        }
        .item-icon-2 {
          @include bgImg(20px, 19px, '/imgs/icon-7day.png', contain);
          vertical-align: middle;
          margin-bottom: 3px;
        }
        .item-icon-3 {
          @include bgImg(20px, 22px, '/imgs/icon-15day.png', contain);
          vertical-align: middle;
        }
        .item-icon-4 {
          @include bgImg(22px, 22px, '/imgs/icon-post.png', contain);
          vertical-align: middle;
        }
      }
    }
  }
</style>