import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['/pages/home/home'], resolve);
const Ticket = resolve => require(['/pages/ticket/ticket'], resolve);
const User = resolve => require(['/pages/user/user'], resolve);
const Cart = resolve => require(['/pages/cart/cart'], resolve);

const OrderConfirm = resolve => require(['/pages/order/orderConfirm'], resolve);

const ChooseAddress = resolve => require(['/pages/address/chooseAddress'], resolve);
const AddAddress = resolve => require(['/pages/address/children/addAddress'], resolve);
const AddressManage = resolve => require(['/pages/address/addressManage'], resolve);

const RechargeCenter = resolve => require(['/pages/recharge/rechargeCenter'], resolve);

const ProList = resolve => require(['/pages/product/productList'], resolve);
const ProDetail = resolve => require(['/pages/product/children/productDetail'], resolve);
Vue.use(Router)

export default new Router({
  mode: 'history',
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
      meta: {title: 'E券商城', keepAlive: true}
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
    },
    {
      path: '/proList',
      component: ProList,
      meta: {title: '商品列表'},
      children:[{
          path: 'productDetail',
          component: ProDetail,
          meta: {title: '商品详情'}
      }]
    },
    {
        path: '/productDetail',
        component: ProDetail,
        meta: {title: '商品详情'}
    },
    {
      path: '/chooseAddress',
      meta:'选择地址',
      component: ChooseAddress,
      meta: {title:'选择地址'},
      children:[{
        path: 'addAddress',
        component: AddAddress,
        meta: {title:'添加地址'}
      }] 
    },
    {
      path: '/addressManage',
      component: AddressManage,
      meta: {title:'地址管理'},
      children:[{
        path: 'addAddress',
        component: AddAddress,
        meta: {title:'添加地址'}
      }]
    },
    {
      path: '/rechargeCenter',
      component: RechargeCenter,
      meta: {title:'充值中心', keepAlive: true}
    },
    {
      path: '/orderConfirm',
      component: OrderConfirm,
      meta: {title: '订单确认'}
    }
    
  ]
})
