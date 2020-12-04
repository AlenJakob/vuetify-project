import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    count: 1,
    projectEndPoint:
      "my-json-server.typicode.com/AlenJakob/vuetify-project/projects",
  },
  actions: {
    async loadProducts({ commit }) {
      await axios
        .get(this.state.getProducts)
        .then((result) => {
          commit("LOAD_PRODUCTS", result.data);
        })
        .catch((error) => {
          throw new Error(`API ${error}`);
        });
    },
  },
  mutations: {
    increment(state) {
      state.count++;
      // does happend
    },
  },
});
