<template>
    <div class="children-view">
        <!-- <loading v-if="showLoading"></loading> -->
        <div class="banner-b">
            <!-- 图片轮播 -->
            <banner :listImg="proDetail.imageList" myClass="1"  hasPoint="true"></banner>
            <div :key="proDetail.id">
                <div class="pro-list pdl pdr pdb">
                    <div class="label">
                        <span v-if="proDetail.label1" class="label-orange">{{proDetail.label1}}</span>
                        <span v-if="proDetail.label2" class="label-blue">{{proDetail.label2}}</span>
                        <span v-if="proDetail.label3" class="label-red">{{proDetail.label3}}</span>
                    </div>
                    
                    <h4 class="pro-title">{{proDetail.proTitle}}</h4>
                    <div class="price">
                        <span class="font-orange lg-font">
                            <i class="icon-coin"></i>
                            {{proDetail.price}}
                        </span>
                        <s class="right-text font-gray">市场价￥{{proDetail.marketPrice}}</s>
                    </div>
                </div>   
                <div class="bg-mgShow pro-detail">
                    <h4 class="center-text">商品详情</h4>
                    <img v-for="(item,i) in proDetail.detailImg" :src="getImgPath(item.pic)">
                    <div class="rich-box">
                        <h5>{{proDetail.desTitle}}</h5>
                        <p class="font-gray">{{proDetail.desText}}</p>
                    </div>
                </div>
            </div>
        </div>
       
        <div class="fixed-bottom">
            <div class="bottomBtn two-btn border-top">
                <router-link class="backNav border-right" to="/cart">
                    <i class="icon-cart"></i>
                    <!-- <span v-if="cartNum != 0" class="circlePoint">{{cartNum}}</span> -->
                    <cart-num></cart-num>
                </router-link>
                <a class="btn-cart" @click="addToCart(getImgPath(proDetail.imageList[0].pic), proDetail.proTitle, proDetail.price, proDetail.marketPrice)">加入购物车</a>
                <a @click="goToBuy(getImgPath(proDetail.imageList[0].pic), proDetail.proTitle, proDetail.price, proDetail.marketPrice)" class="btn-theme">立即购买</a>
            </div>
        </div>

         <!-- 提示遮罩 -->
        <alert-tip v-if="showAlertTip" :alert-text="alertText"></alert-tip>
          
    </div>
    	 

</template>

<script>
import {mapMutations} from 'vuex'
import {proDetail, addCart} from '/api/api'
import { setStore } from '/utils/storage'
import {getImgPath} from '/components/mixin'
import alertTip from '/components/alertTip'
import Banner from '/components/swiperDefault'
import Loading from '/components/loading'
import cartNum from '/components/cartNum'

export default {
	data(){
		return {
			proDetail: [],
			imglistSrc:[],
            showLoading: true,
            showAttrDialog: false,
            showAlertTip: false,
            alertText: "",
            attrArray:[],//获取的属性名称数组
            price: 0//属性选中的价格
         
		}
	},
    components: {
        Banner, Loading, alertTip, cartNum
    },
	mounted() {
		this._initData();
    },
    mixins: [getImgPath],
    // computed: {
    //     ...mapState(['cartList']),
    //     cartNum () {
    //       let cartNum = 0;
    //       this.cartList && this.cartList.forEach( item => {
    //          cartNum += item.proNum;
    //       })
    //       return cartNum;
    //     }
    // },
	methods: {  
        ...mapMutations(['ADD_CART']),
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
		},
        //显示弹窗
        showHideAlert(text) { 
            this.showAlertTip = true;
            this.alertText = text;
            setTimeout(() => {
                this.showAlertTip = false;
            }, 1500);
        },
        //加入购物车
        addToCart(img, title, price, marketPrice) {
            this.showHideAlert('已成功加入购物车');
            addCart({proID: this.$route.query.id, proNum: 1}).then( res => {
                this.ADD_CART({
                    proID: this.$route.query.id,
                    proImg: img,
                    proName: title,
                    proPrice: price,
                    marketPrice: marketPrice,
                    check: false,
                    proNum: 1
                })
            });
        },
        // 点击购买
        goToBuy(img, title, price, marketPrice) {
            let goods = [];
            goods.push({
                proID: this.$route.query.id,
                proNum: 1,
                proPrice: price,
                proName: title,
                proImg: img,
                marketPrice: marketPrice,
                check: true
            });
            setStore('buyPro',goods);//将当前购买的商品信息存储到buyPro
            this.$router.push({path:'/orderConfirm',query:{skuId: this.$route.query.id}});
        }
       
	},
    watch:{
        '$route':'_initData'
    }

}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/var.scss";
.swiper-container1 {
    height: pxTorem(750);
    .swiper-pagination-bullet-active{
        background: #717171 !important;
    }
    .swiper-pagination-bullet {
        opacity: 1 !important;
    }
}
.backNav {
    flex-direction: column;
    background-color: #fafafa;
    height: 50px;
    padding: 0 20px;
    color: #b2b2b2;
    i{font-size: 24px;}
    
}
.btn-cart {
   background-color: #fafafa;
   width: 100%;
   font-size: 16px;
}
    
.bottomBtn {
    a {
        flex: auto;
    }
    .btn-theme {
        width: 100%;
        font-size: 16px;
    }
}
.price {
    .lg-font {
        font-size: 18px !important;
        padding-right: 6px;
        .icon-coin {font-size: 16px;}
    }
}

.pro-detail {
    h4 {
        padding: 24px 0;
    }
}
</style>