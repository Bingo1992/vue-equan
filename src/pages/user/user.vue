<template>
	<div class="banner-b personnel-list">
		<div class="list-box">
            <img class="per-img" src="../../assets/images/per.jpg">
            <div class="list-info-v">
            	<h5>我的昵称</h5>
                <p>我的e币&nbsp;<span class="font-orange">75800</span></p>
            </div>
            <router-link class="btn-theme" to="/">e币充值</router-link>
        </div>
            
		<ul class="bg-mgShow">
            <li>
                <router-link class="list-box" to="/account">
                    <i class="icon-account font-red pdr"></i>
                    <span class="list-info-h">我的账户</span>
                    <i class="icon-right"></i>
                </router-link>
            </li>
            <li>
            	<router-link class="list-box" to="/orderList">
                    <i class="icon-order font-green pdr"></i>
                    <span class="list-info-h">兑换订单</span>
                    <span class="circlePoint">3</span>
                    <i class="icon-right"></i>
                </router-link>
            </li>
            <li>
                <router-link class="list-box" to="/ticket">
                    <i class="icon-ticket-3 font-yellow pdr"></i>
                    <span class="list-info-h">我的卡券</span>
                    <i class="icon-right"></i>
                </router-link>
            </li>
            <li>
               <router-link class="list-box" to="/addressManage">
                    <i class="icon-address font-blue pdr"></i>
                    <span class="list-info-h">收货地址</span>
                    <i class="icon-right"></i>
                </router-link>
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
	name: 'user',
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
.per-img {
	width: 3rem;
    height: 3rem;
    border-radius: 3rem;
    overflow: hidden;
    margin-right: .5rem;
}
.personnel-list {
	.circlePoint {
		position: relative;
		top: 0;
		right: 4px;
	}
	.btn-theme {
		height: 32px;
		line-height: 32px;
		padding: 0 10px;
		border-radius: 2px;
	}
}
</style>