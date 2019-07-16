/**
 * 入口js
 */
import Vue from 'vue'
import App from './App'
import router from './router'//引入路由
import store from './store'
import mintUI from 'mint-ui';//导入mint-ui核心包

new Vue({
  el: '#app',
  render: h => h(App),
  router, //使用上vue-router
  store, //使用上vuex
  mintUI
})
