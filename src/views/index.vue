<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrapper">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(itemList, indexI) in menuList" :key="indexI">
                  <li v-for="(item, indexJ) in itemList" :key="indexJ">
                    <a :href="'/#/product/' + item.id">
                      <img :src="item.img">
                      <span>{{ item.name }}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item"><a href="javascript:;">电视 盒子</a></li>
            <li class="menu-item"><a href="javascript:;">笔记本 显示器 平板</a></li>
            <li class="menu-item"><a href="javascript:;">家电 插线板</a></li>
            <li class="menu-item"><a href="javascript:;">出行 穿戴</a></li>
            <li class="menu-item"><a href="javascript:;">智能 路由器</a></li>
            <li class="menu-item"><a href="javascript:;">电源 配件</a></li>
            <li class="menu-item"><a href="javascript:;">健康 儿童</a></li>
            <li class="menu-item"><a href="javascript:;">耳机 音响</a></li>
            <li class="menu-item"><a href="javascript:;">生活 箱包</a></li>
          </ul>
        </div>
        <swiper :options="swiperOption">
          <swiperSlide v-for="item in swiperList" :key="item.id">
            <a :href="'/#/product/' + item.id"><img :src="item.img"></a>
          </swiperSlide>
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a v-for="(item, index) in adsList" :key="index" :href="'/#/product/'+ item.id">
          <img v-lazy="item.img">
        </a>
      </div>
      <div class="banner-box">
        <a href="javascript:;">
          <img v-lazy="'/imgs/banner-2.webp'">
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <span class="title">手机</span>
        <div class="product-wrapper">
          <div class="banner-left">
            <img v-lazy="'/imgs/banner-3.webp'">
          </div>
          <div class="product-list">
            <div class="list" v-for="(itemList, indexI) in phoneList" :key="indexI">
              <div class="item" v-for="(item, indexJ) in itemList" :key="indexJ">
                <div class="item-img">
                  <img v-lazy="item.mainImage">
                </div>
                <div class="item-info">
                  <h3>{{ item.name }}</h3>
                  <p class="desc">{{ item.subtitle }}</p>
                  <p class="price">{{ item.price }} 元</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <modal modalType="middle" title="添加收获地址" btnType="1" sureText="确认" :showModal="showModal" @submit="goToCart" @cancel="showModal=false">
      <template v-slot:modalBody>
        <p>商品添加成功</p>
      </template>
    </modal> -->
    <serve-bar></serve-bar>
  </div>
</template>

<script>
import ServeBar from './../components/ServeBar'
// import Modal from './../components/Modal'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'Index',
  components: {
    swiper,
    swiperSlide,
    // Modal,
    ServeBar
  },
  data () {
    return {
      // showModal: false,
      swiperOption: {
        loop: true,
        autoplay: true,
        effect: 'cube',
        // 分页器
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        // 前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      swiperList: [
        {id: 42, img: '/imgs/slider/new-slide-3.jpg'},
        {id: 43, img: '/imgs/slider/new-slide-2.webp'},
        {id: 45, img: '/imgs/slider/new-slide-1.jpg'},
        {id: 47, img: '/imgs/slider/new-slide-4.webp'},
        {id: 48, img: '/imgs/slider/slide-5.jpg'}
      ],
      menuList: [
        [
          {id:42, name:'腾讯黑鲨游戏手机3', img: '/imgs/sliderItem/item-box-1.webp'},
          {id:43, name:'小米CC9 Pro', img: '/imgs/sliderItem/item-box-2.webp'},
          {id:44, name:'Redmi Note 8', img: '/imgs/sliderItem/item-box-3.webp'},
          {id:45, name:'Redmi A7', img: '/imgs/sliderItem/item-box-4.jpg'}
        ],
        [
          {id:46, name:'腾讯黑鲨游戏手机3 Pro', img: '/imgs/sliderItem/item-box-5.webp'},
          {id:47, name:'小米CC9', img: '/imgs/sliderItem/item-box-6.webp'},
          {id:48, name:'Redmi Note 7 Pro', img: '/imgs/sliderItem/item-box-7.png'},
          {id:49, name:'Redmi A8', img: '/imgs/sliderItem/item-box-8.jpg'}
        ],
        [
          {id:50, name:'小米10 Pro', img: '/imgs/sliderItem/item-box-9.webp'},
          {id:51, name:'小米10', img: '/imgs/sliderItem/item-box-10.webp'},
          {id:52, name:'Redmi K30 4G', img: '/imgs/sliderItem/item-box-11.png'},
          {id:53, name:'Redmi K30 5G', img: '/imgs/sliderItem/item-box-12.jpg'}
        ],
        [
          {id:54, name:'腾讯黑鲨游戏手机3 Pro', img: '/imgs/sliderItem/item-box-13.webp'},
          {id:55, name:'小米CC9', img: '/imgs/sliderItem/item-box-14.webp'},
          {id:56, name:'Redmi Note 7 Pro', img: '/imgs/sliderItem/item-box-15.png'},
          {id:57, name:'Redmi A8', img: '/imgs/sliderItem/item-box-16.jpg'}
        ],
        [
          {id:58, name:'腾讯黑鲨游戏手机3 Pro', img: '/imgs/sliderItem/item-box-17.webp'},
          {id:59, name:'小米CC9', img: '/imgs/sliderItem/item-box-18.webp'},
          {id:60, name:'Redmi Note 7 Pro', img: '/imgs/sliderItem/item-box-19.png'},
          {id:61, name:'Redmi A8', img: '/imgs/sliderItem/item-box-20.png'}
        ],
        [
          {id:62, name:'腾讯黑鲨游戏手机3 Pro', img: '/imgs/sliderItem/item-box-21.webp'},
          {id:63, name:'小米CC9', img: '/imgs/sliderItem/item-box-22.webp'},
          {id:64, name:'Redmi Note 7 Pro', img: '/imgs/sliderItem/item-box-23.webp'},
          {id:65, name:'Redmi A8', img: '/imgs/sliderItem/item-box-24.jpg'}
        ]
      ],
      adsList: [
        {id: 42, img: '/imgs/ads/new-ads-1.jpg'},
        {id: 43, img: '/imgs/ads/new-ads-2.jpg'},
        {id: 44, img: '/imgs/ads/new-ads-3.jpg'},
        {id: 45, img: '/imgs/ads/ads-4.jpg'}
      ],
      phoneList: [
        [
          {id: 32, name: '小米10', mainImage: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg?thumb=1&w=200&h=200&f=webp&q=90', subtitle: '骁龙865/1亿像素相机', price: '3999'},
          {id: 33, name: 'Redmi K30', mainImage: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2c16238f786e4f93bdb175d7bf21aa47.jpg?thumb=1&w=200&h=200&f=webp&q=90', subtitle: '120Hz流速屏，全速热爱', price: '1599'},
          {id: 34, name: 'Redmi K30 5G', mainImage: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/53641901fbc28cbcdb495b17fdf69e46.jpg?thumb=1&w=200&h=200&f=webp&q=90', subtitle: '双模5G，120Hz流速屏', price: '1999'},
          {id: 35, name: '小米CC9 Pro', mainImage: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/07270cc09689eb9b13b29aa9f6bc41eb.jpg?thumb=1&w=200&h=200&f=webp&q=90', subtitle: '1亿像素 五摄四闪', price: '2599'},
        ],
        [
          {id: 36, name: 'Redmi 8', mainImage: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d295c4fb500d163a7045dc715b47f808.jpg?thumb=1&w=200&h=200&f=webp&q=90', subtitle: '5000mAh超长续航', price: '749'},
          {id: 37, name: 'Redmi 8A', mainImage: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c924c3f3436b6934495fd98f159ee3f7.jpg?thumb=1&w=200&h=200&f=webp&q=90', subtitle: '5000mAh超长续航', price: '599'},
          {id: 38, name: 'Redmi Note 8 Pro', mainImage: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg?thumb=1&w=200&h=200&f=webp&q=90', subtitle: '6400万全场景四摄', price: '1299'},
          {id: 39, name: 'Redmi Note 8', mainImage: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg?thumb=1&w=200&h=200&f=webp&q=90', subtitle: '千元4800万四摄', price: '999'},
        ]
      ]
    }
  },
  mounted () {
    // this.getPhoneList()
  },
  methods: {
    // getPhoneList () {
    //   this.axios.get('/products', {
    //     params: {
    //       categoryId: 100012,
    //       pageSize: 8
    //     }
    //   }).then( (res) => {
    //     this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)]
    //   })
    // }
  }
}
</script>

<style lang="scss" scoped>
  @import './../assets/scss/mixin.scss';
  @import './../assets/scss/base.scss';
  .index {
    .swiper-box {
      .nav-menu {
        position: absolute;
        width: 234px;
        height: 451px;
        padding: 20px 0px;
        font-size: 14px;
        box-sizing: border-box;
        background-color: rgba(105, 101, 101, .6);
        z-index: 9;
        .menu-wrapper {
          .menu-item {
            position: relative;
            height: 42px;
            line-height: 42px;
            padding-left: 30px;
            a {
              color: #ffffff;
            }
            &:after {
              content: ' ';
              @include bgImg(9px, 12px, '/imgs/icon-arrow.png');
              position: absolute;
              top: 14px;
              right: 24px;
            }
            &:hover {
              background-color: #FF6600;
              .children {
                display: block;
              }
            }
            .children {
              display: none;
              width: 992px;
              height: 451px;
              position: absolute;
              top: -20px;
              left: 234px;
              border: 1px solid #E5E5E5;
              background-color: #FFFFFF;
              ul {
                height: 75px;
                display: flex;
                justify-content: space-around;
                li {
                  flex: 1;
                  height: 75px;
                  line-height: 75px;
                  margin-left: 23px;
                  img {
                    width: 40px;
                    height: 40px;
                    vertical-align: middle;
                    margin-right: 12px;
                  }
                  a {
                    color: #333333;
                    &:hover {
                      color: #FF6600;
                    }
                  }
                }
              }
            }
          }
        }
      }
      .swiper-container {
        height: 451px;
        .swiper-button-prev {
          left: 254px;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }  
    }
    .ads-box {
      width: 100%;
      height: 167px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 14px;
      margin-bottom: 31px;
      a {
        width: 296px;
        height: 167px;
        img {
          width: 100%;
          height: 100%;
        }
        &:hover {
          box-shadow:0px 14px 21px 0px rgba(0, 0, 0, 0.11);
          transition: all .3s;
        }
      }
    }
    .banner-box {
      margin-bottom: 50px;
    }
    .product-box {
      background-color: #f5f5f5;
      padding: 30px 0 50px;
      .title {
        display: block;
        color: #333333;
        font-size: 22px;
        margin-bottom: 20px;
      }
      .product-wrapper {
        display: flex;
        .banner-left {
          img {
            width: 234px;
            height: 614px;
          }
        }
        .product-list {
          width: calc(100% - 234px);
          .list {
            display: flex;
            justify-content: space-between;
            margin-bottom: 14px;
            &:last-child {
              margin-bottom: 0;
            }
            .item {
              flex: 1;
              height: 300px;
              margin-left: 14px;
              background-color: #fff;
              text-align: center;
              transition: all .3s;
              &:hover {
                box-shadow:0px 14px 21px 0px rgba(49, 47, 47, 0.11);
                margin-top: -2px;
                transition: all .3s;
              }
              .item-img {
                img {
                  width: 160px;
                  height: 160px;
                  margin-top: 23px;
                  margin-left: 24px;
                  margin-right: 24px;
                }
              }
              .item-info {
                margin-top: 20px;
                h3 {
                  color: #333333;
                  font-size: 14px;
                }
                .desc {
                  color: #B0B0B0;
                  margin: 3px 0 10px 0;
                  font-size: 13px;
                }
                .price {
                  font-size: 14px;
                  color: #FF6700;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
