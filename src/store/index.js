/**
 * Created by maijinchao on 2018/4/19.
 * 统一 store 的入口
 */

import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    app
  },
  getters
})

export default store



