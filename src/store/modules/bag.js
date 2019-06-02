export default {
  namespaced: true,
  state: {
    price: 70,
  },
  getters: {
    price(state) {
      return state.price
    }
  },
  mutations: {
    minusPrice(state, payload) {
      state.price -= payload.num
    },
    plusPrice(state, payload) {
      state.price += payload.num
    }
  },
  actions: {
    minusPrice(store, payload) {
      store.commit('minusPrice', payload)
    },
    plusPrice(store, payload) {
      store.commit('plusPrice', payload)
    }
  }
}