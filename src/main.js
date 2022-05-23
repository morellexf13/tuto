import Vue from "vue"
import App from "./App.vue"
import router from "../router.js"
import "@assets/css/index.css"
import store from "../stores/index.js"
Vue.use(store)
Vue.router = router
Vue.config.productionTip = false

new Vue({ router, store, render: (h) => h(App) }).$mount("#app")