
 <template>
  <v-container class="grey lighten-5 my-6">
    <v-main>
      <v-row no-gutters  align="center" justify="center">
        <v-col cols="12" sm="6">
          <About />
        </v-col>
        <v-col cols="12" sm="6">
          <AboutInfo />
        </v-col>
      </v-row>
    </v-main>
  </v-container>
</template>
 
<script>
import About from "@/components/info/aboutMe";
import AboutInfo from "@/components/info/aboutInfo";
export default {
  components: {
    About,
    AboutInfo,
  },
};
</script>