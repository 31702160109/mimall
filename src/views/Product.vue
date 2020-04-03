<template>
  <div>
    <product-param>
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </product-param>
    <div class="h"></div>
    <div class="h"></div>
    <div class="h"></div>
    <div class="h"></div>
    <div class="h"></div>
    <div class="h"></div>
    <div class="h"></div>
    <div class="h"></div>
    <div class="h"></div>
    <div class="h"></div>
  </div>
</template>

<script>
import ProductParam from './../components/ProductParam'
export default {
  name: 'Product',
  components: {
    ProductParam
  }
}
</script>

<style lang="scss">
@import './../assets/scss/button.scss';
.h {
  height: 200px;
}
</style>
