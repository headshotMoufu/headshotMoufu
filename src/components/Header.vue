<template>
  <div class="header">
    <h1 class="title">ヘッダー</h1>
    <div class="serch">
      <input v-on:click="frequentlySerched" type="text" class="serch-text">
      <div class="serch-mark">🔍</div>
    </div>
    <img src="../assets/menu.png" alt="メニュー" class="menu-mark">
  </div>
</template>

<style scoped>
.header {
  background-color: red;
  height: 5rem;
  display: flex;
  justify-content: space-around;
}
.title {
  line-height: 5rem;
}
.serch {
  display: flex;
}
.serch-text {
  margin: 1.5rem;
}
.serch-mark {
  line-height: 5rem;
  font-size: 2rem;
}
.menu-mark {
  width: 2rem;
  height: 2rem;
  margin: 1.5rem;
}
</style>
