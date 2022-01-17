import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./router/index";
import "./assets/styles.css";
import vuetify from "@/plugins/vuetify";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
// path to vuetify export

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

new Vue({
  render: (h) => h(App),
  vuetify,
  router,
}).$mount("#app");
