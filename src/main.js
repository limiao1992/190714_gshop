/**
 * 入口js
 */
import Vue from 'vue'
import App from './App'
import router from './router'//引入路由
import store from './store'
import mintUI from 'mint-ui'//导入mint-ui核心包
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import loading from './common/imgs/timg.gif'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import './filters'//加载过滤器

import './mock/mockServer' //加载mockServer即可
import vueScroll from 'vuescroll'
Vue.use(vueScroll)
//注册全局组件标签
Vue.component(Button.name, Button) //<mt-button>
Vue.use(Viewer, {
  defaultOptions: {
    zIndex: 9999,
    keyboard:true, //是否支持键盘
    counterEl: true,//页数
  }
})
Vue.use(VueLazyload, { // 内部自定义一个指令lazy
  loading
})
new Vue({
  el: '#app',
  render: h => h(App),
  router, //使用上vue-router
  store, //使用上vuex
  mintUI
})
