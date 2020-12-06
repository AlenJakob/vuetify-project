<template>
  <div class="about">
    <h1>Projects</h1>
    {{ projectsList }}
    <v-container>
      <v-layout row>
        <v-flex class="my-5" fluid v-for="project in projectsList" :key="project.id" xs12 md6>
          <ProjectCard :project="project" />
          
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
    this.$store.dispatch("loadProducts")
    this.projectsList = this.$store.state.projects;
  },
  mounted() {
    // console.log(this.$store.state.projects);
    console.log(this.projectsList);
  },
};
</script>