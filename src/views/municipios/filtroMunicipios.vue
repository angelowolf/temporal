<template>
  <div class="row">    
    <div class="col-12 m-t-15">
      <div class="card">
        <div class="card-header">
          Filtros
        </div>
        <div class="card-block" @keyup.enter="buscar">
          <div class="row">
            <div class="col-12">
              <div class="row">
                <div class="col-md-3">
                  <label style="margin-bottom: 0px;">Nombre</label>
                  <p class="input-group input-group-sm" style="width: 100%;">
                    <input v-model="filtros.nombre" type="text" class="form-control" placeholder="Nombre..." />
                  </p>
                </div>
                <div class="col-md-3">
                  <label style="margin-bottom: 0px;">Contacto</label>
                  <p class="input-group input-group-sm" style="width: 100%;">
                    <input v-model="filtros.contacto" type="text" class="form-control" placeholder="Contacto..." />
                  </p>
                </div>
                <div class="col-md-3">
                  <label style="margin-bottom: 0px;">Nro Ordenanza</label>
                  <p class="input-group input-group-sm" style="width: 100%;">
                    <input v-model="filtros.nroOrdenanza" type="number" min="0" max="999999" class="form-control" placeholder="Nro Ordenanza..."
                    />
                  </p>
                </div>
                <div class="col-md-3">
                  <label style="margin-bottom: 0px;">Compañía</label>
                  <p class="input-group input-group-sm" style="width: 100%;">
                    <input v-model="filtros.compania" type="text" class="form-control" placeholder="Compañía..." />
                  </p>
                </div>    
              </div>

              <select-ubicaccion :esFiltro="true" classSelect="col-md-3 col-sm-12"
              @paisSeleccionado="paisSeleccionado"
              @provinciaSeleccionada="provinciaSeleccionada"
              @departamentoSeleccionado="departamentoSeleccionado"
              @localidadSeleccionada="localidadSeleccionada">

            </select-ubicaccion>
            <div class="row">
              <div class="col-md-3">
                <label style="margin-bottom: 0px;">Gestor Asignado</label>
                <p class="input-group input-group-sm" style="width: 100%;">
                  <input v-model="filtros.gestor" type="text" class="form-control" placeholder="Gestor Asignado..."
                  />
                </p>
              </div>


              <div class="col-md-3">
                  <label style="margin-bottom: 0px;">FECHA</label>
                  <p class="input-group input-group-sm" style="width: 100%;">
                  <fecha :options="op" style="width: 100%;"></fecha>
                  </p>
                </div>


                
              <div class="col-6 text-right">
                <label style="margin-bottom: 0px;"></label>
                <p class="input-group input-group-sm" style="width: 100%;">
                <boton-buscar  @click="buscar" ref="botonBuscar" labelCarga="Buscando"></boton-buscar>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>

  export default {
    name: 'filtroMunicipios',
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
        op: {}
      }
    },
    methods: {
      buscar () {
        this.$emit('buscar', this.filtros)
      },
      paisSeleccionado (id) {
        this.filtros.idPais = id
      },
      provinciaSeleccionada (id) {
        this.filtros.idProvincia = id
      },
      departamentoSeleccionado (id) {
        this.filtros.idDepartamento = id
      },
      localidadSeleccionada (id) {
        this.filtros.idLocalidad = id
      },
      toogleBuscar () {
        this.$refs.botonBuscar.toggleState()
      }
    }
  }
</script>
