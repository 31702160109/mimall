<template>
  <div>
    <h1>Order</h1>
    <order-header></order-header>
    <router-view></router-view>
    <order-footer></order-footer>
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader'
import OrderFooter from '../components/OrderFooter'
export default {
  name: 'Order',
  components: {
    OrderHeader,
    OrderFooter
  }
}
</script>

<style>

</style>
