<template>
	<div>
		<loading v-if="showLoading"></loading>
		<div v-else>
			<banner :listImg="adsImg" myClass="-c2"></banner>
			<ul class="recharge-list flex-layout">
				<li>
					<router-link to="/telCharge">
						<img src="../../../static/images/mobile.png">
						<p>话费充值</p>
					</router-link>
				</li>
				<li>
					<router-link to="/flowCharge">
						<img src="../../../static/images/flow.png">
						<p>流量充值</p>
					</router-link>
				</li>
				<li>
					<router-link to="/oilCharge">
						<img src="../../../static/images/oil.png">
						<p>油卡充值</p>
					</router-link>
				</li>
			</ul>
			<product :proList="proList"></product>
		</div>
	 
	</div>
</template>
<script>
import {banner, ads, proList} from '/api/api'
import Banner from '/components/swiperDefault'
import product from '/components/product'
import loading from '/components/loading'

export default {
	name: 'home',
	data() {
		return {
			showLoading: true,
			adsImg: []
		}
	},
	created() {
		this._initData();
	},
	components: {
	   Banner, product, loading
	},
	methods: {
		_initData() {
			proList().then(res => {
				this.proList = res.list;
				this.showLoading = false;
			});
			banner().then(res => {
				this.adsImg = res.obj;
			}).then(() => {
				var swiperc3 = new Swiper('.swiper-container-c2', {
		            slidesPerView: 'auto',
		            centeredSlides: true,
		            paginationClickable: true,
		            spaceBetween: 12,
		            loop: true,
		            autoplay: 5000,
		            autoplayDisableOnInteraction: false
		        });
        
			})
		}
	}

}
</script>
<style lang="scss">
@import '../../assets/scss/var.scss';
.swiper-container-c2 {
	height: pxTorem(317) !important;
	margin-top: $gauge;
	.swiper-slide {
		width: pxTorem(687) !important;
		border-radius: 16px;
	}
}
.recharge-list {
	padding: $gauge .3rem 0 .3rem;
	li {
		background-color: #f8f8f8;
	    border-radius: .6rem;
	    margin: 0 .3rem;
    	padding: 1rem 0;
	}
		
	img {
		width: pxTorem(54);
		margin: 0 auto;
	}
}

</style>