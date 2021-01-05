<template>
  <v-row justify="space-around">
    <v-card >
      <v-img
 
        height="200px"
        src="https://cdn.pixabay.com/photo/2015/08/13/01/00/keyboard-886462_1280.jpg"
      >
        <v-app-bar flat color="rgba(0, 0, 0, .8)" >
          <v-toolbar-title class="title white--text pl-0 text-shadow">
            About me
          </v-toolbar-title>

          <v-spacer></v-spacer>
        </v-app-bar>
        <v-app-bar flat color="rgba(0, 0, 0, .7)">
          <v-card-title class="text-shadow white--text mt-8">
            <v-avatar size="78">
              <img
                alt="user"
                src="https://avatars.githubusercontent.com/AlenJakob"
              />
            </v-avatar>

            <p class="ml-3">Alen Jakob</p>
          </v-card-title>
        </v-app-bar>
      </v-img>

      <v-card-text>
        <div class="font-weight-bold ml-8 mb-2">Description</div>
        <p class="ml-8 mb-2">{{ desc }}</p>
        <p class="ml-8 mb-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In dolore
          laudantium nihil, obcaecati explicabo dolores voluptatem. Earum
          pariatur totam neque quae nobis quod iste, ex impedit cupiditate
          possimus hic molestiae blanditiis, esse sit consequuntur assumenda?
          Veniam officiis consequatur dolore optio dolorem provident odit
          incidunt.
        </p>
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    desc: "My Name Is Alen Jakob",
  }),
};
</script>

<style >
.text-shadow {
  text-shadow: 0 0 3px black;
}
.img {
  opacity: 0.2;
}
</style>