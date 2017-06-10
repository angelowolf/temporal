import {vueHttp} from './../../servicioRest'
import {getParametros} from './../../config'

const state = {
  parametros: {
  }
}

const mutations = {
  SET_PARAMETROS (state, parametro) {
    state.parametro = parametro
  }
}

const actions = {
  cargarParametros: ({commit}) => {
    vueHttp('get', getParametros, response => {
      commit('SET_PARAMETROS', response.data.datos)
    })
  }
}

const getters = {
  getParametrosTodos (state) {
    return state.parametros
  }
}

export default {
  state, mutations, actions, getters
}
