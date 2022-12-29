<template>
  <div class="row justify-content-center">
    <h1 class="text-center mt-4 mb-4">Listado Compañías</h1>
    <Loading v-if="isLoading" />
    <div v-else class="col-md-12 table-responsive fadeIn">
      <router-link
        :to="{ name: 'companies.create' }"
        class="btn btn-success float-start mb-4"
      >
        Agregar Compañía <i class="fa-solid fa-plus"></i>
      </router-link>
      <table
        id="tabla_articulos"
        class="table table-bordered table-striped"
        style="width: 100%"
      >
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Dirección</th>
            <th>Sitio Web</th>
            <th class="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="companies.length === 0">
            <tr>
              <td colspan="5">No hay registros para mostrar</td>
            </tr>
          </template>
          <template v-else v-for="item in companies" :key="item.id">
            <tr>
              <td>{{ item.name }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.address }}</td>
              <td>
                {{ item.website }}
              </td>
              <td class="text-center">
                <router-link
                  :to="{ name: 'companies.edit', params: { id: item.id } }"
                  class="btn btn-sm btn-primary"
                >
                  <i class="fas fa-edit"></i>
                </router-link>
                &nbsp;
                <button
                  @click="deleteCompany(item.id)"
                  class="btn btn-sm btn-danger"
                >
                  <i class="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, onMounted } from "vue";
import Swal from "sweetalert2";
import useCompanies from "../composables/useCompanies";

export default {
  components: {
    Loading: defineAsyncComponent(() => import("../components/Loading.vue")),
  },
  setup() {
    const { isLoading, companies, getCompanies, destroyCompany } =
      useCompanies();

    onMounted(getCompanies);

    const deleteCompany = async (id) => {
      const { isConfirmed } = await Swal.fire({
        title: `¿Seguro desea eliminar el registro con id: ${id}?`,
        text: "¡No podrá revertir la eliminación!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar",
        allowOutsideClick: false,
        heightAuto: false,
      });

      if (isConfirmed) {
        await destroyCompany(id);
        await getCompanies();
      }
    };

    return {
      isLoading,
      companies,
      deleteCompany,
    };
  },
};
</script>

<style></style>
