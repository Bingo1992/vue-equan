<template>
  <div>
    <h2 class="center-text pd">本次可用的E币：<span class="pdl font-orange">1234.00</span></h2>

    <div class="title-bar border-bottom">
      <h5>选择兑换方式</h5>
    </div>
    <ul>
        <li class="list-box">
            <p class="list-info-h">充入我的E券账户</p>
            <p class="font-orange pdr">110E币</p>
            <div class="checkbox">
              <input type="radio" checked name="type">
              <i class="icon-hook"></i>
            </div>
        </li>
        <li class="list-box">
            <p class="list-info-h">兑换微信红包</p>
            <p class="font-orange pdr">110元</p>
            <div class="checkbox">
              <input type="radio" name="type">
              <i class="icon-hook"></i>
            </div>
        </li>
    </ul>
	     
    <div class="btn">
        <p class="btn-theme" @click="recharge()">充值</p>
    </div>

    <dl class="rich-box bg-mgShow font-gray">
      <dt>使用说明</dt>
      <dd>1、e币充值到账户后，不做退货处理；</dd>
      <dd>2、e币可以兑换e币商城内所有商品；</dd>
      <dd>3、如使用遇到问题，请咨询客服电话400-1613580</dd>
    </dl>

    <alert-tip v-show="showAlertTip" :alertText="alertText"></alert-tip>

    <!-- 图片轮播 -->
    <banner :listImg="proDetail.imageList" myClass="1"  hasPoint="true"></banner>
  </div> 
</template>

<script>
  import alertTip from '/components/alertTip'
  import Banner from '/components/swiperDefault'
  import {proDetail} from '/api/api'
  export default {
    data () {
      return {
          showAlertTip: false,
          proDetail: [],
          // imageList: [],
          alertText: '',
          ticketNum: ''
      }
    }, 
    components: {
       alertTip, Banner
    }, 
    mounted() {
      this._initData();
    },
    methods: {
      _initData() {
          proDetail(this.$route.query.id).then(res => {
              this.proDetail = res;
              this.showLoading = false;
          }).then(() => {
              var swiper1 = new Swiper('.swiper-container1', {
                  pagination: '.swiper-pagination1',
                  paginationClickable: true,
                  loop: true,
                  autoplay: 3000,
                  autoplayDisableOnInteraction: false
              });
              // 只有一张图时禁止轮播
              if(this.proDetail.imageList.length <= 1) {
                  swiper1.autoplay.stop();//停止自动播放
                  swiper1.detachEvents(); //移除所有监听事件
                  swiper1.pagination.$el.addClass('hide');
              }
          }) 
       
          // // 只有一张图时禁止轮播
          // if(this.imageList.length <= 1) {
          //     swiper1.autoplay.stop();//停止自动播放
          //     swiper1.detachEvents(); //移除所有监听事件
          //     swiper1.pagination.$el.addClass('hide');
          // }
      },
      // 充值
      recharge() {
        this.$router.push('/pay');
      },
     
    },
      

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../assets/scss/var.scss';
 
</style>
