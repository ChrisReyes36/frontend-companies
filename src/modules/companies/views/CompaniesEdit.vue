<template>
  <div>
    <h1 class="text-center mt-4 mb-4">Crear Compañía</h1>
    <Alert v-if="errors" :errors="errors" class="fadeIn" />
    <form class="row fadeIn" @submit.prevent="saveCompany">
      <div class="form-group mb-3 col-md-6">
        <label for="nombre"
          >Nombre <span class="text-danger"><b>(*)</b></span></label
        >
        <input
          type="text"
          name="nombre"
          id="nombre"
          class="form-control"
          autocomplete="off"
          placeholder="Ingrese el Nombre"
          v-model="company.name"
        />
      </div>
      <div class="form-group mb-3 col-md-6">
        <label for="correo"
          >Correo <span class="text-danger"><b>(*)</b></span></label
        >
        <input
          type="email"
          name="correo"
          id="correo"
          class="form-control"
          autocomplete="off"
          placeholder="Ingrese su Correo"
          v-model="company.email"
        />
      </div>
      <div class="form-group mb-3 col-md-6">
        <label for="direccion"
          >Dirección <span class="text-danger"><b>(*)</b></span></label
        >
        <textarea
          name="direccion"
          id="direccion"
          class="form-control"
          autocomplete="off"
          placeholder="Ingrese la Descripción"
          rows="5"
          v-model="company.address"
        ></textarea>
      </div>
      <div class="form-group mb-3 col-md-6">
        <label for="sitio"
          >Siotio Web <span class="text-danger"><b>(*)</b></span></label
        >
        <input
          type="text"
          name="sitio"
          id="sitio"
          class="form-control"
          autocomplete="off"
          placeholder="Ingrese el Sitio Web"
          v-model="company.website"
        />
      </div>
      <div class="form-group mb-3 col-md-6">
        <input type="submit" value="Actualizar" class="btn btn-primary me-2" />
        <router-link :to="{ name: 'companies.index' }" class="btn btn-danger"
          >Cancelar</router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
import { onMounted } from "vue";
import useCompanies from "../composables/useCompanies";
import Alert from "../components/Alert.vue";

export default {
  components: { Alert },
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    const { company, errors, getCompany, updateCompany } = useCompanies();

    onMounted(async () => {
      await getCompany(props.id);
    });

    const saveCompany = async () => {
      await updateCompany(props.id);
    };

    return {
      company,
      errors,
      saveCompany,
    };
  },
};
</script>

<style></style>
