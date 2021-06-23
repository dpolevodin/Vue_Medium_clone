import Vue from 'vue'
// import { set } from 'vue/types/umd'
import Vuex from 'vuex'
import auth from '@/store/modules/auth'
import login from '@/store/modules/login'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    login
  }
})
