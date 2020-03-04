import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Index from '../views/index.vue'
import Product from '../views/product.vue'
import Detail from '../views/detail.vue'
import Cart from '../views/cart.vue'
import Order from '../views/order.vue'
import OrderList from '../views/orderList.vue'
import OrderConfirm from '../views/orderConfirm.vue'
import OrderPay from '../views/orderPay.vue'
import AliPay from '../views/aliPay.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'Index',
        component: Index
      },{
        path: 'product/:id',
        name: 'Product',
        component: Product
      },{
        path: 'detail/:id',
        name: 'Detail',
        component: Detail
      },
    ]
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
    children: [
      {
        path: 'list',
        name: 'OrderList',
        component: OrderList
      },{
        path: 'confirm',
        name: 'OrderConfirm',
        component: OrderConfirm
      },{
        path: 'pay',
        name: 'OrderPay',
        component: OrderPay
      },{
        path: 'aliPay',
        name: 'AliPay',
        component: AliPay
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
