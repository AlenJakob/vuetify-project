<template>
  <v-card class="mx-auto pl-5" >
    <v-list-item-content v-for="(item, i) in contactList" :key="i">
      <v-list-item
        ><v-icon medium color="cyan darken-2"> {{ item.icon }}</v-icon>

        <v-list-item-title class="ml-6">
          {{ item.name }}:
          <a :href="`${item.href}`">{{ item.val }}</a></v-list-item-title
        >
      </v-list-item>
      <v-divider></v-divider>
    </v-list-item-content>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    contactList: [
      {
        name: "E-mail",
        val: "alenjakob@gmail.com",
        icon: "mdi-email",
        href: "alenjakob@gmail.com",
      },
      { name: "Mobile", val: "coming soon", icon: "mdi-phone" },
      {
        name: "Linkedin",
        icon: "mdi-linkedin",
        val: "Click to view",
        href: "https://www.linkedin.com/in/alen-jakob",
      },
      {
        name: "Github",
        icon: "mdi-github",
        val: "Click to view",
        href: "https://github.com/AlenJakob",
      },
    ],
  }),
};
</script>

<style scoped>
.v-application a {
  color: #1976d2 !important;
}
.v-application a:hover {
  color: blue!important;
}
</style>