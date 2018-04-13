<template>
	<div>
		<!-- <loading v-if="showLoading"></loading> -->
		<!-- <div v-if="!showLoading"> -->
			<div class="title-list">
				<h4>新品首发</h4>
				<i class="icon-circle"></i>
			</div>
			<ul :class="['pro-list', proThree? 'pro-list-1':'pro-list-2']">
				<li v-for="(item, i) in proList" :key="item.id" @click="gotoDetail(item.id)">
					<!-- <router-link :to="{path:'/productDetail',query:{id: item.id}}"> -->
						<div :class="[proThree? 'pro-img-1':'pro-img-2']">
							<img v-lazy="item.imageUrl">
							<div class="label">
								<span v-if="item.label1" class="label-orange">{{item.label1}}</span>
								<span v-if="item.label2 && !proThree" class="label-blue">{{item.label2}}</span>
								<span v-if="item.label3 && !proThree" class="label-red">{{item.label3}}</span>
							</div>
							
						</div>
						<h6 v-if="proThree" class="nowrap-2">{{item.proTitle}}</h6>
						<h5 v-else class="nowrap-2">{{item.proTitle}}</h5>
						<div class="price-small">
							<span class="font-orange">
								<i class="icon-coin"></i>
								{{item.price}}
							</span>
							<s class="right-text font-gray">市场价￥{{item.marketPrice}}</s>
						</div>
					<!-- </router-link>			 -->
				</li>
			</ul>
		<!-- </div>	 -->
	</div>
</template>
<script>
import {proList} from '/api/api';
// import loading from '/components/loading'
export default {
	name: 'proList',
	data() {
		return {
			// showLoading: true
		}
	},
	props: ['proList','proThree'],
	methods: {
		gotoDetail(id) {	
			if(this.$route.path.indexOf('proList')) {
				this.$router.push({path:'/proList/productDetail', query:{id: id}});
			} else {
				this.$router.push({path:'/productDetail', query:{id: id}});
			}
		}
	}
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/var.scss";
.proListThree {
	padding-bottom: 16px;
}
.pro-list-1 {
	padding: 0 pxTorem(32);
	li {
		width: pxTorem(228);
		padding: 0 pxTorem(4);
		min-height: pxTorem(368);
	}
	h6 {
		line-height: 1rem;
		padding-top: .3rem;
	}
}
.pro-img-1 {
	position: relative;
	height: pxTorem(220);
	[class^="label-"] {
		position: absolute;
		bottom: 4px;
		left: 4px;
	}
}	
.pro-list-2 {
	padding: 0 pxTorem(14);	
	li {
		width: 50%;
		padding: 0 pxTorem(10);
		height: pxTorem(353) + 4.8;
	}
	h5 {
        padding-top: .3rem;
        line-height: pxTorem(44);
    }
    img {
    	height: pxTorem(341);
    }

}
</style>