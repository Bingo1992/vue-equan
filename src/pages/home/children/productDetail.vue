<template>
    <div class="children-view">
        <loading v-if="showLoading"></loading>
        <div v-if="!showLoading" class="banner-b">
            <!-- 图片轮播 -->
            <banner :listImg="proDetail.imageList" myClass="1"  hasPoint="true"></banner>
            <div :key="proDetail.id">
                <div class="pro-list pdl pdr">
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
            </div>
        </div>
       
        <div class="fixed-bottom">
            <div class="bttomBtn two-btn border-top">
                <router-link class="backNav border-right" to="/cart">
                    <i class="icon-cart"></i>
                    <!-- <span v-if="cartNum != 0" class="circlePoint">{{cartNum}}</span> -->
                </router-link>
                <a class="btn-cart">加入购物车</a>
                <a class="btn-buy">立即购买</a>
            </div>
        </div>
    </div>
    	 

</template>

<script>

// import {mapState,mapMutations} from 'vuex'
import {proDetail} from '/api/api'
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
                    autoplay:3000,
                    autoplayDisableOnInteraction:false
                });
            })
		},
       
	},
    watch:{
        '$route':'_initData'
    }

}
</script>

<style lang="scss">
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
.btn-buy {
    background: $bkg-theme;
    color: #fff;
    width: 100%;
    font-size: 16px;
    // line-height: 40px;
}
.bttomBtn {
    a {
        flex: auto;
    }
}
.price {
    .lg-font {
        font-size: 18px !important;
        padding-right: 6px;
        .icon-coin {font-size: 16px;}
    }
}
</style>