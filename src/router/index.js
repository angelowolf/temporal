import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'
import Municipio from '@/views/municipios/municipios'
import MunicipioNuevo from '@/views/municipioNuevo/municipioNuevo'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Full,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'municipios',
          name: 'Municipios',
          component: Municipio
        },
        {
          path: '/municipios/nuevo',
          name: 'Nuevo Municipio',
          component: MunicipioNuevo
        },
        {
          path: '/municipios/editar/:munId',
          name: 'Editar Municipio',
          component: MunicipioNuevo
        }
      ]
    }
  ]
})
