import Vue from 'vue'
import axios from 'axios'
import Router from './router'
import {crearNotificacionError, crearNotificacionExito} from './components/util/notificaciones'

export function vueHttp (tipo, url, callback, postData) {
  Vue.prototype.$Progress.start()
  let metodo = tipo.toLowerCase()
  if (['get', 'post', 'put', 'options', 'update', 'delete'].indexOf(metodo) >= 0) {
    if (postData === undefined) {
      axios[metodo](url).then(response => {
        callback(response)
        // todo headers mensaje
        if (response.data.mensaje !== undefined && response.data.mensaje !== null) {
          crearNotificacionExito(response.data.mensaje)
        }
        Vue.prototype.$Progress.finish()
      }, response => {
        crearNotificacionError('Error al contactar con la api')
        Vue.prototype.$Progress.fail()
      })
    } else {
      axios[metodo](url, postData).then(response => {
        callback(response)
        if (response.data.mensaje !== undefined && response.data.mensaje !== null) {
          crearNotificacionExito(response.data.mensaje)
        }
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

export function enviarPeticion (tipo, url, postData, onSuccess, onError) {
  let metodo = tipo.toLowerCase()
  if (['post', 'put', 'update', 'delete'].indexOf(metodo) >= 0) {
    Vue.prototype.$Progress.start()
    axios[metodo](url, postData).then(response => {
      const codigo = parseInt(response.status)
      if (codigo === 200) {
        Vue.prototype.$Progress.finish()
        if (onSuccess) {
          onSuccess(response)
        }
        crearNotificacionExito(response.data.mensaje)
      } else if (codigo === 220) {
        Vue.prototype.$Progress.finish()
        crearNotificacionExito(response.data.mensaje)
        if (onError) {
          onError(response)
        }
      } else {
        crearNotificacionError('Error al contactar con la api')
        Vue.prototype.$Progress.fail()
      }
    }, response => {
      Vue.prototype.$Progress.fail()
      if (response.satus === 401) {
        Router.push('/login')
      } else {
        crearNotificacionError('Error al contactar con la api')
      }
    })
  } else {
    console.log('Método inválido')
  }
}
