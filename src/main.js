/**
 * 🪴 Application entry point.
 */

import Vue from "vue"
import App from "./App.vue"
import router from "../router.js"
import "@assets/css/index.css"
import store from "../stores/index.js"
Vue.use(store)
Vue.router = router
Vue.config.productionTip = false

router.beforeEach((from, to, next) => {
    // ✅ Check if user has logged in to decide if we should show the login page or not.
    if (from.name != 'login' && !store.getters.userIsLoggedIn) {
        next({
            path: 'login',
            replace: true
        })
    } else {
        next();
    }
})

new Vue({ router, store, render: (h) => h(App) }).$mount("#app")