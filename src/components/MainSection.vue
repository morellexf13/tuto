<template>
  <div id="app">
    <div class="hello">
      <span>🍦</span>
      <h1>{{!userIsLoggedIn ? 'Welcome to Tuto!' : 'You are now logged in'}}</h1>
      <p v-if="!userIsLoggedIn">
        The vanilla version of the boilerplate that helps <br> you to start creating your own Vue 2 projects <br> using
        webpack bundler and more amazing tools!
      </p>
      <ul>
        <li v-if="userIsLoggedIn && $route.name != 'spotify'">
          <a v-on:click="navigateToSpotify">Spotify Tracker</a>
        </li>
        <slot />
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "MainSection",
  props: {
    msg: String
  },
  data() {
    return {
      userIsLoggedIn: this.$store.getters.userIsLoggedIn
    };
  },
  methods: {
    navigateToSpotify() {
      this.$router.push("/spotify");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

span {
  font-size: 92px;
}
</style>
