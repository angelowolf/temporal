<template>
  <div class="app">
      <main class="main m-t-15">
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
  </div>
</template>

<script>
import AppHeader from '../components/Header'
import Sidebar from '../components/Sidebar'
import AppFooter from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import { mapActions } from 'vuex'

export default {
  name: 'full',
  components: {
    AppHeader,
    Sidebar,
    AppFooter,
    Breadcrumb
  },
  methods: {
    ...mapActions([
      'cargarParametros',
      'cargarPaises'
    ])
  },
  computed: {
    name () {
      return this.$route.name
    },

    list () {
      return this.$route.matched
    }
  },
  created () {
    this.cargarPaises()
    this.cargarParametros()
  }
}
</script>
