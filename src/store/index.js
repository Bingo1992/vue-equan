import Vue from 'vue'
import Vuex from 'vuex'
import   mutations  from './mutations'

Vue.use(Vuex);

// 创建一个对象来保存应用启动时的初始状态
const state = {
	cartList: [], //购物车
	choosedAddress: null,//选择地址
	addressIndex: null,//选择地址的索引值
}

export default new Vuex.Store({
　  state,
　  mutations
});