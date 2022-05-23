import Vue from "vue";
import App from "./App.vue";
// import router from '../router.js'
import Router from "vue-router";
import store from "../stores/index.js";
Vue.use(store);
Vue.use(Router);

var router = new Router({
  mode: "history",
  routes: [
    { 
        path: "/", 
        name: "home", 
        component: () => import("./pages/Home.vue") },
    {
      path: "/login",
      name: "login",
      component: () => import("./pages/Login.vue"),
    },
    {
        path: "/spotify",
        name: "spotify",
        component: () => import("./pages/SpotifyTracker.vue"),
      },
  ],
});

Vue.router = router;
Vue.config.productionTip = false;

new Vue({ router, store, render: (h) => h(App) }).$mount("#app");
