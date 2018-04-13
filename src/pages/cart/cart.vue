<template>
  <div>
    <!-- <loading v-if="showLoading"></loading> -->
    
    <div class="cart banner-bt-2">
       <div v-if="!cartList || cartList.length == 0" class="nothing">
        <img src="../../assets/images/nothing.png" >
        <h4>购物车暂无内容</h4>
       </div>

      <div class="fixed-top" v-if="cartList.length > 0">
          <div class="bg-show clearfix">
             <div class="fr btn-edit">
                <span v-if="edit" :class="['btn-border', checkedCount > 0 ? '':'dis-btn']" @click="showConfirmDialog">删除</span>
                <span class="btn-default" @click="editPro()">{{edit? '完成': '编辑'}}</span>
             </div>
          </div>
          <ul class="cart-ads flex-layout font-theme">
             <li>
               <span>48小时内发货</span>
             </li>
             <li>
               <span>所有商品免邮费</span>
             </li>
             <li>
               <span>节假日不发货</span>
             </li>
          </ul>
      </div>

      <ul v-if="cartList.length > 0" class="cart-list border-list">
          <li class="list-box" v-for="(cart,index) in cartList" :key="cart.proID">
                <label class="checkbox">
                    <input type="checkbox" name="checkbox" :value="cart.check" v-model="cart.check"  @change="selectPro(cart.proID, cart.check)">
                    <i class="icon-hook"></i>
                </label>
                <img class="list-img" :src="cart.proImg">
                <div class="list-info-v">
                    <div class="list-box">
                        <div class="list-info-v">
                            <h5 class="nowrap-2">{{cart.proName}}</h5>
                            <div class="list-box">
                                <div class="list-info-h price-small">
                                  <span class="font-orange"><i class="icon-coin"></i>{{cart.proPrice}}</span>
                                  <s class="font-gray">市场价:￥{{cart.marketPrice}}</s>
                                </div>

                                <div class="amount">
                                  <span :class="['minus', 'icon-minus', cart.proNum ===1? 'dis-btn':'']" @touchstart="changeAmount(cart.proID, -1, cart.check)"></span>
                                  <input type="number" class="count" v-model.number="cart.proNum" >
                                  <span class="plus icon-plus" @touchstart="changeAmount(cart.proID, 1, cart.check)"></span>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
          </li>
      </ul>

      <div class="fixed-bottom">
        <div v-if="cartList.length > 0" class="cal-banner list-box border-top">
              <label class="all-check">
                  <input type="checkbox" :value="checkAllFlag" v-model="isCheckAll" @change="selectAll()">
                  <i class="icon-hook"></i>
                  全选
              </label>
              <div class="list-info-v right-text pdr">
                  <p class="font-orange">￥{{calcTotalMoney}}</p>
                  <p>
                     <i class="icon-coin"></i>
                     <span class="font-orange">{{calcTotalCoin}}</span>
                  </p>
              </div>
              <router-link :class="[{ disbtn: calcTotalMoney==0 }, 'btn-theme']" to="/orderConfirm">结算({{checkedCount}})</router-link>
          </div>

          <footer-nav></footer-nav>
        </div>
      </div>
      <!-- 删除遮罩 -->
       <confirm-dialog v-if="showDialog" :confirm-text="confirmText" showBtn="true" @closeConfirmDialog="closeConfirmDialog" @confirmBtn="confirmBtn" centerText="true"></confirm-dialog>
 
  </div>
</template>

<script>
// import loading from '/components/loading'
import FooterNav from '/components/footer'
import confirmDialog from '/components/confirmDialog'
import {getCartList, editCart,delCart,editCheckAll} from '/api/api'
import { setStore } from '/utils/storage'
import {mapState,mapMutations} from 'vuex'

export default {
  data () {
    return { 
      // showLoading: true,
      edit: false,//是否编辑
      checkID: [],//被选中的商品ID
      isCheckAll: true,//全选
      flag: true,
      showDialog: false,
      confirmTitle:'',
      confirmText:'',
      checks:[],
      cartNum: 0//购物车数量
    }
  },
  components: {
    FooterNav, confirmDialog
  },
  mounted() {
      // this._initData();
  },
  computed: {
    ...mapState([
        'cartList'
    ]),
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
     // 是否全选
    checkAllFlag() {
      if(this.checkedCount === this.cartList.length) {
        this.isCheckAll = true;
      } else {
        this.isCheckAll = false;
      }
      return this.isCheckAll;
    },
    // 勾选的数量
    checkedCount(){
      var i = 0;
      this.checkID = [];
      this.cartList && this.cartList.forEach((item) => {
          if(item.check) {
            i++; 
            this.checkID.push(item.proID); 
          }
      });
      return Number(i);
    }
  },
  methods: {
    ...mapMutations([
        'INIT_BUYCART', 'EDIT_CART', 'DELETE_CART'
    ]),
    // _initData() {
      // getCartList().then(res => {
      //     if(res.status === '1') {
      //       setStore('buyCart', res.result);
      //     }
      // }).then(() => {
      //   this.INIT_BUYCART();
      //   this.showLoading = false;
      // });
      // this.showLoading = false;
    // },
    // 修改购物车
    _editCart(proID,type,check) {
       editCart({proID}).then( res => {
          this.EDIT_CART({proID, type, check});
       });
    },
    //修改数量
    changeAmount(proID, type, check) {
      this._editCart(proID, type, check);
    },
    //勾选产品
    selectPro(proID, check) {
       this._editCart(proID, 0, check);
    },
     //全选
    selectAll () {
      let checkAll = !this.checkAllFlag;
      editCheckAll({checkAll: checkAll}).then(res => {
        this.EDIT_CART({check: checkAll});
      })
    },
    //编辑产品
    editPro() {
      if(!this.edit) {
        this.edit = true;
      } else {
        this.edit = false;
      }
    },
    //显示遮罩
    showConfirmDialog() {
      this.showDialog = true;
      this.confirmText = "确定删除购物车所选内容吗？"
    },
    //删除购物车
    confirmBtn() {
        delCart(this.checkID).then( res => {
           this.DELETE_CART(this.checkID);
         });
    },
    //关闭遮罩
    closeConfirmDialog() {
      this.showDialog = false;
    }
  }, 
  watch: {
   // '$route':'_initData'
  }
 
}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../assets/scss/var.scss';
.banner-bt-2 {
  margin-top: 94px;
  margin-bottom: 99px;
}
.cart-ads {
    background-color: #f4f4f4;
    padding: 0 pxTorem(30);
    font-size: 12px;
    li {
      position: relative;
      &:before {
        display: inline-block;
        vertical-align: middle;
        content: "";
        @include circle(5px);
        margin-right: 2px;
        border: 1px solid $color-theme;
      }
    }
}

.btn-edit {
  padding: 10px;
  [class^="btn"] {
     margin-left: 10px;
     float: left;
  }
} 
.cart-list {
   h5 {
    height: 52px;
   }
}
.nothing {
  position: fixed;
  top: 0;
  bottom: 50px;
}
.btn-border.dis-btn {
  color: #999;
  border: 1px solid #e0e0e0;
  pointer-events: none;
}
</style>
