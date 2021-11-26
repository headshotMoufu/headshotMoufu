<template>
  <div id="app">
    <Header />
    <div @click="closeMenu" class="main">
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
.main {
  position: absolute;
  top: 10rem;
  right: 0;
  left: 0;
  z-index: -1;
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
  computed: {
    
  }
}
</script>
