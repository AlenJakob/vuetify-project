<template>
  <div>
    <div>
      <v-app-bar dark>
        <v-app-bar-nav-icon class="mx-1" @click="drawer = !drawer" />
        <v-toolbar-title>Vuetify Project</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items v-for="link in links" :key="link.id">
          <v-btn text :to="link.dir">{{ link.to }}</v-btn>
        </v-toolbar-items>

        <!-- <template v-if="$vuetify.breakpoint.smAndUp">
          <v-btn icon>
            <v-icon>mdi-export-variant</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-delete-circle</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-plus-circle</v-icon>
          </v-btn>
        </template> -->
      </v-app-bar>

      <!-- <v-col cols="12" class="text-center">
        <v-btn class="primary mt-5" @click="$vuetify.rtl = !$vuetify.rtl">
          Toglle RTL
        </v-btn>
      </v-col> -->

      <v-navigation-drawer
        dark
        v-model="drawer"
        absolute
        :right="direction.ltr"
        temporary
      >
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item v-for="link in links" :key="link.to" link>
            <v-list-item-content>
              <v-btn text :to="link.dir">
                {{ link.to }}
              </v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      direction: { rtl: true, ltr: false },
      drawer: false,
      links: [
        { id: 1, to: "Home", dir: "/home" },
        { id: 2, to: "About", dir: "/about" },
        { id: 3, to: "Projects", dir: "/projects" },
        { id: 4, to: "Contact", dir: "/contact" },
      ],
    };
  },
  mounted() {},
};
</script>

<style lang="scss">
a {
  color: white !important;
  text-decoration: none;
  text-align: center;
}
</style>