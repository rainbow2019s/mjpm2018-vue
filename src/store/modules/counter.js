import * as types from '@/store/mutation-types'
import * as api from '@/api/counter'

const state = {
  count: 29
}

const actions = {
  increment ({commit}, playload) {
    // console.log('increment')
    console.log(playload)
    commit(types.INCREMENT, playload)
  },
  decrement ({commit}) {
    commit(types.DECREMENT)
  },
  init ({commit}) {
    api.getCode((playload) => {
      commit(types.INIT, playload)
    })
  }
}

const mutations = {
  [types.INCREMENT] (state, {n}) {
    state.count += n
  },
  [types.DECREMENT] (state) {
    state.count --
  },
  [types.INIT] (state, {code}) {
    state.count = code
  }
}

const getters = {
  count (state) {
    return state.count
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
