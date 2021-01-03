<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="520.05px">
        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">Technologies Stack</div>

          <v-timeline align-top dense>
            <v-timeline-item
              v-for="tech in technologies"
              :key="tech.name"
              :color="tech.color"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>#{{ tech.name }}</strong>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>

        <!-- graphic stack -->
        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">Technologies Stack</div>

          <v-timeline align-top dense>
            <v-timeline-item
              v-for="graph in graphic"
              :key="graph.name"
              :color="graph.color"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>#{{ graph.name }}</strong>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    technologies: [
      {
        name: "Javascript",
        color: "yellow lighten-1",
      },
      {
        name: "Css / Sass",
        color: "blue",
      },
      {
        name: "HTML",
        color: "red",
      },
      {
        name: "Vue",
        color: "#41B883",
      },
      {
        name: "Vuex",
        color: "#34495E",
      },
      {
        name: "Bulma / Buefy",
        color: "#00d1b2",
      },
    ],
    graphic: [
      {
        name: "Figma",
        color: "#F24E1E",
      },
    ],
  }),
};
</script>

<style >
.text-shadow {
  text-shadow: 0 0 3px black;
}
</style>