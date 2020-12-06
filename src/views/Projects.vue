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
          v-for="project in getProjectsFromLocalStorage"
          :key="project.id"
          xs12
          md6
        >
          <v-col>
            <ProjectCard :project="project" />
          </v-col>
        </v-flex>
      </v-layout>
      <!-- display signle card -->
      <v-layout v-else>
        <v-flex class="my-5" fluid xs12 md6>
          <v-btn>return</v-btn>
          <v-col>
            <ViewProjectCard :project="project" />
          </v-col>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>



<script>
import ViewProjectCard from "@/components/ViewProjectCard";
import ProjectCard from "@/components/ProjectCard";
export default {
  components: {
    ProjectCard,
    ViewProjectCard,
  },
  data() {
    return {
      ok: true,
      url: "my-json-server.typicode.com/AlenJakob/vuetify-project/projects",
      projectsList: [],
    };
  },
  computed: {
    getProjectsFromLocalStorage() {
      const projects = localStorage.getItem("projects");
      return JSON.parse(projects);
    },
  },
  beforeMount() {
    this.$store.dispatch("loadProducts");
    this.projectsList = this.$store.state.projects;
  },
};
</script>