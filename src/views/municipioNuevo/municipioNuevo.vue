<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-12">
        <boton-guardar clase="pull-right m-xs" size=""></boton-guardar>
        <router-link exact :to="'/municipios'" class="btn btn-secondary pull-right m-xs">Cancelar</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header bg-info">Datos Generales</div>
          <div class="card-block">
            <div class="row">
              <div class="col-md-8">
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="munNombreInput">Nombre *</label>
                      <input class="form-control " type="text"
                      id="munNombreInput" name="munNombre" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="munDomicilioInput">Domicilio</label>
                      <input class="form-control form-control-sm" type="text"
                      id="munDomicilioInput" name="munDomicilio" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="munSectorContactoInput">Contacto</label>
                      <input class="form-control form-control-sm" type="text"
                      id="munSectorContactoInput" name="munSectorContacto" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="munTelefonoContactoInput">Teléfono Contacto</label>
                      <input class="form-control form-control-sm" type="text"
                      id="munTelefonoContactoInput" name="munTelefonoContactoInput" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="email">E-mail</label>
                      <input class="form-control form-control-sm" type="text"
                      id="email" name="email" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="munCantSitiosConvenioRegularizacionInput">Cantidad Sitios Municipio</label>
                      <input class="form-control form-control-sm"
                      type="number" id="munCantSitiosConvenioRegularizacionInput" name="munCantSitiosConvenioRegularizacion"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="munCantSitiosConvenioRegularizacion">Cantidad Sitios Regularizados</label>
                      <input class="form-control form-control-sm"
                      type="number" id="munCantSitiosConvenioRegularizacion" name="munCantSitios"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="munCompaniaInput">Compañía</label>
                      <select class="form-control form-control-sm" id="munCompaniaInput"
                      name="munCompania"></select>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="munGestorAsignadoInput">Gestor Asignado</label>
                      <input class="form-control form-control-sm" type="text"
                      id="munGestorAsignadoInput" name="munGestorAsignado" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 border-left">
                <div class="row">
                  <div class="col-md-7">
                    <select-ubicaccion :esFiltro="false" classSelect="col-md-12"  @localidadSeleccionada="localidadSeleccionada">
                    </select-ubicaccion>
                    <div class="col-md-12 text-right">
                      <boton label="Agregar" type="primary" clase="m-xs float-right" size=""></boton>
                    </div>
                  </div>
                  <div class="col-md-5 p-l-xs p-r-xs">
                    <div class="col-12 p-l-xs p-r-xs">
                      <table class="table table-slim m-b-none" cellpadding="1" cellspacing="1">
                        <thead>
                          <tr>
                            <th class="text-center" style="">Localidades</th>
                            <th class="text-center" style=""></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Córdoba</td>
                            <td style="width: 14px;">
                              <boton-eliminar></boton-eliminar>                              
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
    </div>
  </div>
</template>
<script>
  export default{
    name: 'MunicipioNuevo',
    methods: {
      localidadSeleccionada (id) {
        console.log(id)
      }
    }
  }
</script>
