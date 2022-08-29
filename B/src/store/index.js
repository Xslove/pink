import Vue from 'vue'
import Vuex from 'vuex'
import tab from './modules/tab.js'
import del from './modules/del.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  c: {
  },
  actions: {
  },
  modules: {
    tab,
    del
  }
})
