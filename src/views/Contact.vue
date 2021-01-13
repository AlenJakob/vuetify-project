<template>
  <div class="about" >
    <v-app-bar class="mb-1">
      <h4 class="subtitle-2">Contact</h4>
    </v-app-bar>
    <v-container class="my-6 max-width">
      <v-row class="my-6 py-2" align="center">
        <v-col cols="12" xs="12" sm="12" md="6"
          ><h1 class="pb-6 d-flex justify-center">Contact me</h1>
          <ContactCard />
        </v-col>
        <v-col cols="12" xs="12"  sm="12" md="6">
          <Inbox class="mt-6 pt-6 sx" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style  scoped>
.max-width {
  max-width:1264px;
}
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
  computed: {},
};
</script>