<template>
  <div id="app" class="app">
    <Header />

    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 62.5%;
}
.app {
  position: relative;
}
.main {
  padding-top: 5rem;
  z-index: -1;
  background-color: rgb(184, 184, 184);
  color: white;
}
.router-link {
  text-decoration: none;
  color: black;
}
</style>

<script>
import Header from "@/components/Header.vue"

export default {
  components: {
    Header,
  },
  computed: {},
}
</script>
