<template>
  <div class="header" id="header">
    <router-link to="/" class="router-link"
      ><img src="../assets/videoExcavation.svg" class="logo"
    /></router-link>
    <div class="product-name">MakeInfluencer</div>
    <router-link to="/upload" class="router-link"
      ><div class="toUpload">
        <span>+</span>
      </div></router-link
    >
    <img
      @click="switchMenu"
      src="../assets/menu.png"
      alt="メニューマーク"
      class="menu-mark"
      id="menu-mark"
    />
    <div class="menu" id="menu">
      <ul class="menu-list">
        <router-link class="router-link" to="/uploadList">
          <li class="min-li">
            <h3>みんなの<br>おすすめ</h3>
          </li></router-link
        ><router-link class="router-link" to="/toYoutubeList">
          <li class="you-li">
            <h3>YouTube<br>動画発掘</h3>
          </li></router-link
        ><router-link class="router-link" to="/toNicoList">
          <li class="nico-li">
            <h3>ニコニコ<br>動画発掘</h3>
          </li></router-link
        ><router-link class="router-link" to="/upload">
          <li class="toukou-li">
            <h3>投稿</h3>
          </li></router-link
        >
        <!-- <li>
          <h3>
            <router-link class="router-link" to="/toNicoList"
              >ログイン</router-link
            >
          </h3>
        </li> -->
      </ul>
    </div>
    <div @click="switchMenu" class="curten" v-show="curtenSwitch"></div>
    <!-- <div v-if="recoSeen" class="reco-ex ex">
      <explanation>皆が紹介したい動画を見れます。</explanation>
    </div>
    <div v-if="youSeen" class="you-ex ex">
      <explanation>はやる前のyoutube動画が見れます。</explanation>
    </div>
    <div v-if="nicoSeen" class="nico-ex ex">
      <explanation>はやる前のニコニコ動画が見れます。</explanation>
    </div>
    <div v-if="upSeen" class="up-ex ex">
      <explanation>あなたのおすすめ動画を紹介できます。</explanation>
    </div> -->
  </div>
</template>

<style scoped>
.header {
  position: relative;
  background-color: rgb(59, 59, 59);
  height: 6rem;
  display: flex;
  justify-content: space-between;
  z-index: 6;
}
.open-header {
  background-color: rgb(58, 58, 58);
  height: 6rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}
.logo {
  position: absolute;
  width: 6rem;
  top: -3rem;
  left: 2rem;
}
.logo:hover {
  position: absolute;
  width: 7rem;
  top: -4rem;
  left: 2rem;
  cursor: pointer;
}
.product-name {
  line-height: 6rem;
  font-size: 3.5rem;
  color: white;
}
.toUpload {
  background-color: white;
  height: 3rem;
  width: 3rem;
  margin: 1.1rem;
  border-radius: 50%;
  position: relative;
  border: 0.3rem solid;
}
.toUpload:hover {
  height: 4rem;
  width: 4rem;
  margin: 0.5rem;
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
  margin: 1.5rem 3rem;
}
.menu-mark:hover {
  width: 3.5rem;
  height: 3.5rem;
  margin: 1rem 2.75rem;
  cursor: pointer;
}
.menu {
  position: fixed;
  width: 23.315rem;
  height: 100%;
  background-color: rgb(255, 255, 255);
  transform: translateX(100%);
  top: 6rem;
  right: 0;
  transition: all 0.5s;
  z-index: 2;
  border: 0.4rem solid rgb(58, 58, 58);
}
.open-menu {
  transform: translateX(0);
}
.menu-list li {
  position: relative;
  height: 10rem;
  font-size: 3.8rem;
  border-bottom: 0.2rem solid black;
  padding: 2rem 6rem;
}
.menu-list li h3 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.menu-list li:hover {
  position: relative;
  font-size: 4.4rem;
  border-bottom: 0.2rem solid black;
  padding: 2rem 5.5rem;
}
.menu-list li:hover::before {
  position: absolute;
  left: 0;
  transform: translateX(-100%);
  background-color: white;
  width: 30rem;
  height: 7.8rem;
  border-radius: 50%;
  z-index: 1;
  line-height: 7.8rem;
  text-align: center;
  font-size: 1.5rem;
}
.min-li:hover::before {
  content: "みんなが紹介したい動画を見れます。";
}
.you-li:hover::before {
  content: "はやる前のyoutube動画が見れます。";
}
.nico-li:hover::before {
  content: "はやる前のニコニコ動画が見れます。";
}
.toukou-li:hover::before{
  content: "あなたの紹介したい動画を投稿できます。";
}
.curten {
  position: fixed;
  top: 6rem;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.5;
  z-index: 0.5;
}
@media screen and (max-width: 600px) {
  .product-name {
    font-size: 0rem;
  }
  .menu {
    width: 10rem;
  }
  .menu li {
    font-size: 2rem;
  }
}
</style>

<script>
// import explanation from "@/components/Explanation.vue"

export default {
  components: {
    // explanation,
  },
  data() {
    return {
      curtenSwitch: false,
    }
  },
  methods: {
    switchMenu() {
      const menu = document.getElementById("menu")
      menu.classList.toggle("open-menu")
      const header = document.getElementById("header")
      header.classList.toggle("open-header")
      this.curtenSwitch = !this.curtenSwitch
      this.$emit("headerSwitch")
    },
  },
}
</script>
