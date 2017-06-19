<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-12">
        <boton-guardar clase="pull-right m-xs" size="" @click="guardar()"></boton-guardar>
        <router-link exact :to="'/municipios'" class="btn btn-secondary pull-right m-xs">Cancelar</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">Datos Generales</div>
          <div class="card-block" @keydown="form.errors.clear($event.target.name)" @change="form.errors.clear($event.target.name)">
            <div class="row">
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group" v-error="{ form: form, campo: 'munNombre' }">
                      <label for="munNombreInput">Nombre *</label>
                      <input maxlength="250" class="form-control form-control-sm" type="text" id="munNombreInput" name="munNombre" v-model="form.munNombre"/>
                      <form-help nombre="munNombre" :form="form"/>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group" v-error="{ form: form, campo: 'munDomicilio' }">
                      <label for="munDomicilioInput">Domicilio *</label>
                      <input maxlength="250" class="form-control form-control-sm" type="text"
                      id="munDomicilioInput" name="munDomicilio" v-model="form.munDomicilio"/>
                      <form-help nombre="munDomicilio" :form="form"/>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group" v-error="{ form: form, campo: 'munSectorContacto' }">
                      <label for="munSectorContactoInput">Contacto *</label>
                      <input maxlength="250" class="form-control form-control-sm" type="text"
                      id="munSectorContactoInput" name="munSectorContacto" v-model="form.munSectorContacto"/>
                      <form-help nombre="munSectorContacto" :form="form"/>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group" v-error="{ form: form, campo: 'munTelefonoContacto' }">
                      <label for="munTelefonoContacto">Teléfono Contacto *</label>
                      <input maxlength="50" class="form-control form-control-sm" type="text"
                      id="munTelefonoContacto" name="munTelefonoContacto" v-model="form.munTelefonoContacto"/>
                      <form-help nombre="munTelefonoContacto" :form="form"/>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group" v-error="{ form: form, campo: 'munEmail' }">
                      <label for="munEmail">E-mail *</label>
                      <input maxlength="50" class="form-control form-control-sm" type="text"
                      id="munEmail" name="munEmail" v-model="form.munEmail"/>
                      <form-help nombre="munEmail" :form="form"/>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="munCantSitiosConvenioRegularizacionInput">Cantidad Sitios Municipio</label>
                      <span class="descripcion">{{cantidadSitiosMunicipio}}</span>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="munCantSitiosConvenioRegularizacion">Cantidad Sitios Regularizados</label>
                      <span class="descripcion"></span>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group" v-error="{ form: form, campo: 'munCompania' }">
                      <label for="munCompaniaInput">Compañía *</label>
                      <select class="form-control form-control-sm" id="munCompaniaInput"
                      name="munCompania" v-model="form.munCompania">
                        <option value="null" disabled="true">Seleccione...</option>
                        <option :value="parametro.parValue" v-for="parametro in getParametrosCompania">{{parametro.parDescription}}</option>
                      </select>
                      <form-help nombre="munCompania" :form="form"/>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="munGestorAsignadoInput">Gestor Asignado</label>
                      <input maxlength="250" class="form-control form-control-sm" type="text"
                      id="munGestorAsignadoInput" name="munGestorAsignado" v-model="form.munGestorAsignado"/>
                    </div>
                  </div>
                </div>
              </div>                            
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">Localidades</div>
          <div class="card-block">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-5">
                  <select-ubicaccion :esFiltro="false" classSelect="col-md-12"  @localidadSeleccionada="localidadSeleccionada">
                  </select-ubicaccion>
                  <div class="col-md-12 text-right">
                    <boton :disabled="localidadSelect == null" label="Agregar" type="primary" clase="m-xs float-right" size="" @click="agregarLocalidad()"></boton>
                  </div>
                </div>
                <div class="col-md-7 p-l-xs p-r-xs">
                  <div class="col-12 p-l-xs p-r-xs">
                    <table class="table table-slim m-b-none" cellpadding="1" cellspacing="1">
                      <thead>
                        <tr>
                          <th class="text-center" style="">Localidades</th>
                          <th class="text-center" style="">Cantidad Sitios</th>
                          <th class="text-center" style=""></th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr class="animated fadeIn"><td colspan="3" class="text-center alert-td" style="vertical-align: middle;"><b-alert class="p-0" :show="form.localidadeses == null || form.localidadeses.length < 1">----</b-alert></td></tr>
                        <tr v-for="localidad in form.localidadeses">
                          <td>{{localidad.locNombre}}</td>
                          <td>{{cantidadSitios(localidad.sitioses)}}</td>
                          <td style="width: 14px;">
                            <boton-eliminar @click="removerLocalidad(localidad)"></boton-eliminar>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <boton-guardar clase="pull-right m-xs" size="" @click="guardar()"></boton-guardar>
        <router-link exact :to="'/municipios'" class="btn btn-secondary pull-right m-xs">Cancelar</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import {vueHttp, enviarPeticion} from './../../servicioRest'
  import {getMunicipios} from './../../config'
  import Form from './../../util/Form'
  import router from './../../router/index'

  export default{
    name: 'MunicipioNuevo',
    computed: {
      ...mapGetters([
        'getParametrosCompania'
      ]),
      cantidadSitiosMunicipio () {
        let cantidad = 0
        if (this.form.localidadeses == null) {
          return 0
        } else {
          this.form.localidadeses.map(loc => {
            cantidad += loc.sitioses.length
          })
        }
        return cantidad
      }
    },
    methods: {
      removerLocalidad (localidad) {
        let localidadBusqueda = this.form.localidadeses.find(loc => {
          return loc.locCodigo === localidad.locCodigo
        })
        let index = this.form.localidadeses.indexOf(localidadBusqueda)
        this.form.localidadeses.splice(index, 1)
      },
      localidadSeleccionada (id) {
        this.localidadSelect = id
      },
      cantidadSitios (sitios) {
        if (sitios == null) {
          return '-'
        } else {
          return sitios.length
        }
      },
      guardar () {
        let accionHttp = this.modoEditar ? 'put' : 'post'
        let url = this.modoEditar ? `${getMunicipios}${this.$route.params.munId}` : `${getMunicipios}`
        this.submit = true
        enviarPeticion(accionHttp, url, this.form.data(), response => {
          router.push('/municipios')
          console.log(response.data)
        }, validacion => {
          this.form.errors.record(validacion.data.listaValidaciones)
          console.log(validacion.data.listaValidaciones)
        })
      },
      agregarLocalidad () {
        vueHttp('get', `${getMunicipios}0/localidadDisponible/${this.localidadSelect}`, response => {
          if (response.data !== null) {
            let localidadBusqueda = this.form.localidadeses.find(loc => {
              return loc.locCodigo === response.data.locCodigo
            })
            if (localidadBusqueda === undefined || localidadBusqueda === null) {
              this.form.localidadeses.push(response.data)
            } else {
              console.log('TODO MENSAJE ', localidadBusqueda)
            }
          } else {
            console.log('todo mensaje ')
          }
        })
      }
    },
    data () {
      return {
        form: new Form({
          munNombre: null,
          munDomicilio: null,
          munSectorContacto: null,
          munTelefonoContacto: null,
          munEmail: null,
          munCompania: null,
          munGestorAsignado: null,
          localidadeses: []
        }),
        localidadSelect: null,
        modoEditar: false,
        submit: false
      }
    },
    created () {
      console.log(this.$route.params.munId)
      if (this.$route.params.munId !== undefined) {
        this.modoEditar = true
        vueHttp('get', `${getMunicipios}${this.$route.params.munId}`, response => {
          this.form = new Form(response.data)
          if (this.form.localidadeses == null) {
            this.form.localidadeses = []
          }
        })
      }
    }
  }
</script>
