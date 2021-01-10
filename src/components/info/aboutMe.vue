<template>
  <v-row justify="space-around">
    <v-card>
      <v-img
        height="200px"
        src="https://cdn.pixabay.com/photo/2015/08/13/01/00/keyboard-886462_1280.jpg"
      >
        <v-app-bar flat color="rgba(0, 0, 0, .7)">
       

          <v-spacer></v-spacer>
        </v-app-bar>
        <v-app-bar flat color="rgba(0, 0, 0, .7)">
          <v-card-title class="text-shadow white--text mt-8">
            <v-avatar size="128">
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
        <div class="ml-8 mb-2">
          <h4 class="ml-8 mb-2">{{ title }}</h4>
          <p>{{ description }}</p>
        </div>
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    title: "My Name Is Alen Jakob",
    description:
      "I’m an ambitious and self motivated person who would like to join a proffesional team of developers. Creating websites and application using HTML5, CSS3 , Javascript , Vue and very passionate about front end.I spent a lot of hours over 3 years to prepare myself for changing a carreer path. Passed over 20 online courses and create  websites that gives me the knowledge to develop good product. Learning new technologies to improve my skills that could help me get a dream job. Over 8 years of work experience in an international environment. I’m convinced that my skills is enough to apply for junior position.",
  }),
};
</script>

<style >
.text-shadow {
  text-shadow: 0 0 3px black;
}
</style>