<template>
  <MainSection>
    <li>
      <a v-on:click="login">{{ !userIsLoggedIn ? "Log In" : "Log out" }}</a>
    </li>
  </MainSection>
</template>

<script>
import MainSection from "@components/MainSection.vue"
export default {
  name: "UserSessionLink",
  components: {
    MainSection
  },
  data() {
    return {
      userIsLoggedIn: this.$store.getters.userIsLoggedIn
    }
  },
  methods: {
    login() {
      /** ! You DISPATCH actions or COMMIT mutations
       * https://v3.vuex.vuejs.org/guide/mutations.html#committing-mutations-in-components
       * this.$store.commit("setUserLoggedIn")
       */
      
      // https://v3.vuex.vuejs.org/guide/actions.html#dispatching-actions
      this.$store.dispatch(
        "setUserIsLoggedIn",
        this.userIsLoggedIn ? false : true
      )
      // 🔄 Redirect to login or home depending on the state of user session
      this.$router.push(this.userIsLoggedIn ? "/login" : "/")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
