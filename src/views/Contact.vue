<template>
  <div class="about">
    <v-app-bar class="mb-1">
      <h4 class="subtitle-2">Contact</h4>
    </v-app-bar>
    <v-container class="my-6">
      <v-row class="my-6 py-2" align="center">
        <v-col md="6" sm="12">
          <ContactCard />
        </v-col>
        <v-col md="6" sm="12"
          ><h1 class="pb-6 d-flex justify-center">Contact me</h1>
          <Inbox class="mt-4" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style  scoped>
* {
  transition: 0.3s;
}
</style>
<script>
import Inbox from "@/components/Inbox.vue";

import ContactCard from "@/components/ContactCard.vue";
export default {
  components: {
    Inbox,
    ContactCard,
  },
};
</script>