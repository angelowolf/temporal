import Vue from 'vue'

export function crearNotificacionError (mensaje) {
  Vue.toast(mensaje, {horizontalPosition: 'center', verticalPosition: 'bottom', className: 'et-alert'})
}
export function crearNotificacionExito (mensaje) {
  Vue.toast(mensaje, {horizontalPosition: 'center', verticalPosition: 'bottom', className: 'et-info'})
}
export function crearNotificacionValidacion (mensaje) {
  Vue.toast(mensaje, {horizontalPosition: 'center', verticalPosition: 'bottom', className: 'et-warn'})
}
