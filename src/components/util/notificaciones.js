import Vue from 'vue'

export function crearNotificacionError (mensaje) {
  Vue.toast(mensaje, {horizontalPosition: 'right', verticalPosition: 'bottom', duration: 5000, className: 'et-alert'})
}
export function crearNotificacionExito (mensaje) {
  Vue.toast(mensaje, {horizontalPosition: 'right', verticalPosition: 'bottom', duration: 5000, className: 'et-info'})
}
export function crearNotificacionValidacion (mensaje) {
  Vue.toast(mensaje, {horizontalPosition: 'right', verticalPosition: 'bottom', duration: 5000, className: 'et-warn'})
}
