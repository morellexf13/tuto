/**
 * 💾 Create a script file like this "index.js" inside the "stores" folder
 * for each store you want to use. This one is intended to be used as a "main"
 * store to manage the general application state, for example: user session, theme, etc.
 */

import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import VuexPersistence from "vuex-persist"
const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

export default new Vuex.Store({
    state: {
        session: {
            userIsLoggedIn: false
        }
    },
    // https://v3.vuex.vuejs.org/api/#getters
    getters: {
        userIsLoggedIn: (state) => state.session.userIsLoggedIn
    },
    // https://v3.vuex.vuejs.org/api/#mutations
    mutations: {
        setUserIsLoggedIn(state, payload) {
            state.session.userIsLoggedIn = payload
        }
    },
    // https://v3.vuex.vuejs.org/api/#actions
    actions: {
        setUserIsLoggedIn({ commit }, payload) {
            commit("setUserIsLoggedIn", payload)
        }
    },
    // This plugin was added to use localStorage as the storage engine
    plugins: [vuexLocal.plugin]
})