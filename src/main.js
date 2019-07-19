/**
 * 入口js
 */
import Vue from 'vue'
import App from './App'
import router from './router'//引入路由
import store from './store'
import mintUI from 'mint-ui'//导入mint-ui核心包
import {Button} from 'mint-ui'

import './mock/mockServer' //加载mockServer即可
import vueScroll from 'vuescroll'
Vue.use(vueScroll)
//注册全局组件标签
Vue.component(Button.name, Button) //<mt-button>

new Vue({
  el: '#app',
  render: h => h(App),
  router, //使用上vue-router
  store, //使用上vuex
  mintUI
})
