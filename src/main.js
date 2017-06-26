// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import Axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import Toast from 'vue-easy-toast'
import VueProgressBar from 'vue-progressbar'
import VeeValidate, { Validator } from 'vee-validate'
import SelectUbicaccion from './components/util/selectUbicaccion'
import es from './../static/es'
import Componentes from 'componentes-vue'
// CSS
import 'flatpickr/dist/themes/material_blue.css'
import 'componentes-vue/dist/componentes-vue.min.css'
import './../static/css/font-awesome.min.css'
import './../static/css/glyphicons.css'
import './../static/css/bootstrap-4.css'
import './../static/css/bootstrap-vue.css'
import './../static/css/custom.css'

Vue.config.productionTip = false

Vue.use(Componentes)
Vue.use(BootstrapVue)
Vue.use(Toast)
Validator.addLocale(es)
Vue.use(VeeValidate, {
  locale: 'es'
})

// PROGRESA BAR
const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}
Vue.use(VueProgressBar, options)

Vue.prototype.$http = Axios

Axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers['Accept'] = 'application/json'
  config.headers['Content-Type'] = 'application/json'
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

Vue.component('selectUbicaccion', SelectUbicaccion)

/* DIRECTIVAS */

Vue.directive('error', (el, binding) => {
  if (binding.value.form !== undefined) {
    if (binding.value.form.errors.has(binding.value.campo)) {
      el.className += el.className.indexOf('has-danger') < 0 ? ' has-danger' : ''
    } else {
      el.className = el.className.replace('has-danger', '')
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
