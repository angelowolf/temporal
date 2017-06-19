<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-12">
        <router-link append :to="'nuevo'" class="btn btn-success btn-sm float-right"><i class="fa fa-plus"></i> Nuevo Municipio</router-link>
      </div>
    </div>
    <filtro-municipios @buscar="buscar" ref="filtroMunicipio"></filtro-municipios>
    <listado-municipios @eliminarMunicipio="eliminarMunicipio" :municipios="municipios"></listado-municipios>
    <b-pagination class="paginacion-derecha" :value="paginacion.numeroPagina" :total-rows="paginacion.cantidadTotal"  :per-page="paginacion.tamanioPagina" @input="cambiaPaginacion"></b-pagination>
    <b-modal id="modalConfirmarEliminar" title="Confirmación" close-title="Cancelar" ok-title="Aceptar" :hide-header-close="true" :close-on-backdrop="false" @ok="confirmarEliminarMunicipio()">
      ¿Está seguro que desea eliminar este municipio?     
    </b-modal>
  </div>
</template>
<script>
  import filtroMunicipios from './filtroMunicipios'
  import listadoMunicipios from './listadoMunicipios'
  import {vueHttp, enviarPeticion} from './../../servicioRest'
  import {getMunicipios} from './../../config'

  export default{
    name: 'municipios',
    components: {
      filtroMunicipios,
      listadoMunicipios
    },
    data () {
      return {
        filtros: {
          nombre: '',
          contacto: '',
          nroOrdenanza: '',
          compania: '',
          idPais: -1,
          idProvincia: -1,
          idDepartamento: -1,
          idLocalidad: -1,
          gestor: ''
        },
        paginacion: {
          numeroPagina: 1,
          tamanioPagina: 10,
          cantidadTotal: 0
        },
        municipios: null,
        idMunicipioEliminar: null
      }
    },
    methods: {
      eliminarMunicipio (munId) {
        this.idMunicipioEliminar = munId
        this.$root.$emit('show::modal', 'modalConfirmarEliminar')
      },
      confirmarEliminarMunicipio () {
        enviarPeticion('delete', `${getMunicipios}${this.idMunicipioEliminar}`, null)
      },
      cambiaPaginacion (pagina) {
        this.paginacion.numeroPagina = pagina
        this.buscar(null)
      },
      buscar (filtro) {
        console.log(this.$refs.filtroMunicipio)
        this.$refs.filtroMunicipio.toogleBuscar()
        if (filtro !== null) {
          this.filtros = filtro
        }
        vueHttp('get', `${getMunicipios}?nombre=${this.filtros.nombre}&gestor=${this.filtros.gestor}&contacto=${this.filtros.contacto}&nroOrdenanza=${this.filtros.nroOrdenanza}&compania=${this.filtros.compania}&idPais=${this.filtros.idPais}&idProvincia=${this.filtros.idProvincia}&idDepartamento=${this.filtros.idDepartamento}&idLocalidad=${this.filtros.idLocalidad}&tamanioPagina=${this.paginacion.tamanioPagina}&numeroPagina=${this.paginacion.numeroPagina}`, response => {
          this.paginacion.cantidadTotal = response.data.cantidadTotal
          this.municipios = response.data.contenidoPagina
          this.$refs.filtroMunicipio.toogleBuscar()
        })
      }
    },
    mounted () {
      this.buscar(null)
    }
  }
</script>
