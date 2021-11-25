<template>
  <div class="header">
    <h1 class="title">ヘッダー</h1>
    <div class="serch">
      <input type="text" class="serch-text" />
      <div class="serch-mark">🔍</div>
    </div>
    <router-link to="/upload"
      ><div class="toUpload"><span>+</span></div></router-link
    >
    <img
      @click="passClick"
      src="../assets/menu.png"
      alt="メニューマーク"
      class="menu-mark"
      id="menu-mark"
    />
  </div>
</template>

<style scoped>
.header {
  background-color: red;
  height: 10rem;
  display: flex;
  justify-content: space-between;
}
.title {
  font-size: 5rem;
  line-height: 10rem;
}
.serch {
  display: flex;
  width: 30%;
}
.serch-text {
  margin: 3rem 0;
  width: 100%;
}
.serch-mark {
  margin: 3rem;
  font-size: 3rem;
}
.serch-mark:hover {
  font-size: 3.5rem;
  margin: 2.4rem 3rem 3rem 2.3rem;
}
.toUpload {
  background-color: white;
  height: 5rem;
  width: 5rem;
  margin: 2.5rem;
  border-radius: 50%;
  position: relative;
  border: 0.3rem solid;
}
.toUpload:hover {
  height: 6rem;
  width: 6rem;
  margin: 2rem 2rem 0 1.9rem;
  position: relative;
  border: 0.4rem solid;
}
.toUpload span {
  font-size: 4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.menu-mark {
  width: 3rem;
  height: 3rem;
  margin: 3.5rem;
}
.menu-mark:hover {
  width: 3.5rem;
  height: 3.5rem;
  margin: 3.25rem;
}
.menu-list {
  width: 10%;
  height: 000%;
  background-color: rgb(47, 0, 255);
  top: 0;
  right: 0;
}
</style>

<script>
import EventBus from "@/EventBus.js"

export default {
  methods: {
    passClick() {
      EventBus.$emit("passOpenMenu")
    },
  },
}
</script>
