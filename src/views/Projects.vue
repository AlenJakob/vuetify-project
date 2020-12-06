<template>
  <div class="about">
    <h1>Projects</h1>
  </div>
</template>



<script>
export default {
  data() {
    return {
      url: "my-json-server.typicode.com/AlenJakob/vuetify-project/projects",
    };
  },
  mounted() {
    console.log(this.$store.state.count);
    this.$store.dispatch("loadProducts");
  },
};
</script>