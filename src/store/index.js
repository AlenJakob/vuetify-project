import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex, axios);

export default new Vuex.Store({
 
  state: {
    count: 1,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});
