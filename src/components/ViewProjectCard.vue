<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">project title</h3>
            <div></div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn text color="orange">Share</v-btn>
          <v-btn text color="orange" @click="expanedCard()">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
    activeCard: {
      type: [String, Number,Boolean],
      required: true,
    },
  },
  methods: {
    expanedCard() {
      this.$emit('expand-card', this.project.id)
    },
  },
};
</script>