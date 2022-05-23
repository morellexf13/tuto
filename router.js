/**
 * ⛔️ This file defines your pages routes. 
 *   How to add a new page:
 *   1. Create a new .vue file inside the pages folder.
 *   2. Import it as you can see below.
 *   3. Add a new object item to the routes array defining the path, name and component.
 */

import Vue from "vue"
import Router from "vue-router"
Vue.use(Router)

const router = new Router({
    mode: "history",
    routes: [{
            path: "/",
            name: "home",
            component: () =>
                import ("@/pages/Home.vue")
        },
        {
            path: "/login",
            name: "login",
            component: () =>
                import ("@/pages/Login.vue")
        },
        {
            path: "/spotify",
            name: "spotify",
            component: () =>
                import ("@/pages/SpotifyTracker.vue")
        }
    ]
})

export default router