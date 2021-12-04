<template>
  <div id="app">
    <Header />
    <div class="main">
      <router-view />
      <Nico />
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
.main {
  position: absolute;
  top: 6rem;
  right: 0;
  left: 0;
  z-index: -1;
  padding: 5rem;
  background-color: rgb(126, 126, 126);
  color: white;
}
.router-link {
  text-decoration: none;
  color: black;
}
</style>

<script>
import Header from "@/components/Header.vue"
import Nico from "@/components/NicoGet.vue"

export default {
  components: {
    Header,
    Nico,
  },
  computed: {},
}
</script>
