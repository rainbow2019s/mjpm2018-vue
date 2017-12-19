import Vue from 'vue'
import Vuex from 'vuex'
// import * as types from '@/store/mutation-types'
// import * as api from '@/api/counter'
import counter from '@/store/modules/counter'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    counter
  }
})
