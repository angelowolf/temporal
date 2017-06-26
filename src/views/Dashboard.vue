<template>
  <div class="animated fadeIn">
  <hello></hello>
  <div class="row">
    <div class="col-md-4">
      <label style="margin-bottom: 0px;">Compania</label>
      <p class="input-group input-group-sm" style="width: 100%;">
        <select 
        class="form-control form-control-sm" 
        name="paraMetro" 
        v-model="paraMetroSelect">
          <option value="null" disabled="true">Seleccione...</option>
          <option :value="paraMetro.parValue" v-for="paraMetro in getParametrosCompania">{{paraMetro.parDescription}}</option>
        </select>
      </p>
    </div>
  </div>
    Select seleccionado:
    {{paraMetroSelect}}
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  
  export default {
    name: 'dashboard',
    computed: {
      ...mapGetters([
        'getParametrosCompania'
      ])
    },
    data () {
      return {
        paraMetroSelect: null
      }
    }
  }
</script>
