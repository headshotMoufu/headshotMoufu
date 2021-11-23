<template>
  <div class="home">
    <h2 class="title">今週のおすすめ</h2>
    <div class="recommend">
      <videoInLists />
      <videoInLists />
      <videoInLists />
      <videoInLists />
      <videoInLists />
      <videoInLists />
      <videoInLists />
      <videoInLists />
      <videoInLists />
      <videoInLists />
      <videoInLists />
      <videoInLists />
      <videoInLists />
      <videoInLists />
      <videoInLists />
      <videoInLists />
      <div class="etc">...</div>
    </div>
  </div>
</template>

<style scoped>
.title {
  margin: 2rem;
}
.recommend {
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(5,1fr);
  column-gap: 0.5rem;
  row-gap: 1rem;
}
.etc {
  text-align: center;
  line-height: 10rem;
  font-size: 5rem;
}
</style>

<script>
import videoInLists from "@/components/videoInLists.vue"

export default {
  components: {
    videoInLists
  }
}
</script>
