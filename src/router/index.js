import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['/pages/home/home'], resolve);
const Ticket = resolve => require(['/pages/ticket/ticket'], resolve);
const User = resolve => require(['/pages/user/user'], resolve);
const ProDetail = resolve => require(['/pages/home/children/productDetail'], resolve);
// const Home = r => require.ensure([], () => r(require('/pages/home/home')), 'home');
// const ProDetail = r => require.ensure([], () => r(require('/pages/product/productDetail')), 'prodetail');
// const Ticket = r => require.ensure([], () => r(require('/pages/ticket/ticket')), 'ticket');
// const User = r => require.ensure([], () => r(require('/pages/user/user')), 'user');
Vue.use(Router)

export default new Router({
  routes: [
  	{
     //地址为空时跳转home页面 
      path: '',
      redirect: '/home',//重定向
      meta: {title: '首页'}
    },
    {
      path: '/home',
      component: Home,
      meta: {title: '首页'},
      children: [{
        path: 'productDetail',
        component: ProDetail,
        meta: {title: '商品详情'}
      }]
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
