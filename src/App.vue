<template>
  <v-app>
    <Navigation />
    <v-main> <router-view></router-view> </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Navigation,
    Footer,
  },
  beforeCreate() {
    this.$store.dispatch("loadProducts");
  },
};
</script>
