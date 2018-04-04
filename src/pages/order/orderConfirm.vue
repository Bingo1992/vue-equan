<template>
  <div class="orderConfirm banner-b">
    <loading v-if="showLoading"></loading>

    <section v-if="!showLoading">
        <div class="logistics bg-show">   
            <router-link to="/chooseAddress" class="list-box">

                <i class="icon-map font-gray pdr"></i>
                <div class="list-info-v pdt pdb" v-if="!choosedAddress">
                    <h5>请添加一个收获地址</h5>
                </div>
                <div v-else class="list-info-v">
                    <h4>
                        <span class="pdr">{{choosedAddress.name}}</span>
                        <span>{{choosedAddress.mobile}}</span>
                    </h4>
                    <p class="font-gray nowrap-2">{{choosedAddress.province}}{{choosedAddress.city}}{{choosedAddress.region}}{{choosedAddress.address_detail}}</p>
                </div>  
                <i class="icon-right"></i>
            </router-link>
        </div>

        <!-- 订单列表 -->
        <ul class="confirm-order">
            <li class="list-box border-bottom" v-for="(item,i) in cartList" :key="i" v-if="item.check">
                <img class="list-img" :src="item.proImg">
                <div class="list-info-v">
                    <div class="list-box">
                      <div class="list-info-h">
                         <h5 class="nowrap-2 top-text">{{item.proName}}</h5>
                      </div>
                      <h5 class="pdl">X{{item.proNum}}</h5>
                    </div>
                   
                    <div class="price-big">
                       <span class="font-orange"><i class="icon-coin"></i>{{item.proPrice}}</span>
                       <s class="font-gray">市场价：￥{{item.marketPrice}}</s>
                    </div>
                </div>
            </li>
        </ul>


        <div class="bg-mgShow">
            <div class="title-bar border-bottom">
              <h5>给卖家留言</h5>
            </div>
            <textarea class="txtArea" cols="30" rows="3" placeholder="请输入留言"></textarea>
        </div> 

     
        <div class="bg-mgShow">
            <div class="title-bar border-bottom">
              <h5>支付方式</h5>
            </div>
            <ul>
                <li class="list-box">
                 <img class="list-img" src="../../assets/images/chat.png" style="height:40px">
                  <p class="list-info-h">微信支付</p>
                   <label class="checkbox">
                      <input type="radio" checked readonly>
                      <i class="icon-hook"></i>
                  </label>
                </li>
            </ul>
        </div>   


        <div class="fixed-bottom">
          <div v-if="cartList.length > 0" class="cal-banner list-box border-top">
              <div class="list-info-v">
                  <p>
                    应付现金：
                    <span class="font-orange">￥{{calcTotalMoney}}</span>
                  </p>
                  <p>
                      应付e币：
                     <i class="icon-coin"></i>
                     <span class="font-orange">{{calcTotalCoin}}</span>
                  </p>
              </div>
              <router-link :class="[{ disbtn: calcTotalMoney==0 }, 'btn-theme']" to="/pay">去付款</router-link>
          </div>
        </div>
    </section>
    
  </div> 
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    import loading from '/components/loading'
    import {addressList, getCartList, proDetail} from '/api/api'
    import { getStore } from '/utils/storage'
    export default {
      name: 'orderConfirm',
      data () {
        return {
            showLoading: false, //显示加载中  
            cartList:[],
            address: null,
            proId: '',
            num:''
        }
      },
      components: {
        loading
      }, 
      mounted() {
         this._initData();
      },
      computed: {
          ...mapState(['choosedAddress']),
           //统计总市场价
          calcTotalMoney() {
            let total_price1 = 0;
            this.cartList && this.cartList.forEach((item,i) => {
              if(item.check) {
               total_price1 += item.proNum * item.marketPrice;
              }
            });
            return total_price1;
          },
          //统计总额
          calcTotalCoin() {
            let total_price2 = 0;
            this.cartList && this.cartList.forEach((item,i) => {
              if(item.check) {
               total_price2 += item.proNum * item.proPrice;
              }
            });
            return total_price2;
          },

      },
      methods: {
       ...mapMutations(['CHOOSE_ADDRESS']),
        //获取商品数据
        _initData() { 
           if (this.$route.query.skuId) {
                this.cartList = JSON.parse(getStore('buyPro'));
                console.log(this.cartList)
            } else {
                // this._getCartList();
                // 测试环境使用
                this.cartList = JSON.parse(getStore('buyCart'));
            }
            this._initAddress();    
        },
         // 获取地址
         _initAddress() {
            addressList().then(res => {
                this.address = res.result;
            }).then(() => {
              if(this.address.length > 0){
                  this.address.forEach((ads, index) => {
                      if(ads.check){
                          this.CHOOSE_ADDRESS(ads);
                      }
                  });
              }
            });
              
        },
        // 购物车数据
        _getCartList () {
            // 生产环境下使用
            getCartList().then(res => {
              this.cartList = res.result
            })
        },

      },
      watch: {
        '$route':'_initData'
      }
     
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../assets/scss/var.scss";
.logistics {
  // position: relative;
  &:after {
      display: block;
      content: "";
      height: 3px;
      background: url(../../assets/images/addLine.png) repeat-x;
      background-size: 85px;
  }
}
.confirm-order {
    .list-box {
      .list-box {
        align-items: flex-start;
      }
    }
}
.txtArea {
  background-color: #f4f4f4;
  padding: $gauge;
  margin: $gauge auto;
  width: pxTorem(702);
  display: block;
  border-radius: 6px;
  line-height: 20px;
}
.top-text {height: 55px;}
</style>
