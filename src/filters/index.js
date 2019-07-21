//引入npm install --save moment
//在main.js中 import './filters'
import Vue from 'vue'
import moment from 'moment'
//自定义过滤器
Vue.filter('date-format',function (value,formatStr='YYYY-MM-DD HH:mm:ss') {
  return moment(value).format(formatStr)
})
