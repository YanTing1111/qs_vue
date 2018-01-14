import shop from '../../api/shop'
import * as types from '../mutation-types'
const state = {
  all:[]
}

const mutations = {
    [types.RECEIVE_PRODUCTS] (state,{products}) {
      state.all = products
    },
    [types.ADD_TO_CART] (state,{id}) {
      state.all.find(product => product.id == id).inventory--
    }
}

const actions = {
  getAllProducts ({commit}) {
    shop.getProducts(products => {
      commit(types.RECEIVE_PRODUCTS,{products})
    })
  }
}

const getters = {
  allProducts:state => state.all
}

export default {
  state,
  mutations,
  actions,
  getters
}
