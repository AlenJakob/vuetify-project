import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    count: 1,
    projects: [],
    projectEndPoint:
      "https://my-json-server.typicode.com/AlenJakob/vuetify-project/projects",
  },
  actions: {
    async loadProducts({ commit }) {
      await axios
        .get(this.state.projectEndPoint)
        .then((result) => {
          commit("LOAD_PROJECTS", result.data);
        })
        .catch((error) => {
          console.log(`API ${error}`);
        });
    },
  },
  mutations: {
    LOAD_PROJECTS(state, projects) {
      state.projects = projects
    },
  }
});

