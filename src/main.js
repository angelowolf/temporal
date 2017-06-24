// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import Axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import Toast from 'vue-easy-toast'
import Datepicker from './components/util/datepicker'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Toast)
Vue.component('fecha', Datepicker)

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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
