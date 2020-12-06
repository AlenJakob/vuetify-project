<template>
  <div class="about" >
    <v-app-bar class="mb-5">
      <h4>Projects</h4>
    </v-app-bar>
    <v-container>
      <v-layout row>
        <v-flex
          class="my-5"
          fluid
          v-for="project in projectsList"
          :key="project.id"
          xs12
          md6
        >
        <v-col>
            <ProjectCard :project="project" />
        </v-col>
          <v-divider class="mt-10"></v-divider>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>



<script>
import ProjectCard from "@/components/ProjectCard";
export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      url: "my-json-server.typicode.com/AlenJakob/vuetify-project/projects",
      projectsList: [],
    };
  },
  beforeMount() {
    this.$store.dispatch("loadProducts");
    this.projectsList = this.$store.state.projects;
  },
  mounted() {
    // console.log(this.$store.state.projects);
    console.log(this.projectsList);
  },
};
</script>