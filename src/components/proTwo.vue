<template>
	<div class="proListTwo">
		<div class="title-list">
			<h4>人气推荐</h4>
			<i class="icon-right"></i>
		</div>
		<ul class="pro-list pro-list-2">
			<li v-for="(item, i) in proList">
				<router-link :to="{path:'/home/productDetail', query: {id: item.id}}">
					<img class="pro-img-2" v-lazy="item.imageUrl">
					<div class="label">
						<span v-if="item.label1" class="label-orange">{{item.label1}}</span>
						<span v-if="item.label2" class="label-blue">{{item.label2}}</span>
						<span v-if="item.label3" class="label-red">{{item.label3}}</span>
					</div>
					
					<h5 class="pro-title nowrap-2">{{item.proTitle}}</h5>
					<div class="price-big">
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
</template>
<script>
import {proList} from '/api/api';
 
export default {
	name: 'proList2',
	data() {
		return {
			proList: []
		}
	},
	mounted() {
		this._initData();
	},
	// props: ['proList'],
	methods: {
		_initData() {
			proList().then(res => {
				this.proList = res.list;
			})
		}
	}
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/var.scss";

.pro-list-2 {
	padding: 0 pxTorem(14);	
	li {
		width: 50%;
		padding: 0 pxTorem(10);
		height: pxTorem(353) + 4.8;
	}

}
 
 
</style>