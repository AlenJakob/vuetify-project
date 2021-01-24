<template>
  <v-footer padless>
    <v-row
      justify="center"
      class="cyan darken-1"
      color="cyan darken-1"
      no-gutters
    >
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
    </v-row>
    <v-col class="text-center" cols="12">
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            {{ new Date().getFullYear() }} — Created by
            <b class="has-text-info">Alen Jakob</b>
          </p>
          <p>
            check

            <a class="black--text" href="https://github.com/AlenJakob"
              ><i class="fab fa-github-alt fa-lg"></i> My Github</a
            >
            /
            <a href="https://www.linkedin.com/in/alen-jakob/"
              ><i class="fab fa-linkedin fa-lg"></i> Linkedin</a
            >
            or just contact me via email
            <a href="mailto:alenjakob@gmail.com">alenjakob@gmail.com</a>.
          </p>
        </div>
      </footer>
    </v-col>
  </v-footer>
</template>

<style scoped>
.v-application a {
  color: darkcyan !important;
}
</style>


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
