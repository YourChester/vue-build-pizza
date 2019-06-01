import Vue from 'vue'
import Vuex from 'vuex'
import ingredients from '@/store/modules/ingredients'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
      ingredients,
    }
})
