import { setStore, getStore } from '/utils/storage'

export default {
	['INIT_BUYCART'](state) {
		let initCart = getStore('buyCart');
		if(initCart) {
			state.cartList = JSON.parse(initCart);
		}
	},
	  // 加入购物车
  	['ADD_CART'](state, { proID, proImg, proName, proPrice, marketPrice, check = false, proNum = 1 }) {
    let cart = state.cartList; // 购物车
    let falg = true;
    let goods = {
      proID,
      proImg,
      proName,
      proPrice,
      marketPrice
    }
    if (cart.length) { // 有内容
      cart.forEach(item => {
        if (item.proID === proID) {
          if (item.proNum >= 0) {
            falg = false;
            item.proNum += proNum;
          }
        }
      })
    }
    if (!cart.length || falg) {
      goods.proNum = proNum;
      goods.check = false;
      cart.push(goods);
    }
    state.cartList = cart;
    // 存入localStorage
    setStore('buyCart', cart);
  },
   // 修改购物车
  ['EDIT_CART'] (state, {proID, proNum, check}) {
    let cart = state.cartList;
 
    // if(type != 0 && proID){//修改数量
     
    //   cart.forEach((item,i) => {
    //     if(item.proID === proID) {
    //       if(type < 0 && item.proNum > 1 || type > 0) {
    //          item.proNum += type;
    //       }
    //     }
    //   })
    // } 
    if(proID) {
       cart.forEach((item) => {
        if(item.proID === proID) {
          item.proNum = proNum;
          item.check = check;
        }
      })
    }
    // else if(proID) {//单个勾选
    //   cart.forEach((item) => {
    //     if(item.proID === proID) {
    //       item.check = check;
    //     }
    //   })
    // }
     else { //全选
      cart.forEach((item) => {
        item.check = check ? true : false;
      })
    }
    state.cartList = cart;
    // 存入localStorage
    setStore('buyCart', state.cartList);
    
  },
    //删除购物车
  ['DELETE_CART'] (state, checkID) {
    let cart = state.cartList;
    checkID && checkID.forEach((id, idx) => {
       cart.forEach((item,i) => {
          if(item.proID === id) {
            cart.splice(i, 1);
          }
        })
    });
       
   state.cartList = cart;
    // 存入localStorage
    setStore('buyCart', state.cartList);
  },
  //选择的地址
  ['CHOOSE_ADDRESS'](state, {address,index}) {
    state.choosedAddress = address;
    state.addressIndex = index;
  },
  //选择的商品分类
  ['CHOOSE_PROSORT'](state, {sortPro, index}) {
    state.sortProIndex = index;
    state.sortPro = sortPro;
  }
}