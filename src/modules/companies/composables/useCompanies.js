import { ref } from "vue";
import { useRouter } from "vue-router";
import apiConfig from "@/api/apiConfig";
import { customAlert } from "@/services/sweetAlertCustom";

const useCompanies = () => {
  const companies = ref([]);
  const company = ref([]);
  const isLoading = ref(true);
  const errors = ref("");
  const router = useRouter();

  const getCompanies = async () => {
    isLoading.value = true;
    const { data } = await apiConfig.get("/companies");
    isLoading.value = false;
    companies.value = data.data;
  };

  const storeCompany = async (form) => {
    errors.value = "";
    try {
      const { data } = await apiConfig.post("/companies", form);
      if (data) {
        await router.push({ name: "companies.index" });
        return customAlert(
          "¡Éxito!",
          "¡Compañía creada correctamente!",
          "success"
        );
      } else {
        return customAlert("¡Error!", "¡Ha ocurrido un error!", "error");
      }
    } catch (e) {
      if (e.response.status === 400) {
        for (const key in e.response.data.errors) {
          errors.value += e.response.data.errors[key][0] + " ";
        }
      }
    }
  };

  const getCompany = async (id) => {
    const { data } = await apiConfig.get(`/companies/${id}`);
    isLoading.value = false;
    company.value = data.data;
  };

  const updateCompany = async (id) => {
    errors.value = "";
    try {
      const { data } = await apiConfig.patch(`/companies/${id}`, company.value);
      if (data) {
        await router.push({ name: "companies.index" });
        return customAlert(
          "¡Éxito!",
          "¡Compañía actualizada correctamente!",
          "success"
        );
      } else {
        return customAlert("¡Error!", "¡Ha ocurrido un error!", "error");
      }
    } catch (e) {
      if (e.response.status === 400) {
        for (const key in e.response.data.errors) {
          errors.value += e.response.data.errors[key][0] + " ";
        }
      }
    }
  };

  const destroyCompany = async (id) => {
    const { data } = await apiConfig.delete(`/companies/${id}`);
    if (data.success) {
      return customAlert(
        "¡Éxito!",
        "¡Compañía eliminada correctamente!",
        "success"
      );
    } else {
      return customAlert("¡Error!", "¡Ha ocurrido un error!", "error");
    }
  };

  return {
    companies,
    company,
    destroyCompany,
    errors,
    getCompanies,
    getCompany,
    isLoading,
    storeCompany,
    updateCompany,
  };
};

export default useCompanies;
