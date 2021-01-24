<template>
  <v-container>
    <v-card class="mx-auto" min-height="500">
      <v-img
        class="white--text non-opacity"
        min-height="320px"
        :src="project.image"
        :alt="project.image"
      >
      </v-img>

      <v-card-title>{{ project.title }}</v-card-title>
      <!-- <v-card-subtitle class="pb-0">{{ project.id }} </v-card-subtitle> -->

      <v-card-text class="text--primary" >
        <div>{{ project.content }}</div>
      </v-card-text>

      <v-container>
        <!-- <v-btn
          class="button mb-4 red--text small"
          elevation="2"
          @click.native="expanedCard()"
        >
          Read more
        </v-btn> -->
        <v-divider></v-divider>

        <v-card-actions class="justify-center flex-wrap">
          <v-chip-group v-for="tech in project.technologies" :key="tech">
            <v-chip>{{ tech }}</v-chip>
          </v-chip-group>
        </v-card-actions>

        <v-divider></v-divider>
        <v-card-actions class="my-2 pb-1 justify-center flex-wrap">
          <v-btn
            elevation="2"
            class="black mb-4"
            depressed
            :href="project.sourceLink"
          >
            Source
          </v-btn>
          <v-btn
            elevation="2"
            color="cyan mb-4"
            depressed
            :href="project.projectLink"
          >
            Visit Website
          </v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-container>
</template>


<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
    activeCard: {
      type: [String, Number, Boolean],
      required: true,
    },
  },
  methods: {
    expanedCard() {
      this.$emit("expand-card", this.project.id);
    },
  },
};
</script>

<style lang="scss">
.height-card {
  height: 620px !important;
}
</style>