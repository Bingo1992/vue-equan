<template>
	<div class="banner-bt">
		<!-- <loading v-if="showLoading"></loading> -->
		<div>
			<div class="fixed-top bg-show">
				<div class="list-box border-bottom">
					<router-link class="bg-account" to="/account">
						<div class="list-box">
							<div class="list-info-h">
								<i class="icon-coin"></i>
								e币 {{account}}
							</div>
							<i class="icon-right"></i>
						</div>	
					</router-link>

					<form class="search-bar list-info-h">
						<div class="list-box">
							<i class="icon-search"></i>
							<input class="list-info-h" type="text" placeholder="请输入商品名称、品牌等">
						</div>
					</form>	
				</div>
			</div>
		
			<!-- 图片轮播 -->
			<banner :listImg="listImg" myClass="0" hasPoint="true"></banner>
		
			<ul class="nav-list flex-layout">
				<li>
					<a href="#">
						<img src="../../../static/images/1.png">
						<p>e券优选</p>
					</a>
				</li>
				<li>
					<a href="#">
						<img src="../../../static/images/2.png">
						<p>超市卡券</p>
					</a>
				</li>
				<li>
					<a href="#">
						<img src="../../../static/images/3.png">
						<p>违章查办</p>
					</a>
				</li>
				<li>
					<router-link to="/rechargeCenter">
						<img src="../../../static/images/4.png">
						<p>充值中心</p>
					</router-link>
				</li>
			</ul>

			<div class="activity-block">
	            <img src="../../assets/images/activities.png" class="acitvity-bg">
	            <div class="activity-list">
	                <h3 class="activity-title"><span>活动专区</span></h3>
	                <ul>
	                    <li>
	                        <router-link class="list-box" :to="{path: '/proList'}">
	                            <h3 class="font-red center-text">每周爆款</h3>
	                            <p class="font-gray center-text">每周爆款随你挑</p>
	                            <img class="act-img-2" src="../../assets/images/5.jpg">
	                        </router-link> 
	                    </li>
	                    <li>
	                        <router-link class="list-box" :to="{path: '/proList', query: {
	                        	type: 2001}}">
	                            <div class="list-info-v">
	                                <h3 class="font-blue-2">车友必备</h3>
	                                <p class="font-gray">带上它出去浪</p>
	                            </div>
	                            <img class="act-img" src="../../assets/images/1.jpg">    
	                        </router-link> 
	                    </li>
	                    <li>
	                       <router-link class="list-box" :to="{path: '/proList', query: {
	                       	type: 2002}}">
	                            <div class="list-info-v">
	                                <h3 class="font-purple">数码控</h3>
	                                <p class="font-gray">最新潮流都在这</p>
	                            </div>
	                            <img class="act-img" src="../../assets/images/2.jpg">    
	                        </router-link> 
	                    </li>
	                    <li>
	                       <router-link class="list-box" :to="{path: '/proList', query: {
	                       	type: 2003}}">
	                            <div class="list-info-v">
	                                <h3 class="font-theme">运动达人</h3>
	                                <p class="font-gray">运动保持年轻</p>
	                            </div>
	                            <img class="act-img" src="../../assets/images/3.jpg">    
	                        </router-link> 
	                    </li>
	                    <li>
	                        <router-link class="list-box" :to="{path: '/proList', query: {
	                        	type: 2004}}">
	                            <div class="list-info-v">
	                                <h3 class="font-red-2">智慧萌娃</h3>
	                                <p class="font-gray">要给孩子最好的</p>
	                            </div>
	                            <img class="act-img" src="../../assets/images/4.jpg">    
	                        </router-link> 
	                    </li>
	                </ul>
	            </div>
	        </div>

		    <product :proList="proList1" proThree="true"></product>
		    <banner :listImg="adsImg" myClass="-c1"></banner>
			<product :proList="proList2"></product>
			
			
			<transition name="router-slid" mode="out-in">
		        <router-view></router-view>
		    </transition>

		    <div class="fixed-bottom">
		    	<footer-nav></footer-nav>
		    </div>
			
		</div>
		
		 
	</div>
</template>
<script>
import {integral, banner, ads, proList} from '/api/api'
import Banner from '/components/swiperDefault'
import loading from '/components/loading'
import FooterNav from '/components/footer'
import product from '/components/product'
import axios from 'axios'

// import Swiper from 'swiper'

export default {
	name: 'home',
	data() {
		return {
			list: [],
			showLoading: true,
			account: 0, //e币
			adsImg: [],
			listImg: [],
			proList1: [],
			proList2: []
		}
	},
	components: {
	   Banner, product, FooterNav, loading
	},
	created() {
		this._initData();
	},
	methods: {
		async _initData() {
			// E币数量
			integral().then(res => {
				if(res.success) {
					this.account = res.obj;
				}
			});
			// proList().then(res => {
			// 	this.proList1 = res.list;
			// 	this.proList2 = res.list;
			// 	this.showLoading = false;
			// });
			// proList().then(res => {
			// 	this.proList2 = res.list;
			// });

			banner({params:{location: "index_top"}}).then(res => {
				this.listImg = res.obj;
			}).then(() => {
				var swiper0 = new Swiper('.swiper-container0', {
		            pagination: '.swiper-pagination0',
		            paginationClickable: true,
		            loop: true,
		            autoplay: 3000,
		            autoplayDisableOnInteraction: false
		        });
		        // 只有一张图时禁止轮播
                if(this.listImg.length <= 1) {
                    swiper0.stopAutoplay();;//停止自动播放
                    swiper0.detachEvents(); //移除所有监听事件
                    swiper0.pagination.$el.addClass('hide');
                }
			}) 

			banner({params:{location: "index_middle"}}).then(res => {
				this.adsImg = res.obj;
			}).then(() => {
				var swiperc1 = new Swiper('.swiper-container-c1', {
		            slidesPerView: 'auto',
		            centeredSlides: true,
		            paginationClickable: true,
		            spaceBetween: 16,
		            loop: true,
		            autoplay: 4500,
		            autoplayDisableOnInteraction: false
		        });
        
			})
		}
	}

}
</script>
<style lang="scss">
@import '../../assets/scss/var.scss';
.swiper-pagination {
    bottom: $banBottom !important;
}
.swiper-container-c1 {
	height: pxTorem(180) !important;
	.swiper-slide {
		width: pxTorem(640) !important;
		border-radius: 12px;
	}
}
.bg-account {
	background: $bkg-theme;
	padding: 0 4px;
	@include semicircle;
	color: #fff;
	margin-right: 10px;
	[class^="icon-"] {
		color: #fff;
		font-size: 14px;	
	}
	.icon-coin {
		padding-right: 4px;
	}
	.icon-right {
		padding-left: 10px;
	}
}

.nav-list {
	position: relative;
	top: - $banBottom;
    z-index: 2;
	padding: 0 $banBottom;
	background-color: #fff;
    border-top-left-radius: $banBottom;
    border-top-right-radius: $banBottom;
	img {
		width: pxTorem(88);
		margin: 0 auto;
	}
}
.activity-block {
	position: relative;
	background: -webkit-linear-gradient(top, #9af6f1, #ccfdff);
	// height: pxTorem(750);
}
.acitvity-bg {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
}
.activity-title {
	color: #fff;
	padding: pxTorem(40) 0;
	line-height: pxTorem(20);
	width: 100%;
	text-align: center;
	display: inline-block;
	span {
		display: inline-block;
		vertical-align: middle;
	}
	&:before, &:after {
		content: '.';
		display: inline-block;
		vertical-align: middle;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: pxTorem(168);
		height: pxTorem(14);
		margin: 0 6px;
	}
	&:before {
		background-image: url(../../assets/images/leftLine.png);
	}
	&:after {
	 	background-image: url(../../assets/images/rightLine.png);
	}
}
.activity-list {
	position: relative;
	z-index: 2;
	ul {
		padding: 0 .5rem 1rem .5rem;
	    overflow: hidden;
	    width: 100%;
	    box-sizing: border-box;
	    position: relative;
	}
	a {
		background-color: #fff;
	    height: 4.65rem;
	    box-sizing: border-box;
	}
	li {
		box-sizing: border-box;
	    width: 50%;
	    float: left;
	    padding: .1rem;
	    &:first-child a {
	    	height: 9.46rem;
		    display: block;
		    padding: 10px;
	    }
	}
	
}
.act-img {
    width: auto;
    height: 3.5rem;
}
</style>