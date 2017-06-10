<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-12">
        <router-link append :to="'nuevo'" class="btn btn-success btn-sm float-right"><i class="fa fa-plus"></i> Nuevo Municipio</router-link>
      </div>
    </div>
    <filtro-municipios></filtro-municipios>
    <listado-municipios @eliminarMunicipio="eliminarMunicipio()"></listado-municipios>
    <b-modal id="modalConfirmarEliminar" title="Confirmación" close-title="Cancelar" ok-title="Aceptar" :hide-header-close="true" :close-on-backdrop="false" @ok="confirmarEliminarMunicipio()">
      ¿Está seguro que desea eliminar este municipio?     
     </b-modal>
  </div>
</template>
<script>
  import filtroMunicipios from './filtroMunicipios'
  import listadoMunicipios from './listadoMunicipios'

  export default{
    name: 'municipios',
    components: {
      filtroMunicipios,
      listadoMunicipios
    },
    methods: {
      eliminarMunicipio () {
        this.$root.$emit('show::modal', 'modalConfirmarEliminar')
      },
      confirmarEliminarMunicipio () {
      }
    },
    created () {
      console.log('hola negro')
    }
  }
</script>
