<template>
    <div class="children-view">
        <loading v-if="showLoading"></loading>
        <div v-if="!showLoading" class="banner-b">
            <!-- 图片轮播 -->
            <banner :listImg="proDetail.imageList" myClass="1"  hasPoint="true"></banner>
            <div :key="proDetail.id">
                <div class="pro-list pdl pdr pdb">
                    <div class="label">
                        <span v-if="proDetail.label1" class="label-orange">{{proDetail.label1}}</span>
                        <span v-if="proDetail.label2" class="label-blue">{{proDetail.label2}}</span>
                        <span v-if="proDetail.label3" class="label-red">{{proDetail.label3}}</span>
                    </div>
                    
                    <h5 class="pro-title nowrap-2">{{proDetail.proTitle}}</h5>
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
            <div class="bttomBtn two-btn border-top">
                <router-link class="backNav border-right" to="/cart">
                    <i class="icon-cart"></i>
                    <!-- <span v-if="cartNum != 0" class="circlePoint">{{cartNum}}</span> -->
                </router-link>
                <a class="btn-cart">加入购物车</a>
                <a @click="goToBuy(proDetail.id, getImgPath(proDetail.imageList[0].pic), proDetail.proTitle, proDetail.price, proDetail.marketPrice)" class="btn-theme">立即购买</a>
            </div>
        </div>
    </div>
    	 

</template>

<script>

// import {mapState,mapMutations} from 'vuex'
import {proDetail} from '/api/api'
import { setStore } from '/utils/storage'
import {getImgPath} from '/components/mixin'
import Banner from '/components/swiperDefault'
import Loading from '/components/loading'
export default {
	data(){
		return {
			proDetail: [],
			imglistSrc:[],
            showLoading: true,
            showAttrDialog: false,
            showAlertTip: false,
            alertText: "",
            attrLen: 0,//属性个数
            attrName:'',//获取的属性名称
            attrArray:[],//获取的属性名称数组
            amount: 1,//添加的数量
            price: 0,//属性选中的价格
            skuId: '',//选择的商品id
            idArray: [],
            cartAmount: 0,
            btnType: 0//判断按钮类型,0为选则属性，1为加入购物车，2为购买
		}
	},
    components: {
        Banner, Loading
    },
	mounted() {
		this._initData();
    },
    mixins: [getImgPath],
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
            })
		},
        goToBuy(id, img, title, price, marketPrice) {
            let goods = [];
            goods.push({
                proID: id,
                proNum: 1,
                proPrice: price,
                proName: title,
                proImg: img,
                marketPrice: marketPrice,
                check: true
            });
            setStore('buyPro',goods);
            this.$router.push({path:'/orderConfirm',query:{skuId: id}});
        }
       
	},
    watch:{
        // '$route':'_initData'
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
    
.bttomBtn {
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