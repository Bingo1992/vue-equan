<template>
	<div class="home">
		<ul class="border-list">
			<li class="list-box" v-for="(item, i) in list">
				<img class="list-img" src="../../assets/images/chat.png">
				<div class="list-info">
					<h4>{{item.id}}</h4>
					<p>424349{{item.id}}</p>
				</div>
				<a class="btn-theme">点击</a>
			</li>
		</ul>
	</div>
</template>
<script>
import {data} from '/api/api'
export default {
	name: 'home',
	data() {
		return {
			list: []
		}
	},
	mounted() {
		this.initData();
	},
	methods: {
		initData() {
			data().then(res => {
				this.list = res.list;
			})
		}
	}

}
</script>
<style lang="scss">
	
</style>