<template>
  <v-app>
    <Navigation />
    <v-main> <router-view></router-view> </v-main>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation,
  },
  beforeCreate() {
    this.$store.dispatch("loadProducts");
  },
};
</script>
