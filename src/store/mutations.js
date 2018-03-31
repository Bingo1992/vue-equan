import { setStore, getStore } from 'utils/storage'

export default {
	['INIT_BUYCART'](state) {
		let initCart = getStore('buyCart');
		if(initCart) {
			state.cartList = JSON.parse(initCart);
		}
	}
}