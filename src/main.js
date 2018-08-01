// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from './Index'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css'
import storeCommon from './store/common.js'
// import $ from 'jquery'

// import axios from 'axios'
import Vuex from 'vuex'
import './css/base.css'
// Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)
// Vue.use(axios)
// Vue.use($)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Index },
  template: '<Index/>',
  store: new Vuex.Store(storeCommon)
})
