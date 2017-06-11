import Vue from 'vue'
import axios from 'axios'
import {crearNotificacionError} from './components/util/notificaciones'
export function vueHttp (tipo, url, callback, postData) {
  Vue.prototype.$Progress.start()
  let metodo = tipo.toLowerCase()
  if (['get', 'post', 'put', 'options', 'update', 'delete'].indexOf(metodo) >= 0) {
    if (postData === undefined) {
      axios[metodo](url).then(response => {
        callback(response)
        Vue.prototype.$Progress.finish()
      }, response => {
        crearNotificacionError('Error al contactar con la api')
        Vue.prototype.$Progress.fail()
      })
    } else {
      axios[metodo](url, postData).then(response => {
        callback(response)
        Vue.prototype.$Progress.finish()
      }, response => {
        crearNotificacionError('Error al contactar con la api')
        Vue.prototype.$Progress.fail()
      })
    }
  } else {
    console.log('Método inválido')
  }
}
