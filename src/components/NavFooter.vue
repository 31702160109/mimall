<template>
  <div class="nav-footer">
    <div class="footer">
      <div class="footer-main">
        <div class="footer-logo">
          <img src="/imgs/logo-mi.png" alt="">
        </div>
        <div class="footer-link">
          <div class="link-first">
            <a href="javascript:;">小米商城</a><span>|</span>
            <a href="javascript:;">MIUI</a><span>|</span>
            <a href="javascript:;">米家</a><span>|</span>
            <a href="javascript:;">米聊</a><span>|</span>
            <a href="javascript:;">多看</a><span>|</span>
            <a href="javascript:;">游戏</a><span>|</span>
            <a href="javascript:;">路由器</a><span>|</span>
            <a href="javascript:;">米粉卡</a><span>|</span>
            <a href="javascript:;">政企服务</a><span>|</span>
            <a href="javascript:;">小米天猫店</a><span>|</span>
            <a href="javascript:;">小米集团隐私政策</a><span>|</span>
            <a href="javascript:;">小米商城隐私政策</a><span>|</span>
            <a href="javascript:;">小米商城用户协议</a><span>|</span>
            <a href="javascript:;">问题反馈</a>
          </div>
          <div class="link-second">
            <a href="javascript:;">© mi.com</a>
            <a href="javascript:;">京ICP证110507号</a>
            <a href="javascript:;">京ICP备10046444号</a>
            <a href="javascript:;">京公网安备11010802020134号</a>
            <a href="javascript:;">京网文[2020]0276-042号</a>
          </div>
          <div class="link-second">
            <a href="">（京）网械平台备字（2018）第00005号 互联网药品信息服务资格证 (京) -非经营性-2014-0090 营业执照 医疗器械公告</a>
          </div>
          <div class="link-second">
            <a href="">增值电信业务许可证  网络食品经营备案（京）【2018】WLSPJYBAHF-12   食品经营许可证</a>
          </div>
          <div class="link-second">
            <a href="">增值电信业务许可证  网络食品经营备案（京）【2018】WLSPJYBAHF-12   食品经营许可证</a>
          </div>
          <div class="link-img">
            <img src="https://i1.mifile.cn/f/i/17/site/truste.png">
            <img src="https://s01.mifile.cn/i/v-logo-2.png">
            <img src="https://s01.mifile.cn/i/v-logo-1.png">
            <img src="https://s01.mifile.cn/i/v-logo-3.png">
            <img src="https://i8.mifile.cn/b2c-mimall-media/ba10428a4f9495ac310fd0b5e0cf8370.png">
          </div>
        </div>
      </div>
      <div class="motto">
        让全球每个人都能享受科技带来的美好生活
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavFooter'
}
</script>

<style lang="scss" scoped>
  .nav-footer {
    width: 100%;
    height: 172px;
    background-color: #fafafa;
    padding: 30px 0;
    .footer {
      width: 1226px;
      margin-left: auto;
      margin-right: auto;
      .footer-main {
        display: flex;
        .footer-logo {
          margin-right: 10px;
          img {
            width: 57px;
            height: 57px;
          }
        }
        .footer-link {
          font-size: 12px;
          line-height: 20px;
          a {
            color: #B0B0B0;
            &:hover {
              color: #FF6600;
            }
          }
          .link-first {
            a {
              color: #757575;
              &:hover {
                color: #FF6600;
              }
            }
            span {
              margin: 0 3px;
            }
          }
          .link-img img {
            &:first-child {
              width: 83px;
              height: 28px;
            }
          }
        }
      }

      .motto {
        margin-top: 20px;
        text-align: center;
        font-size: 16px;
        color: rgba(214, 210, 210, 0.8);
      }
    }
  }
</style>
