// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import App from './App'
import router from './router'
import store from './store/index'

import './assets/css/fonts'
import './assets/scss/style'
import './utils/rem'

// require('./mock');
Vue.use(VueLazyload, {
  loading: '/static/images/loading.png'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
	if(to.meta.title) {
		document.title = to.meta.title;
	}
	next();
})