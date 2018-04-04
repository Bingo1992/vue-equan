<template>
	<div class="banner-bt">
		<div class="fixed-top bg-show">
			<div class="list-box border-bottom">
				<div class="bg-account">
					<div class="list-box">
						<div class="list-info-h">
							<i class="icon-coin"></i>
							e币 {{account}}
						</div>
						<i class="icon-right"></i>
					</div>	
				</div>

				<div class="search-bar list-info-h">
					<div class="list-box">
						<i class="icon-search"></i>
						<input class="list-info-h" type="text" placeholder="请输入商品名称、品牌等">
					</div>
				</div>	
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
				<a href="#">
					<img src="../../../static/images/4.png">
					<p>充值中心</p>
				</a>
			</li>
		</ul>

		<div class="activity-block">
			<img src="../../assets/images/activities.png" class="acitvity-bg">
			<div class="activity-list">
				<h3 class="activity-title"><span>活动专区</span></h3>
				<ul>
					<li>
						 
					</li>
				</ul>
			</div>
		</div>
	    <pro-three></pro-three>
	    <banner :listImg="adsImg" myClass="-c1"></banner>
		<pro-two></pro-two>
		
		
		<transition name="router-slid" mode="out-in">
	        <router-view></router-view>
	    </transition>

	    <div class="fixed-bottom">
	    	<footer-nav></footer-nav>
	    </div>
		
		 
	</div>
</template>
<script>
import {banner, ads} from '/api/api'
import Banner from '/components/swiperDefault'
import FooterNav from '/components/footer'
import proTwo from '/components/proTwo'
import proThree from '/components/proThree'
import Swiper from 'swiper'

export default {
	name: 'home',
	data() {
		return {
			list: [],
			showLoading: true,
			account: 5888, //e币
			// listImg: [{
			// 	url: a
			// },{
			// 	url: b
			// },{
			// 	url: c
			// }],
			adsImg: [],
			listImg: []
		}
	},
	created() {
		this._initData();
	},
	components: {
	   Banner, proTwo, proThree, FooterNav
	},
	methods: {
		_initData() {
			banner().then(res => {
				this.listImg = res.obj;
			}).then(() => {
				var swiper0 = new Swiper('.swiper-container0', {
		            pagination: '.swiper-pagination0',
		            paginationClickable: true,
		            loop: true,
		            autoplay: 3000,
		            autoplayDisableOnInteraction: false
		        });
			}) 

			banner().then(res => {
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

.search-bar {
	margin-left: 10px;
	background-color: #f2f3f5;
	@include semicircle;
	padding: 0 10px;
	.icon-search {
		font-size: 20px; 
		color: #d7d8d9;
		font-weight: bold;
		padding-right: 4px;
	}
	.list-info-h {
		overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
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
	height: pxTorem(750);
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
}

</style>