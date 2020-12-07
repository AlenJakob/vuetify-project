<template>
  <v-container>
    <v-card class="mx-auto" min-height="500">
      <v-img
        class="white--text"
        min-height="320px"
        :src="project.image"
        :alt="project.image"
      >
      </v-img>

      <v-card-title>{{ project.title }}</v-card-title>
      <!-- <v-card-subtitle class="pb-0">{{ project.id }} </v-card-subtitle> -->

      <v-card-text class="text--primary">
        <div>{{ project.content.substring(0, 80) }}...</div>
      </v-card-text>

      <v-container>
        <v-divider></v-divider>
        <v-card-actions class="justify-center">
          <v-chip-group v-for="tech in project.technologies" :key="tech">
            <v-chip>{{ tech }}</v-chip>
          </v-chip-group>
        </v-card-actions>

        <v-divider></v-divider>
        <v-card-actions class="my-2 pb-1 justify-center">
          <v-btn
            elevation="2"
            class="black"
            depressed
            :href="project.sourceLink"
          >
            View Source
          </v-btn>
          <v-btn
            elevation="2"
            color="success"
            depressed
            :href="project.projectLink"
          >
            Visit Website
          </v-btn>
          <v-btn
            class="button"
            elevation="2"
            :data-id="project.id"
            @click.native="displaySingleProject($emit)"
          >
            Read more... {{ project.id }}
          </v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-container>
</template>


<script>
export default {
  components: {},
  props: {
    project: Object,
  },
  methods: {
    displaySingleProject() {
      console.log(event.target);
    },
  },
};
</script>

<style lang="scss">
.height-card {
  height: 620px !important;
}
</style>