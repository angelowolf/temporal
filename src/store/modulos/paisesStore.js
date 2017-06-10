import {vueHttp} from './../../servicioRest'
import {getPaises} from './../../config'

const state = {
  paises: {
  }
}

const mutations = {
  SET_PAISES (state, paises) {
    state.paises = paises
  }
}

const actions = {
  cargarPaises: ({commit}) => {
    vueHttp('get', getPaises, response => {
      commit('SET_PAISES', response.data.datos)
    })
  }
}

const getters = {
  getPaisesTodos (state) {
    return state.paises
  }
}

export default {
  state, mutations, actions, getters
}
