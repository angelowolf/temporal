import Vue from 'vue'
import Vuex from 'vuex'
import dominio from './modulos/dominiosStore'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,  // process.env.NODE_ENV !== 'development',
  modules: {
    dominio
  }
})
export default store
