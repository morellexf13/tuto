<template>
  <div class="container">
    <MainSection>
      <li>
        <a v-on:click="navigateToHome">Go Home</a>
      </li>
    </MainSection>
    <br />
    <div v-if="isPlaying">
      <img :src="imgSrc" />
      <p>🎸 You are currently listening to {{ song }} by {{ artist }}</p>
    </div>
    <div v-else>
      <!-- Make sure to have the .env file in root directory to show this page -->
      <p>
        1. Set <i>VUE_APP_SPOTIFY_AUTHORIZATION_BEARER_TOKEN</i>
        <br />
        2. Play something on Spotify!
      </p>
    </div>
  </div>
</template>

<script>
import MainSection from "@components/MainSection.vue"
import * as api from "@/assets/scripts/api"
export default {
  name: "SpotifyTracker",
  components: {
    MainSection
  },
  mounted() {
    api
      .getUsersCurrentlyPlayingTrack()
      .then((item) => {
        this.isPlaying = true
        this.song = item.name
        this.artist = item.artists[0].name
        this.imgSrc = item.album.images[0].url
      })
      .catch(() => {
        this.isPlaying = false
      })
  },
  data() {
    return {
      isPlaying: false,
      song: "",
      imgSrc: "",
      artist: ""
    }
  },
  methods: {
    navigateToHome() {
      this.$router.push("/")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
