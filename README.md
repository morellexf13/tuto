# 🍦 Tuto

<div align="center">

[![License](https://img.shields.io/badge/-MIT-f56565.svg?longCache=true&style=for-the-badge)](https://github.com/morellexf26/tuto/blob/main/LICENSE)
[![Version](https://img.shields.io/github/v/release/morellexf26/tuto?label=%20&style=for-the-badge)](https://github.com/morellexf26/tuto/releases)
[![Build](https://img.shields.io/github/workflow/status/morellexf26/tuto/Build?label=%20&logo=github&logoColor=white&style=for-the-badge)](https://github.com/morellexf26/tuto/actions?query=workflow%3Abuild) 
![Vue](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)


<img src=".github/images/built-with.svg">
<img src=".github/images/uses-js.svg">

</div>

<img alt='Website' src="./src/assets/screenshots/login.png" />

This is the vanilla version of the boilerplate that helps you to start creating your own Vue 2.6.x projects using 🗃️ Vuex Store, 🚏 Vue Router, 📡 Axios, 🤹🏻‍♂️ Jest and more amazing tools .

Tuto is the short of Tutorial and the best/easier way to start creating a SPA using the best frameworks out there!

<br>

## 👨🏻‍🏫  Basic topics

- [What is Vue?](https://vuejs.org/guide/introduction.html#what-is-vue)
- [Single-File Components](https://vuejs.org/guide/introduction.html#single-file-components)
- [Reactivity Fundamentals](https://vuejs.org/guide/essentials/reactivity-fundamentals.html#reactivity-fundamentals)
- [Computed Properties](https://vuejs.org/guide/essentials/computed.html#computed-properties)
- [Props Declaration](https://vuejs.org/guide/components/props.html#props-declaration)
- [Slots](https://vuejs.org/guide/components/slots.html#slots)
- [Performance Overview](https://vuejs.org/guide/best-practices/performance.html#overview)
- [Vuex Store v3 - Getting Started](https://v3.vuex.vuejs.org/)
- [Vue Router v3 - Getting Started](https://v3.router.vuejs.org/)
- [Jest Unit Tests (🇪🇸)](https://medium.com/@agustinmorelle01/las-7-claves-del-%C3%A9xito-tests-unitarios-de-frontend-vue-js-y-jest-28988ae561ac)

<br>

## 💎 Features

- Basic login/logout state definition using Vuex Store v3.x.
- Basic Store configured using Vuex and Persist Plugin (stores/index.js).
- Basic "Home" and "Login" pages defined (src/pages/).
- Basic router configuration defined (/router.js).
- Basic GET request using Axios (Spotify Tracker API). This request needs an [Authorization Bearer Token ](https://developer.spotify.com/console/get-users-currently-playing-track/). For security purposes you can just set this token on environment files.
- Environment file example.
- Jest configuration defined.
-  API Unit test included.
- Path alias defined (webpack.config.js).
- GitHub actions workflow example defined.

<br>

## 🏛 Project Structure

```
tuto
├─ .babelrc
├─ LICENSE
├─ README.md
├─ babel.config.json
├─ jest.config.js // 🃏 Unit tests configuration
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ router.js // 🧭 Handle page routes
├─ src
│  ├─ App.vue
│  ├─ assets
│  │  ├─ css
│  │  │  └─ index.css // 🎨 Main stylesheet file
│  │  ├─ favicon.ico
│  │  ├─ logo.png
│  │  ├─ screenshots
│  │  │  └─ login.png
│  │  └─ scripts
│  │     └─ api.js // 📡 Handle api calls
│  ├─ components
│  │  ├─ MainSection.vue
│  │  └─ UserSessionLink.vue
│  ├─ index.html
│  ├─ main.js // 🪴 Application's entry point
│  └─ pages
│     ├─ Home.vue
│     ├─ Login.vue
│     └─ SpotifyTracker.vue
├─ stores
│  └─ index.js // 💾 Save general state of the app
├─ tests // 🃏 Unit tests
│  └─ unit
│     └─ spotify.spec.js
├─ vue.config.js // 🍦 Vue framework setup
└─ webpack.config.js // 📦 Bundler setup, alias and more

```

## 🏁 Start
Create your project directly from GitHub based
on tuto boilerplate right now:

<a href="https://github.com/morellexf26/tuto/generate"> 
<img src=".github/images/generate-your-project.svg"/>
</a>

<br>

## 🏃🏼‍♂️ Run

1. `npm install`
2. `npm run dev`

<br>

## 🧪 Run tests

1. `npm run test`