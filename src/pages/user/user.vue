<template>
	<div class="banner-b">
		<ul class="border-list">
			<li class="list-box">
				<img src="../../assets/images/chat.png">
				<div class="list-info">
					<h4>hfoer</h4>
					<p>424349</p>
				</div>
				<a class="btn-theme">点击</a>
			</li>
		</ul>

		<footer-nav></footer-nav>	
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
<style lang="scss">
	
</style>