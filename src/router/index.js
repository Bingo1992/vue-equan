import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['/pages/home/home'], resolve);
const Ticket = resolve => require(['/pages/ticket/ticket'], resolve);
const User = resolve => require(['/pages/user/user'], resolve);
const Cart = resolve => require(['/pages/cart/cart'], resolve);
const ProDetail = resolve => require(['/pages/home/children/productDetail'], resolve);
 
Vue.use(Router)

export default new Router({
  routes: [
  	{
     //地址为空时跳转home页面 
      path: '',
      redirect: '/home'//重定向
      // meta: {title: 'E券商城'}
    },
    {
      path: '/home',
      component: Home,
      meta: {title: 'E券商城'},
      children: [{
        path: 'productDetail',
        component: ProDetail,
        meta: {title: '商品详情'}
      }]
    },
    {
      path: '/cart',
      component: Cart,
      meta: {title: '购物车'}
    },
    {
      path: '/ticket',
      component: Ticket,
      meta: {title: '企业赠券'}
    },
    {
      path: '/user',
      component: User,
      meta: {title: '个人中心'}
    }
  ]
})
