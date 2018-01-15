import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import * as actions from './actions'
import cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store ({
  modules: {
    products,
    cart
  },
  actions
})
