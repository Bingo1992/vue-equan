<template>
	<div class="banner-b">
		<div class="nothing hide">
	        <i class="icon-ticket"></i>
	        <h4>您的账户暂无卡券</h4>
	    </div>
	    <router-link class="list-box" to="/ebiCharge">
	    	<div class="list-info-h">
	    		<span>使用e券积分卡充值</span>
	    		<i class="icon-tip" @click.prevent="showConfirmDialog()">?</i>
	    	</div>
	    	<i class="icon-right"></i>
	    </router-link>

		<ul class="bg-mgShow ticket-list border-list">
			<li>
	            <a class="list-box">
	                <div class="ticket-img">
	                     <img src="../../assets/images/ticket1.jpg">
	                     <p>￥<span>200</span></p>
	                </div>
	               
	                <div class="list-info-v">
	                    <h5>e券-中石化加油现金券200元</h5>
	                    <p>有效期至<span>2016-12-30</span></p>
	                    <p>券码<span>275803460935</span></p>
	                </div>
	                <router-link class="btn-theme btn-normal" to="/rechargeType">点击充值</router-link>
	            </a>
	        </li>
	    <!--     <li>
	            <a class="list-box">
	                <div class="ticket-img">
	                     <img src="../../assets/images/ticket1.jpg">
	                     <p>￥<span>200</span></p>
	                </div>
	               
	                <div class="list-info-v">
	                    <h5>e券-中石化加油现金券200元</h5>
	                    <p>有效期至<span>2016-12-30</span></p>
	                    <p>券码<span>275803460935</span></p>
	                </div>
	                <a href="recharge_type.html" class="btn-theme btn-normal">点击充值</a>
	            </a>
	        </li> -->
		</ul>

		
		<div class="fixed-bottom">
			<footer-nav></footer-nav>	
		</div>

		<confirm-dialog v-if="showDialog" :confirmTitle="confirmTitle" :confirmText="confirmText"  @closeConfirmDialog="closeConfirmDialog"></confirm-dialog>
	</div>
</template>
<script>
import confirmDialog from '/components/confirmDialog'
import FooterNav from '/components/footer'
export default {
	name: 'ticket',
	data() {
		return {
			confirmTtitle: '',
			confirmText: '',
			showDialog: false
		}
	},
	components: {
		FooterNav, confirmDialog
	},
	mounted() {

	},
	methods: {
		_initData() {
			
		},
		//显示遮罩
	    showConfirmDialog() {
	      this.showDialog = true;
	      this.confirmTitle = '帮助';
	      this.confirmText = '1、刮开e券积分卡背面的“密码”涂层；<br>\
	      2、将密码输入到“码券”，安全码输入到“安全码”；<br>\
	      3、拖动滑条获取图片验证码，按提示点击图片中的图案；<br>\
	      4、点击“充值”进入充值页面';
	       // event.cancelBubble = true;
	    },
		//关闭遮罩
	    closeConfirmDialog() {
	      this.showDialog = false;
	    }	
	}

}
</script>
<style lang="scss" scoped>
@import "../../assets/scss/var.scss";
.ticket-img {
    position: relative;
    text-align: center;
    width: 3.4rem;
    height: 2.5rem;
    line-height: 2.5rem;
    margin-right: 10px;
    img {
    	position: absolute;
	    top: 0;
	    left: 0;
    }
    p {
    	position: relative;
	    z-index: 2;
	    color: #fff;
	    font-size: 18px;
    }
}	
.ticket-list {
	.btn-theme {
		position: absolute;
	    bottom: 10px;
	    right: 10px;
	    line-height: 32px;
	    height: 32px;
	    font-size: 12px;
	    padding: 0 10px;
	    margin: 0;
	}	
}
.icon-tip {
	@include circle(18px);
	color: $color-theme;
	border: 1px solid $color-theme;
	font-size: 16px;
	margin-left: 6px;
}
</style>