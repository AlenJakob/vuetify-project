<template>
  <div>
    <div>
      <v-app-bar dark>
        <v-app-bar-nav-icon class="mx-1" @click="drawer = !drawer" />
        <v-toolbar-title>Alen Jakob</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-toolbar-items
          class="menu_navbar"
          v-for="link in links"
          :key="link.id"
        >
          <v-btn class="menu_navbar" text :to="link.dir">{{ link.to }}</v-btn>
        </v-toolbar-items>
      </v-app-bar>

      <v-navigation-drawer
        dark
        v-model="drawer"
        absolute
        :right="direction.ltr"
        temporary
      >
        <v-list-item>
          <v-list-item-avatar>
            <v-img
              src="https://avatars2.githubusercontent.com/u/33994452?v=4"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Alen Jakob</v-list-item-title>
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
        { id: 2, to: "About me", dir: "/" },
        { id: 3, to: "Projects", dir: "/projects" },
        { id: 4, to: "Contact", dir: "/contact" },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" >
a {
  color: white !important;
  text-decoration: none;
  text-align: center;
}
@media only screen and (max-width: 600px) {
  .v-toolbar__items.menu_navbar {
    display: none !important;
  }
}
</style>