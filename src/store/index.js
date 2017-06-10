import Vue from 'vue'
import Vuex from 'vuex'
import parametros from './modulos/parametrosStore'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,  // process.env.NODE_ENV !== 'development',
  modules: {
    parametros
  }
})
export default store
