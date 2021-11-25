<template>
  <div class="home">
    <div class="contents">
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
    <div class="menu" id="menu">
      <ul class="menu-list">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  background-color: rgb(255, 255, 224);
}
.contents {
  width: 100%;
}
.title {
  margin: 2rem;
}
.recommend {
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 0.5rem;
  row-gap: 1rem;
}
.etc {
  text-align: center;
  line-height: 10rem;
  font-size: 5rem;
}
.menu {
  position: fixed;
  width: 30%;
  height: 100%;
  background-color: blue;
  transform: translateX(100%);
  top: 10rem;
  right: 0;
  transition: all 0.5s;
}
.open {
  transform: translateX(0);
}
.menu-list li {
  font-size: 5rem;
  border-bottom: 0.2rem solid black;
}
</style>

<script>
import videoInLists from "@/components/videoInLists.vue"
import EventBus from "@/EventBus"

export default {
  components: {
    videoInLists,
  },
  created() {
    EventBus.$on("passOpenMenu", this.openMenu)
  },
  methods: {
    openMenu() {
      const menu = document.getElementById("menu")
      menu.classList.toggle("open")
      console.log("a")
    },
  },
}
</script>
