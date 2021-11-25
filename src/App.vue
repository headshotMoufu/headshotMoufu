<template>
  <div id="app">
    <Header />

    <router-view />
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 62.5%;
}
</style>

<script>
import Header from "@/components/Header.vue"

export default {
  components: {
    Header,
  },
}
</script>
