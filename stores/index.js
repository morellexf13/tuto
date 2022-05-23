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
    getters: {
        userIsLoggedIn: (state) => state.session.userIsLoggedIn
    },
    mutations: {
        setUserIsLoggedIn(state, payload) {
            state.session.userIsLoggedIn = payload
        }
    },
    actions: {
        setUserIsLoggedIn({ commit }, payload) {
            commit("setUserIsLoggedIn", payload)
        }
    },
    plugins: [vuexLocal.plugin]
})