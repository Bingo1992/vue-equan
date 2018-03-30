<template>
	<div class="proListTwo">
		<loading v-if="showLoading"></loading>
		<div v-if="!showLoading">
			<div class="title-list">
				<h4>新品首发</h4>
				<i class="icon-right"></i>
			</div>
			<ul class="pro-list pro-list-1">
				<li v-for="(item, i) in proList" :key="item.id">
					<router-link :to="{path:'/home/productDetail',query:{id: item.id}}">
						<div class="pro-img-1">
							<img v-lazy="item.imageUrl">
							<span v-if="item.label1" class="label-orange">{{item.label1}}</span>
						</div>
						<h5 class="nowrap-2">{{item.proTitle}}</h5>
						<div class="pdb">
							<span class="font-orange">
								<i class="icon-coin"></i>
								{{item.price}}
							</span>
							<s class="right-text font-gray">市场价￥{{item.marketPrice}}</s>
						</div>
					</router-link>			
				</li>
			</ul>
		</div>
			
		
	</div>
</template>
<script>
import {proList} from '/api/api';
import loading from '/components/loading'
export default {
	name: 'proList1',
	data() {
		return {
			proList: [],
			showLoading: true
		}
	},
	mounted() {
		this._initData();
	},
	components: {
	    loading
  	},
	// props: ['proList'],
	methods: {
		_initData() {
			proList().then(res => {
				this.proList = res.list;
				this.showLoading = false; 
			})
		}
	}
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/var.scss";
.pro-list-1 {
	padding: 0 pxTorem(32);
	li {
		width: pxTorem(228);
	}
}
.pro-img-1 {
	position: relative;
	[class^="label-"] {
		position: absolute;
		bottom: 4px;
		left: 4px;
	}
}	
</style>