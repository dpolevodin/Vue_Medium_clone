import Vue from 'vue'
// import { set } from 'vue/types/umd'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
  },
  modules: {
  }
})
