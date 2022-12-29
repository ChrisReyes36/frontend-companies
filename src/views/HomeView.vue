<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>REDIRECCIÓN</h1>
    <div class="col-md-12 d-flex justify-content-center">
      <button @click="goTo" class="btn btn-primary m-1">Ir</button>
      <button @click="goTo" class="btn btn-secondary m-1">Ir</button>
      <button @click="goTo" class="btn btn-success m-1">Ir</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { useRouter } from "vue-router";

export default {
  name: "HomeView",
  components: {},
  setup() {
    const router = useRouter();

    return {
      goTo: () => {
        router.push({ name: "companies.index" });
      },
    };
  },
};
</script>
