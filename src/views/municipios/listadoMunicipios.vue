<template>
  <div class="row m-t-15">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-header bg-primary">Municipios</div>
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
              <th class="text-center" style="">Departamento</th>
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
            <tr>
              <td class="text-center" style="vertical-align: middle;">1</td>
              <td class="text-center" style="vertical-align: middle;">La Matanza - Buenos Aires</td>
              <td class="text-center" style="vertical-align: middle;">name@email.com</td>
              <td class="text-center" style="vertical-align: middle;">ARGENTINA</td>
              <td class="text-center" style="vertical-align: middle;">Buenos Aires</td>
              <td class="text-center" style="vertical-align: middle;"></td>
              <td class="text-center" style="vertical-align: middle;"></td>
              <td class="text-center" style="vertical-align: middle;">Gestor Inicial</td>
              <td class="text-center" style="vertical-align: middle;"></td>
              <td class="text-center" style="vertical-align: middle;">1</td>
              <td class="text-center" style="vertical-align: middle;"></td>
              <th class="text-center" style="width: 14px;">
                <button class="btn btn-primary btn-xs"><i class="glyphicon glyphicon-edit"></i>
                </button>
              </th>
              <th class="text-center" style="width: 14px;">
                <button class="btn btn-danger btn-xs" @click="$emit('eliminarMunicipio')"><i class="glyphicon glyphicon-trash"></i>
                </button>
              </th>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
    <b-pagination class="paginacion-derecha" :total-rows="100"  :per-page="10"></b-pagination>
  </div>
</div>
</template>
<script>
export default {
  name: 'listadoMunicipios'
}
</script>
