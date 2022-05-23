<template>
  <MainSection>
    <li>
      <a v-on:click="login">{{ !userIsLoggedIn ? "Log In" : "Log out" }}</a>
    </li>
  </MainSection>
</template>

<script>
import MainSection from "@components/MainSection.vue";
export default {
  name: "UserSessionLink",
  components: {
    MainSection,
  },
  data() {
    return {
      userIsLoggedIn: this.$store.getters.userIsLoggedIn,
    };
  },
  methods: {
    login() {
        this.$store.dispatch("setUserIsLoggedIn", this.userIsLoggedIn ? false : true);
        this.$router.push(this.userIsLoggedIn ? "/login" : "/");
    }
  },
};
</script>