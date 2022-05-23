/**
 * 📡 This script is intended to be used to save all API calls.
 */
import axios from 'axios';
const BEARER_TOKEN = process.env.VUE_APP_SPOTIFY_AUTHORIZATION_BEARER_TOKEN
const HEADERS = {
    headers: { Authorization: `Bearer ${BEARER_TOKEN}` }
};

const getUsersCurrentlyPlayingTrack = () => {
    return axios
      .get('https://api.spotify.com/v1/me/player/currently-playing', HEADERS)
      .then(response => response.data.item)
}

export { getUsersCurrentlyPlayingTrack }