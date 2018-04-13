<template>
	<div class="banner-b">
		<div class="nothing hide">
	        <i class="icon-ticket"></i>
	        <h4>您的账户暂无卡券</h4>
	    </div>
		<ul class="ticket-list border-list">
			<li>
	            <a class="list-box">
	                <div class="ticket-img">
	                     <img src="../../assets/images/ticket1.jpg">
	                     <p>￥<span>200</span></p>
	                </div>
	               
	                <div class="list-info-v">
	                    <h4>e券-中石化加油现金券200元</h4>
	                    <p>有效期至<span>2016-12-30</span></p>
	                    <p>券码<span>275803460935</span></p>
	                </div>
	                <a href="recharge_type.html" class="btn-theme btn-normal">点击充值</a>
	            </a>
	        </li>
	        <li>
	            <a class="list-box">
	                <div class="ticket-img">
	                     <img src="../../assets/images/ticket1.jpg">
	                     <p>￥<span>200</span></p>
	                </div>
	               
	                <div class="list-info-v">
	                    <h4>e券-中石化加油现金券200元</h4>
	                    <p>有效期至<span>2016-12-30</span></p>
	                    <p>券码<span>275803460935</span></p>
	                </div>
	                <a href="recharge_type.html" class="btn-theme btn-normal">点击充值</a>
	            </a>
	        </li>
		</ul>
		<div class="fixed-bottom">
			<footer-nav></footer-nav>	
		</div>
	</div>
</template>
<script>
import FooterNav from '/components/footer'
export default {
	name: 'ticket',
	data() {
		return {

		}
	},
	components: {
		FooterNav
	}

}
</script>
<style lang="scss" scoped>
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
</style>