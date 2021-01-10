<template>
  <div class="about">
    <v-app-bar class="mb-1">
      <h4 class="subtitle-2">Contact</h4>
    </v-app-bar>
    <v-divider></v-divider>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-card class="mx-auto" max-width="500">
            <v-list>
              <v-list-item-group>
                <v-list-item
                  v-for="(item, i) in contact"
                  :key="i"
                  :disabled="true"
                >
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title
                        >{{ item.name }}:
                        <b>{{ item.val }}</b></v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
        <v-col align="center" justify="center"><Inbox /></v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import Inbox from "@/components/Inbox.vue";

export default {
  components: {
    Inbox,
  },
  data: () => ({
    contact: [
      { name: "email", val: "alenjakob@gmail.com", icon: "mdi-email" },
      { name: "mobile", val: "694754094", icon: "mdi-phone" },
    ],
  }),
};
</script>