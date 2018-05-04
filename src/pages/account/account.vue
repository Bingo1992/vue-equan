<template>
	<div>
		<div class="credit-top">
	        <div class="search" @click="show = !show">
	            <i class="icon-search"></i>
	            <span>按日期查询</span>
	        </div>
	        <div class="credit-num">
	            <p>e币总额</p>
	            <h1>{{account}}</h1>
	        </div>
	        <router-link class="btn-recharge" to="/ticket">e币充值</router-link>
	    </div>

	    <!-- 输入查询日期结束 -->
	    <article class="bg-mgShow">
	        <div class="credit-title border-bottom">
	            <p>{{ beginTime != null && endTime != null ? beginTime1 + '至' + endTime1 :'7天内'}}交易情况</p>
	        </div>
	        <table class="credit-detail border-bottom">
	            <thead>
	                <tr>
	                    <th>交易日期</th>
	                    <th>交易描述</th>
	                    <th>额度变动</th>
	                </tr>
	            </thead>
	            <tbody>
	                <tr>
	                    <td>2015-12-24</td>
	                    <td>中石化燃油宝中石化燃油宝中石化燃油宝</td>
	                    <td class="minus">-100</td>
	                </tr>
	                <tr>
	                    <td>2015-12-24</td>
	                    <td>加油服务</td>
	                    <td class="plus">+100</td>
	                </tr>
	                <tr>
	                    <td>2015-12-24</td>
	                    <td>中石化燃油宝</td>
	                    <td class="minus">-20</td>
	                </tr>
	            </tbody>
	        </table>
	        <p class="getmore">点击加载更多</p>
	    </article>
	    

	    <!-- 输入查询日期 -->
	    <transition name="router-slid" mode="out-in">  
		    <div v-if="show" class="time-list fixed-body">
	            <a class="list-box border-bottom" @click="show = !show">
	                <i class="icon-left"></i> 
	                <span class="font-gray">返回</span>
	            </a>
	            <ul class="border-list">
	                <li>
	                    <label for="beginTime">选择开始时间</label>
	                    <input type="date" name="beginTime" placeholder="请输入查询时间段" v-model="beginTime">
	                    <i class="icon-right"></i>
	                </li>
	                <li>
	                    <label for="endTime">选择结束时间</label>
	                    <input type="date" name="endTime" placeholder="请输入查询时间段" v-model="endTime">
	                    <i class="icon-right"></i>
	                </li>
	            </ul>
	            <div class="btn">
	            	<p class="btn-theme" @click="checkData">查询</p>
	            </div>
		    </div>
		</transition>

		 <!-- 提示弹窗 -->
        <alert-tip v-if="showAlertTip" :alert-text="alertText"></alert-tip>
          
	</div>
</template>
<script>
import alertTip from '/components/alertTip'
export default {
	data() {
		return {
			account: 0,//e币总和
			show: false,//是否显示遮罩
			showAlertTip: false,//是否显示弹窗
			beginTime: null,//input开始时间
			endTime: null,//input结束时间
			beginTime1: null,//确认后的开始时间
			endTime1: null//确认后的结束时间
		}
	},
	components: {
        alertTip
    },
    methods: {
    	// 点击查询按钮
    	checkData() {
    		if(this.endTime === null || this.beginTime === null) {
    			this.showHideAlert('日期不能为空');
    		} else if(this.endTime <= this.beginTime) {
    			this.showHideAlert('结束日期必须大于开始日期');
    		} else {
    			this.beginTime1 = this.beginTime;
    			this.endTime1 = this.endTime;
    			this.show = false;
    		}
    	},
    	//显示弹窗
        showHideAlert(text) { 
            this.showAlertTip = true;
            this.alertText = text;
            setTimeout(() => {
                this.showAlertTip = false;
            }, 1500);
        },
    }
}
</script>
<style lang="scss">
@import '../../assets/scss/var.scss';
.credit-top {
    background-color: #3a97e5;
    color: #fff;
    overflow: hidden;
    position: relative;
    .search {
	    text-align: right;
	    padding: .5rem .5rem 0 0;
	    width: 100%;
	    box-sizing:border-box;
	}
	.btn-recharge {
	    position: absolute;
	    bottom: .5rem;
	    right: .8rem;
	    background-color: #66b2f2;
	    padding: 4px 8px;
	    border-radius: 2px;
	    color: #fff;
	}
}
.credit-num {
	margin: $gauge;
}

.time-list {
	background-color: #fff;
    li {
    	padding: 0 $gauge;	
    	line-height: 44px;
    }

	input {
	    position: absolute;
	    top: 0;
	    left: 0;
	    padding-left: 6.5rem;
	    width: 100%;
	    @include height(44px);
	}
	i.icon-right {
		float: right;
	}
}
.credit-title {
    color: #3aa3fb;
    line-height: 44px;
    padding-left: $gauge;
    p {
    	display: inline-block;
    }
}
.credit-detail {
    width: 100%;
    text-align: center;
    line-height: 40px;
    table-layout: fixed;
    th {
	    font-weight: normal;
	    position: relative;
	}
	td {
	    max-width: 100%;
	    position: relative;
	    color: #999;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    font-size: 12px;
	}
	.minus { color: #7bd1ab;}
	.plus { color: #ffaf24;}
}
</style>