<template>
  <div class="about"  max-width="500">
    <v-app-bar class="mb-1">
      <h4 class="subtitle-2">Projects</h4>
    </v-app-bar>
    <v-container class="max-width">
      <v-row v-if="ok" >
        <v-flex
          class="my-5"
          fluid
          v-for="project in getProjectsFromLocalStorage"
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
      </v-row>
      <!-- display signle card -->
      <v-row v-else>
        <v-flex class="my-5" fluid xs12 md6>
          <v-btn>return</v-btn>
          <v-col> <ViewProjectCard :project="project" /> </v-col>
        </v-flex>
      </v-row>
    </v-container>
  </div>
</template>


<style>
.max-width{
  max-width: 960px;
}
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
        return JSON.parse(projects).reverse();
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