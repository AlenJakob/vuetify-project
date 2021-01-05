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

      <v-card-text class="text--primary" v-if="activeCard">
        <div>{{ project.content}}</div>
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
            Source
          </v-btn>
          <v-btn
            elevation="2"
            color="success"
            depressed
            :href="project.projectLink"
          >
            Visit Website
          </v-btn>
          <v-btn class="button" elevation="2" @click.native="expanedCard()">
            Read more
          </v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-container>
</template>


<script>
// import viewProjectCard from "./ViewProjectCard";
// export default {
//   components: {
//     viewProjectCard,
//   },
//   data() {
//     return {
//       currentId: Number,
//       active: false,
//     };
//   },
//   props: {
//     project: Object,
//   },
//   methods: {
//     displaySingleProject(id) {
//       console.log(id);
//       this.currentId = id;
//          this.$emit('expand-card', this.project.id)
//     },
//   },
// };

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
.non-opacity{
  opacity:1!important;
}
</style>