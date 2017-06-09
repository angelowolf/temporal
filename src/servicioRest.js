import axios from 'axios'
import {crearNotificacionError} from './components/util/notificaciones'
export function vueHttp (tipo, url, callback, postData) {
  let metodo = tipo.toLowerCase()
  if (['get', 'post', 'put', 'options', 'update', 'delete'].indexOf(metodo) >= 0) {
    if (postData === undefined) {
      axios[metodo](url).then(response => {
        callback(response)
      }, response => {
        crearNotificacionError('Error al contactar con la api')
      })
    } else {
      axios[metodo](url, postData).then(response => {
        callback(response)
      }, response => {
        crearNotificacionError('Error al contactar con la api')
      })
    }
  } else {
    console.log('Método inválido')
  }
}
