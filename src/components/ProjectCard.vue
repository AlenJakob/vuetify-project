<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="white--text align-end"
      height="250px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
    </v-img>

    <v-card-title>{{ project.title }}</v-card-title>
    <v-card-subtitle class="pb-0">{{ project.id }} </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ project.content }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="red" text> Share </v-btn>

      <v-btn color="blue" text> Explore </v-btn>
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