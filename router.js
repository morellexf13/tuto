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