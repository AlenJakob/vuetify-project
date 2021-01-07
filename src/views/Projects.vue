<template>
  <div class="about" max-width="500">
    <v-app-bar class="mb-5">
      <h4>Projects</h4>
    </v-app-bar>
    <v-container>
      <v-layout row v-if="ok">
        <v-flex
          class="my-5"
          fluid
          v-for="project in getProjectsFromLocalStorage.reverse()"
          :key="project.id"
          xs12
          md6
        >
          <v-col>
            <ProjectCard
              :project="project"
              :active-card="project.id === activeCard"
              @expand-card="makeActiveCard($event)"
            />
          </v-col>
        </v-flex>
      </v-layout>
      <!-- display signle card -->
      <v-layout v-else>
        <v-flex class="my-5" fluid xs12 md6>
          <v-btn>return</v-btn>
          <v-col> <ViewProjectCard :project="project" /> </v-col>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<style>
.v-image__image.v-image__image--cover {
  opacity: 1 !important;
}
</style>
<script>
import ProjectCard from "@/components/ProjectCard";
import ViewProjectCard from "@/components/ViewProjectCard";
export default {
  components: {
    ProjectCard,
    ViewProjectCard,
  },
  data() {
    return {
      activeCard: Boolean,
      ok: true,
      url: "my-json-server.typicode.com/AlenJakob/vuetify-project/projects",
    };
  },
  computed: {
    getProjectsFromLocalStorage() {
      const projects = localStorage.getItem("projects");
      if (projects) {
        return JSON.parse(projects);
      } else {
        return this.$store.state.projects;
      }
    },
  },
  methods: {
    makeActiveCard(id) {
      this.activeCard = id;
    },
  },
};
</script>