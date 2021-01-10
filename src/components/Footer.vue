<template>
  <v-footer color="cyan darken-1" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link.length"
        color="white"
        text
        rounded
        class="my-1"
        @click="$router.push(link.path).catch(() => {})"
      >
        {{ link.name }}
      </v-btn>
      <v-col class="grey darken-4 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Alen Jakob</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [],
  }),
  created() {
    this.$router.options.routes.forEach((link) => {
      this.links.push({
        name: link.name,
        path: link.path,
      });
    });
  },
};
</script>

<style>
</style>