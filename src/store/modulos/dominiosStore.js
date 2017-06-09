import {vueHttp} from './../../servicioRest'
import {getDominios} from './../../config'

const state = {
  dominios: {
  }
}

const mutations = {
  SET_DOMINIOS (state, dominio) {
    state.dominio = dominio
  }
}

const actions = {
  cargarDominios: ({commit}) => {
    vueHttp('get', getDominios, response => {
      commit('SET_DOMINIOS', response.data.datos)
    })
  }
}

const getters = {
  getDominiosTodos (state) {
    return state.dominios
  }
}

export default {
  state, mutations, actions, getters
}
