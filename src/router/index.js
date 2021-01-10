import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("../views/Projects.vue"),
  }, {
    path: "/graphic",
    name: "Graphic",
    component: () => import("../views/Graphic.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },

];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes, scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

export default router;
