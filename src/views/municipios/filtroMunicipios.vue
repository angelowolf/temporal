<template>
  <div class="row">    
    <div class="col-12 m-t-15">
      <div class="card">
        <div class="card-header bg-primary">Filtros</div>
        <div class="card-block">
          <div class="row">
            <div class="col-md-3">
              <label style="margin-bottom: 0px;">Nombre</label>
              <p class="input-group input-group-sm" style="width: 100%;">
                <input type="text" class="form-control" placeholder="Nombre..." />
              </p>
            </div>
            <div class="col-md-3">
              <label style="margin-bottom: 0px;">Contacto</label>
              <p class="input-group input-group-sm" style="width: 100%;">
                <input type="text" class="form-control" placeholder="Contacto..." />
              </p>
            </div>
            <div class="col-md-3">
              <label style="margin-bottom: 0px;">Nro Ordenanza</label>
              <p class="input-group input-group-sm" style="width: 100%;">
                <input type="text" class="form-control" placeholder="Nro Ordenanza..."
                />
              </p>
            </div>
            <div class="col-md-3">
              <label style="margin-bottom: 0px;">Compañía</label>
              <p class="input-group input-group-sm" style="width: 100%;">
                <input type="text" class="form-control" placeholder="Compañía..." />
              </p>
            </div>
            <div class="col-md-3">
              <label style="margin-bottom: 0px;">País</label>
              <p class="input-group input-group-sm" style="width: 100%;">
                <select class="form-control form-control-sm" name="pais">
                  <option>Todas</option>
                  <option>Argentina</option>
                  <option>Uruguay</option>
                  <option>Paraguay</option>
                </select>
              </p>
            </div>
            <div class="col-md-3">
              <label style="margin-bottom: 0px;">Provincia</label>
              <p class="input-group input-group-sm" style="width: 100%;">
                <select class="form-control form-control-sm" name="provincia">
                  <option>Todas</option>
                  <option>Buenos Aires</option>
                  <option>Catamarca</option>
                  <option>Córdoba</option>
                  <option>Entre Ríos</option>
                  <option>Formosa</option>
                  <option>Jujuy</option>
                  <option>Misiones</option>
                  <option>Salta</option>
                  <option>Santa Cruz</option>
                  <option>Tierra del Fuego</option>
                  <option>Tucumán</option>
                </select>
              </p>
            </div>
            <div class="col-md-3">
              <label style="margin-bottom: 0px;">Departamento</label>
              <p class="input-group input-group-sm" style="width: 100%;">
                <select class="form-control form-control-sm" name="Departamento">
                  <option>Todas</option>
                  <option>Principal</option>
                </select>
              </p>
            </div>
            <div class="col-md-3">
              <label style="margin-bottom: 0px;">Localidad</label>
              <p class="input-group input-group-sm" style="width: 100%;">
                <select class="form-control form-control-sm" name="Localidad">
                  <option>Todas</option>
                  <option>Capital</option>
                </select>
              </p>
            </div>
            <div class="col-md-3">
              <label style="margin-bottom: 0px;">Gestor Asignado</label>
              <p class="input-group input-group-sm" style="width: 100%;">
                <input type="text" class="form-control" placeholder="Gestor Asignado..."
                />
              </p>
            </div>
            <div class="col-6 text-right">
              <label style="margin-bottom: 0px;"></label>
              <p class="input-group input-group-sm" style="width: 100%;">
                <button class="btn btn-primary btn-sm" ladda="buscando" type="button"><i class="fa fa-search"></i> Buscar</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'filtroMunicipios'
}
</script>
