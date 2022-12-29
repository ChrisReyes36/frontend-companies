<template>
  <div class="alert alert-danger" role="alert">
    <b>{{ errors }}</b>
  </div>
</template>

<script>
export default {
  name: "AlertComponent",
  props: {
    errors: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
