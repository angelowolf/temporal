<template>
  <div class="row m-t-15">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-header">Municipios</div>
        <div class="card-block p-none">
          <table class="table table-slim table-hover table-striped m-b-none" cellpadding="1"
          cellspacing="1">
          <thead>
            <tr class="text-uppercase">
              <th class="text-center" style="">ID</th>
              <th class="text-center" style="">Nombre</th>
              <th class="text-center" style="">Contacto</th>
              <th class="text-center" style="">País</th>
              <th class="text-center" style="">Provincia</th>
              <th class="text-center" style="">Localidad</th>
              <th class="text-center" style="">Gestor Asignado</th>
              <th class="text-center" style="">Nro Ordenanza</th>
              <th class="text-center" style="width: 10px;">Cant. Sitios en Mun</th>
              <th class="text-center" style="width: 18px;">Cant. Sitios Regularizados</th>
              <th class="text-center" style="width: 14px;"></th>
              <th class="text-center" style="width: 14px;"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="animated fadeIn" v-show="(municipios == null || municipios.length < 1)"><td colspan="13" class="text-center alert-td" style="vertical-align: middle;"><b-alert :show="true">No se encontraton datos</b-alert></td></tr>
            <tr class="animated fadeIn" v-show="municipios != null && municipios.length > 0" v-for="municipio in municipios">
              <td class="text-center" style="vertical-align: middle;">{{municipio.munId}}</td>
              <td class="text-center" style="vertical-align: middle;">{{municipio.munNombre}}</td>
              <td class="text-center" style="vertical-align: middle;">{{municipio.munEmail}}</td>
              <td class="text-center" style="vertical-align: middle;">{{municipio.localidadeses[0].departamentos.provincias.paises.paiNombre}}</td>
              <td class="text-center" style="vertical-align: middle;">{{municipio.localidadeses[0].departamentos.provincias.prvNombre}}</td>
              <td class="text-center" style="vertical-align: middle;">{{listarLocalidades(municipio.localidadeses)}}</td>
              <td class="text-center" style="vertical-align: middle;">{{municipio.munGestorAsignado}}</td>
              <td class="text-center" style="vertical-align: middle;">nroOrdenanza</td>
              <td class="text-center" style="vertical-align: middle;">{{cantidadSitiosMunicipio(municipio.localidadeses)}}</td>
              <td class="text-center" style="vertical-align: middle;">cntSitiosRegularizados</td>
              <td class="text-center" style="width: 14px;">
                <boton-editar @click="editar(municipio.munId)"></boton-editar>
              </td>
              <td class="text-center" style="width: 14px;">
                <boton-eliminar @click="$emit('eliminarMunicipio', municipio.munId)"></boton-eliminar>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  </div>
</div>
</template>
<script>
import router from './../../router/index'

export default {
  name: 'listadoMunicipios',
  props: {
    municipios: {
      required: true
    }
  },
  methods: {
    cantidadSitiosMunicipio (localidades) {
      console.log(localidades)
      let cantidad = 0
      if (localidades == null) {
        return 0
      } else {
        localidades.map(loc => {
          if (loc.sitioses != null) {
            cantidad += loc.sitioses.length
          }
        })
      }
      return cantidad
    },
    editar (munId) {
      router.push({name: 'Editar Municipio', params: {munId: munId}})
    },
    listarLocalidades (localidades) {
      if (localidades && localidades !== null) {
        let res = ''
        localidades.map(l => {
          res += l.locNombre + ','
        })
        if (res !== '') {
          res = res.slice(0, -1)
        }
        return res
      }
    }
  }
}
</script>
