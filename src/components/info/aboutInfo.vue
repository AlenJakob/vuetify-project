<template>
    <v-row justify="space-around">
      <v-card>
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
                  <p>{{ tech.desc }}</p>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>

        <!-- graphic stack -->
        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">Graphic Stack</div>

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
</template>

<script>
export default {
  data: () => ({
    technologies: [
      {
        name: "Javascript",
        desc:
          "JavaScript is a scripting language used to create and control dynamic website content",
        color: "yellow lighten-1",
      },
      {
        name: "Css / Sass",
        desc:
          "Css is used for styling our website and make it looks nice, is also help to improve responsive design. Sass is an extension for CSS to enable us to use new things as variables ,nested rules, imports and more",
        color: "blue",
      },
      {
        name: "HTML",
        desc:
          "is the standard markup language used for documents which can be displayed in a browser",
        color: "red",
      },
      {
        name: "Vue",
        desc: "A javascript freamwrok for modern web development",
        color: "#41B883",
      },
      {
        name: "Vuex",
        desc:
          "as a State managment for Vue .js freamwork to help us improve data flow in our application",
        color: "#34495E",
      },
      {
        name: "Bulma / Buefy",
        desc:
          "used to build a front end for Web is a css freamwork based on flexbox",
        color: "#00d1b2",
      },
    ],
    graphic: [
      {
        name: "Figma",
        color: "#F24E1E",
      },
      {
        name: "Affinity Photo",
        color: "red darken-2",
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