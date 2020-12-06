<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="white--text align-end"
      height="300px"
      :src="project.image"
      :alt="project.image"
    >
    </v-img>

    <v-card-title>{{ project.title }}</v-card-title>
    <v-card-subtitle class="pb-0">{{ project.id }} </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ project.content }}</div>
    </v-card-text>
    <v-card-actions>
      <v-chip-group v-for="tech in project.technologies" :key="tech">
        <v-chip>{{ tech }}</v-chip>
      </v-chip-group>
    </v-card-actions>
    <v-card-actions class="my-2 pb-2">
      <v-btn elevation="2" depressed> View Source </v-btn>
      <v-btn elevation="2" color="success" depressed> Visit Website </v-btn>
      <v-btn elevation="2" depressed> Read more... </v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
export default {
  props: {
    project: Object,
  },
};
</script>