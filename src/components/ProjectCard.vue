<template>
  <v-card class="mx-auto height-card d-flex flex-column" max-width="500">
    <v-img
      class="white--text align-end"
      :src="project.image"
      :alt="project.image"
    >
    </v-img>

    <v-card-title>{{ project.title }}</v-card-title>
    <!-- <v-card-subtitle class="pb-0">{{ project.id }} </v-card-subtitle> -->

    <v-card-text class="text--primary">
      <div>{{ project.content.substring(0, 100) }}...</div>
    </v-card-text>

    <v-container>
      <v-card-actions class="justify-center">
        <v-chip-group v-for="tech in project.technologies" :key="tech">
          <v-chip>{{ tech }}</v-chip>
        </v-chip-group>
      </v-card-actions>
      <v-card-actions class="my-2 pb-1 justify-center">
        <v-btn elevation="2" depressed> View Source </v-btn>
        <v-btn
          elevation="2"
          color="success"
          depressed
          :href="project.projectLink"
        >
          Visit Website
        </v-btn>
        <v-btn elevation="2" depressed> Read more... </v-btn>
      </v-card-actions>
    </v-container>
  </v-card>
</template>


<script>
export default {
  alignments: ["start", "center", "end"],
  props: {
    project: Object,
  },
};
</script>

<style lang="scss">
.height-card {
  height: 660px;
}
</style>