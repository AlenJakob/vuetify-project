import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex, axios);
export default new Vuex.Store({
  state: {
    count: 1,
    projects: [],
    projectsList: "https://api.jsonbin.io/b/600e92673126bb747e9e9e15",
    projectEndPoint:
      "https://my-json-server.typicode.com/AlenJakob/vuetify-project/projects",
  },
  actions: {
    async loadProducts({ commit }) {
      await axios
        .get(this.state.projectsList)
        .then((result) => {
          console.log(result.data.projects);
          commit("LOAD_PROJECTS", result.data.projects);
          localStorage.removeItem("projects");
          localStorage.setItem(
            "projects",
            JSON.stringify(result.data.projects)
          );
        })
        .catch((error) => {
          console.log(`API ${error}`);
        });
    },
  },
  mutations: {
    LOAD_PROJECTS(state, projects) {
      state.projects = projects;
    },
  },
});
