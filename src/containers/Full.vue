<template>
  <div class="app">
    <AppHeader/>
    <div class="app-body">
      <Sidebar/>
      <main class="main">
        <breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
    </div>
    <AppFooter/>
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
      'cargarParametros'
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
    this.cargarParametros()
  }
}
</script>
