<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'

const props = defineProps({
  getLanguage: String,
  getVersion: String,
  isInClient: Boolean,
  isLoggedIn: Boolean,
  getLineVersion: String
})

</script>

<template>
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <p>getLanguage: {{getLanguage}}</p>
  <p>getVersion: {{getVersion}}</p>
  <p>isInClient: {{isInClient}}</p>
  <p>isLoggedIn: {{isLoggedIn}}</p>
  <p>getLineVersion: {{getLineVersion}}</p>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
