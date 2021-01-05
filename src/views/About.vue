
 <template>
  <v-container class="grey lighten-5 my-5"  style="margin: 0 auto; padding: 0px; max-width: 1100px">
    <v-row>
      <v-col cols="12" sm="12">
        <About />
      </v-col>
      <v-col cols="12" sm="12">
        <AboutInfo />
      </v-col>
    </v-row>
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