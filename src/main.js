/**
 * 入口js
 */
import Vue from 'vue'
import App from './App'
import  router from './router'//引入路由

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
