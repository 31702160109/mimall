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
            <a :href="'/#/product' + item.id"><img :src="item.img"></a>
          </swiperSlide>
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a v-for="(item, index) in adsList" :key="index" :href="'/#/product/'+ item.id">
          <img :src="item.img">
        </a>
      </div>
      <div class="banner-box">
        <a href="javascript:;">
          <img src="/imgs/banner-2.webp">
        </a>
      </div>
      <div class="product-box"></div>
    </div>
    <serve-bar></serve-bar>
  </div>
</template>

<script>
import ServeBar from './../components/ServeBar'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'Index',
  components: {
    swiper,
    swiperSlide,
    ServeBar
  },
  data () {
    return {
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
        {id: 42, img: '/imgs/slider/new-slide-1.jpg'},
        {id: 43, img: '/imgs/slider/new-slide-2.webp'},
        {id: 45, img: '/imgs/slider/slide-3.jpg'},
        {id: 42, img: '/imgs/slider/slide-4.jpg'},
        {id: 43, img: '/imgs/slider/slide-5.jpg'}
      ],
      menuList: [
        [
          {id:42, name:'腾讯黑鲨游戏手机3', img: '/imgs/sliderItem/item-box-1.webp'},
          {id:42, name:'小米CC9 Pro', img: '/imgs/sliderItem/item-box-2.webp'},
          {id:42, name:'Redmi Note 8', img: '/imgs/sliderItem/item-box-3.webp'},
          {id:42, name:'Redmi A7', img: '/imgs/sliderItem/item-box-4.jpg'}
        ],
        [
          {id:42, name:'腾讯黑鲨游戏手机3 Pro', img: '/imgs/sliderItem/item-box-5.webp'},
          {id:42, name:'小米CC9', img: '/imgs/sliderItem/item-box-6.webp'},
          {id:42, name:'Redmi Note 7 Pro', img: '/imgs/sliderItem/item-box-7.png'},
          {id:42, name:'Redmi A8', img: '/imgs/sliderItem/item-box-8.jpg'}
        ],
        [
          {id:42, name:'小米10 Pro', img: '/imgs/sliderItem/item-box-9.webp'},
          {id:42, name:'小米10', img: '/imgs/sliderItem/item-box-10.webp'},
          {id:42, name:'Redmi K30 4G', img: '/imgs/sliderItem/item-box-11.png'},
          {id:42, name:'Redmi K30 5G', img: '/imgs/sliderItem/item-box-12.jpg'}
        ],
        [
          {id:42, name:'腾讯黑鲨游戏手机3 Pro', img: '/imgs/sliderItem/item-box-13.webp'},
          {id:42, name:'小米CC9', img: '/imgs/sliderItem/item-box-14.webp'},
          {id:42, name:'Redmi Note 7 Pro', img: '/imgs/sliderItem/item-box-15.png'},
          {id:42, name:'Redmi A8', img: '/imgs/sliderItem/item-box-16.jpg'}
        ],
        [
          {id:42, name:'腾讯黑鲨游戏手机3 Pro', img: '/imgs/sliderItem/item-box-17.webp'},
          {id:42, name:'小米CC9', img: '/imgs/sliderItem/item-box-18.webp'},
          {id:42, name:'Redmi Note 7 Pro', img: '/imgs/sliderItem/item-box-19.png'},
          {id:42, name:'Redmi A8', img: '/imgs/sliderItem/item-box-20.png'}
        ],
        [
          {id:42, name:'腾讯黑鲨游戏手机3 Pro', img: '/imgs/sliderItem/item-box-21.webp'},
          {id:42, name:'小米CC9', img: '/imgs/sliderItem/item-box-22.webp'},
          {id:42, name:'Redmi Note 7 Pro', img: '/imgs/sliderItem/item-box-23.webp'},
          {id:42, name:'Redmi A8', img: '/imgs/sliderItem/item-box-24.jpg'}
        ]
      ],
      adsList: [
        {id: 42, img: '/imgs/ads/new-ads-1.jpg'},
        {id: 42, img: '/imgs/ads/new-ads-2.jpg'},
        {id: 42, img: '/imgs/ads/new-ads-3.jpg'},
        {id: 42, img: '/imgs/ads/ads-4.jpg'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './../assets/scss/mixin.scss';
  @import './../assets/scss/base.scss';
  .index {
    .container {
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
        }
      }

      .banner-box {
        margin-bottom: 50px;
      }
    }
  }
</style>
