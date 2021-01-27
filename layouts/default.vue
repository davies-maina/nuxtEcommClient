<template>
  <div>
    <navbar></navbar>
    <Nuxt />
  </div>
</template>

<script>
import navbar from "~/layouts/partials/Navbar";
export default {
  components: {
    navbar,
  },
};
</script>