<template>
  <div>
    <vue-progress-bar></vue-progress-bar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish()
  },
  created () {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start()
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        // parse meta tags
        this.$Progress.parseMeta(meta)
      }
      //  start the progress bar
      this.$Progress.start()
      //  continue to next page
      next()
    })
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish()
    })
  }
}
</script>
<style>
label{
  font-size: 11px;
  font-weight: bold;  
}
.form-control-sm, .input-group-sm > .form-control,
.input-group-sm > .input-group-addon,
.input-group-sm > .input-group-btn > .btn {
  font-size: 0.78rem;
}
.btn-success{
  color: #fff;
  background-color: #62cb31;
  border-color: #62cb31;
}
.btn-primary {
    color: #fff;
    background-color: #34495e;
    border-color: #34495e;
}
.btn-primary.disabled, .btn-primary:disabled {
    background-color: #34495e;
    border-color: #34495e;
}
.btn{
  font-size: 0.875rem;
}
.fix-fecha-componente{
  background-color: #ffffff !important;
}  
.alert-td > div{
  margin-bottom: 0px;
}
.text-danger {
  color: red;
  font-size: 11px;
}
.boton-disabled {
  cursor: not-allowed;
  opacity: .65;
}
.descripcion {
  display: block;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
}
</style>
