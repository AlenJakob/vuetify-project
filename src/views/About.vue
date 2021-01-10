
 <template>
  <div>
    <v-app-bar class="mb-1">
      <h4 class="subtitle-2">About me</h4>
    </v-app-bar>
    <v-row class="max-width-center my-5">
      <v-col xl="8" lg="8" md="8" sm="7" xs="12">
        <About />
      </v-col>
      <v-col xl="4" lg="4" md="3" sm="5" xs="12">
        <AboutInfo />
      </v-col>
    </v-row>
  </div>
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

<style >
.max-width-center {
  max-width: 1100px;
  margin: 0 auto;
}
@media only screen and (max-width: 600px) {
  .v-card {
    width: 100%;
  }
}
</style>