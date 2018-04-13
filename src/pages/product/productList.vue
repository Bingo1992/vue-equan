<template>
	<div class="banner-t">
		<loading v-if="showLoading"></loading>
		<div id="proList" v-else>
			<div class="fixed-top pdt pdl pdr bg-show">
				<form class="search-bar list-info-h">
					<div class="list-box">
						<i class="icon-search"></i>
						<input class="list-info-h" type="search" placeholder="请输入商品名称、品牌等">
					</div>
				</form>
				<ul class="sort-tabs flex-layout border-bottom">
		            <li v-for="(item, i) in sortList" @click="chooseSort(i)">
		                <p>
		                    <span>{{i==0? sortPro: sortPrice}}</span>
		                    <i :class="[sortIndex==i?'icon-arrow-up font-theme':'icon-arrow-down']"></i>
		                </p>
		            </li>
		        </ul>

			</div>

			<sort-tabs v-show="sortIndex != null" :sortIndex="sortIndex" @closeDialog="closeDialog" @sortPrice="confirmBtn"></sort-tabs>

			<product :proList="proList"></product>	

			<div v-show="!busy" class="getmore" v-infinite-scroll="loadMore"
		         infinite-scroll-disabled="busy" infinite-scroll-distance="10">
		      正在加载...
		    </div>

			<transition name="router-slid" mode="out-in">
		    	<router-view></router-view>
		    </transition>
		</div>

		<div class="fixed-right">
			<router-link to="/cart">
				<i class="icon-cart"></i>
				<span class="semiCirclePoint">12</span>
			</router-link>
			<a href="#proList"><i class="icon-top"></i></a>
		</div>
			
			
	</div>
</template>
<script>
import product from '/components/product'
import sortTabs from '/components/sortTabs'
import loading from '/components/loading'
import {proList, sortList} from '/api/api' 
import {mapState, mapMutations} from 'vuex'
export default {
	name: 'home',
	data() {
		return {
			showLoading: true,
			sortList: ['全部分类', '价格'],
			sortPrice: '价格',
			sortIndex: null,//点击的筛选类型
			busy: false,
			params: {
				page: 1,
				sort: '',
				type: this.$route.query.type
			}
		}
	},
	created() {
		this._initData();
	},
	components: {
	    product, loading, sortTabs
	},
	computed: {
		...mapState(['sortPro'])
	},
	methods: {
		...mapMutations(['CHOOSE_PROSORT']),
		_initData() {
			let type = this.$route.query.type;
			// 筛选分类
			sortList().then(res => {
				let sortList = res;
				sortList.forEach((item, i) => {
					if(item.type === type) {
						this.CHOOSE_PROSORT({sortPro: item.value, index: i});
					}
				})
			});
			// this._getProList();
			proList(type).then(res => {
				this.proList = res.list;
				this.showLoading = false;
			});
			
		},
		//获取商品列表
		_getProList(flag) {
			let params = {
	          params: {
	            page: this.params.page,
	            type: this.params.type
	            // sort: this.params.sort
	          }
	        }
			//商品列表
			proList(params).then(res => {
				if(this.params.page < res.count) {
					let data = res.list;
					this.showLoading = false;
					if(flag) {
						this.proList = this.proList.concat(data);
					} else {
						this.proList = data;
					}
				} else {
		            clearTimeout(this.timer)
		            this.busy = true
		          }
			});
		},
		// 加载更多
	    loadMore () {
	    	console.log('a')
	        this.busy = true;
	        this.timer = setTimeout(() => {
	          this.params.page++;
	          this._getProList(true);
	          this.busy = false;
	        }, 500);
	    },
		//筛选弹窗
		chooseSort(i) {
			if(this.sortIndex != i) {
				this.sortIndex = i;
			} else {
				this.sortIndex = null;//关闭窗口
			}
		},
		confirmBtn(sortPrice) {
			this.sortPrice = sortPrice;
		},
		// 关闭遮罩
		closeDialog() {
			this.sortIndex = null;
		}
	}

}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/var.scss';
.fixed-right {
	position:fixed;
    right: 12px;
    bottom: 4rem;
    width: 100%;
    z-index: 2; 
    width: 45px;
    a {
    	@include circle(45px);
    	display: block;
    	border: 1px solid #e2e2e2;
    	background-color: rgba(246, 247, 249, .9);
    	color: #999;
    	margin-top: 6px;
    	position: relative;
    }
    i {
    	font-size: 24px;
    }
    .semiCirclePoint {
    	@include semicircle(10px);
    	background-color: $color-red;
    	position: absolute;
    	color: #fff;
    	padding: 0 4px;
    	font-size: 8px;
		right: 0;
    	top: 8px;
    }
}
.banner-t {
	margin-top: 83px;
	height: calc(100vh - 83px); 
	overflow-y: auto;
}
#proList {
	margin-top: -83px;
	padding-top: 83px;
}
.sort-tabs {
	p {
		width: 100%;
	}
	i {
		font-size: $md-font;
		color:  #e3e3e3;
	}
}
</style>