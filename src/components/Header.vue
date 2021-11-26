<template>
  <div class="header" id="header">
    <router-link to="/" class="router-link"><h1 class="title">ヘッダー</h1></router-link>
    <div class="serch">
      <input type="text" class="serch-text" />
      <div class="serch-mark">🔍</div>
    </div>
    <router-link to="/upload" class="router-link"
      ><div class="toUpload"><span>+</span></div></router-link
    >
    <img
      @click="openMenu"
      src="../assets/menu.png"
      alt="メニューマーク"
      class="menu-mark"
      id="menu-mark"
    />
    <div class="menu" id="menu">
      <ul class="menu-list">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
    <div class="curten" v-if="curtenSwitch"></div>
  </div>
</template>

<style scoped>
.header {
  background-color: red;
  height: 10rem;
  display: flex;
  justify-content: space-between;
}
.open-header {
  background-color: red;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}
.title {
  font-size: 5rem;
  line-height: 10rem;
  margin-right: 1rem;
}
.title:hover {
  font-size: 5.2rem;
  line-height: 10rem;
  margin-right: 0.2rem;
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
  background-color: rgb(47, 0, 255);
  top: 0;
  right: 0;
  bottom: 0;
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
  z-index: 2;
}
.open-menu {
  transform: translateX(0);
}
.menu-list li {
  font-size: 5rem;
  border-bottom: 0.2rem solid black;
}
.curten {
  position: fixed;
  top: 10rem;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
}
</style>

<script>
export default {
  data() {
    return {
      curtenSwitch: false,
    }
  },
  methods: {
    openMenu() {
      const menu = document.getElementById("menu")
      menu.classList.toggle("open-menu")
      const header = document.getElementById("header")
      header.classList.toggle("open-header")
      this.curtenSwitch = !this.curtenSwitch
    },
  },
}
</script>
