/*
通过mutation间接更新state的多个方法的对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'
import {
  reqAddress,
  reqFoodCategorys,
  reqShops
} from '../api'
export default {
//异步获取地址
  async getAddress({commit,state}){
    //发送异步ajax请求
    const geohash=state.latitude+','+state.longitude
    const result=await reqAddress(geohash)
    if(result.code===0){
      const address=result.data
      commit(RECEIVE_ADDRESS,{address})
    }
    //提交一个mutation
  },
  //异步获取食品分类列表
  async getCategorys({commit}){
    //发送异步ajax请求
    const result=await reqFoodCategorys()
    if(result.code===0){
      const categorys=result.data
      commit(RECEIVE_CATEGORYS,{categorys})
    }
    //提交一个mutation
  },
  //异步获取商家列表
  async getShops({commit,state}){
    //发送异步ajax请求
    const {longitude, latitude}=state
    const result=await reqShops(longitude, latitude)
    if(result.code===0){
      const shops=result.data
      commit(RECEIVE_SHOPS,{shops})
    }
    //提交一个mutation
  }
}
