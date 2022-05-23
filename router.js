import Vue from 'vue'
import Router from 'vue-router'
import Login from "./src/pages/Login.vue"
import Home from "./src/pages/Home.vue"
import SpotifyTracker from "./src/pages/SpotifyTracker.vue"

Vue.use(Router)

// const router = new VueRouter({
//     mode: 'history',
//     routes
// })

export default new Router({
    routes: [{ path: '/', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login },
    { path: '/spotify', name: 'spotify', component: SpotifyTracker }]
})