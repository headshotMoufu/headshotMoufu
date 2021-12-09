<template>
  <div class="home">
    <div class="recommend">
      <h2 class="title">今週のおすすめ</h2>
      <div class="list">
        <videoInLists
          ><ul>
            <li>サムネ</li>
            <li>タイトル</li>
            <li>再生数</li>
            <li>etc..</li>
          </ul></videoInLists
        >
        <videoInLists
          ><ul>
            <li>サムネ</li>
            <li>タイトル</li>
            <li>再生数</li>
            <li>etc..</li>
          </ul></videoInLists
        >
        <videoInLists
          ><ul>
            <li>サムネ</li>
            <li>タイトル</li>
            <li>再生数</li>
            <li>etc..</li>
          </ul></videoInLists
        >
        <videoInLists
          ><ul>
            <li>サムネ</li>
            <li>タイトル</li>
            <li>再生数</li>
            <li>etc..</li>
          </ul></videoInLists
        >
        <videoInLists
          ><ul>
            <li>サムネ</li>
            <li>タイトル</li>
            <li>再生数</li>
            <li>etc..</li>
          </ul></videoInLists
        >
        <videoInLists
          ><ul>
            <li>サムネ</li>
            <li>タイトル</li>
            <li>再生数</li>
            <li>etc..</li>
          </ul></videoInLists
        >
        <videoInLists
          ><ul>
            <li>サムネ</li>
            <li>タイトル</li>
            <li>再生数</li>
            <li>etc..</li>
          </ul></videoInLists
        >
        <videoInLists
          ><ul>
            <li>サムネ</li>
            <li>タイトル</li>
            <li>再生数</li>
            <li>etc..</li>
          </ul></videoInLists
        >
        <videoInLists
          ><ul>
            <li>サムネ</li>
            <li>タイトル</li>
            <li>再生数</li>
            <li>etc..</li>
          </ul></videoInLists
        >
        <videoInLists
          ><ul>
            <li>サムネ</li>
            <li>タイトル</li>
            <li>再生数</li>
            <li>etc..</li>
          </ul></videoInLists
        >
      </div>
    </div>
    <div class="question">
      <div class="bg">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <h1 class="question-text">
        インフルエンサーを<br />あなたの手で生み出しませんか？
      </h1>
      <div class="arrow"></div>
      <transition name="first">
        <div v-show="firstVisible" class="fade-in-left" id="fade-in-left">
          <div class="text-left">
            <h1>
              このアプリでは、あなたが見つけた、まだ世の中に広まっていないけど面白い動画を皆に紹介できます。もちろん、同様に他の人が紹介している動画を見ることもでき、<br />あなたの動画ライフをより満喫させるでしょう。
              <!-- <br>
            ここであなたの推しをバズらせて応援するもよし、近い未来にバズる方の古参になるもよし。<br>
            さあ、これを見ているあなた自身の手でインフルエンサーをつくり上げてください！ -->
            </h1>
          </div>
        </div>
      </transition>
      <transition name="second">
        <div v-show="secondVisible" class="fade-in-right">
          <div class="text-right">
            <h1>
              ここであなたの推しをバズらせて応援するもよし、近い未来にバズる方の古参になるもよし。
            </h1>
          </div>
        </div>
      </transition>
      <transition name="last">
        <div v-show="lastVisible" class="fade-in-last">
          <div class="text-last">
            <h1>
              これを見ているあなたの手で<br />インフルエンサーをつくり上げてください！
            </h1>
          </div>
        </div>
      </transition>
    </div>
    <div class="menu-list">
      <div class="menu-container">
        <router-link class="router-link" to="/uploadList">
          <div class="menu">
            <h2 class="menu-title">みんなのおすすめ</h2>
            <div class="menu-text">
              ここではみんなのおすすめ動画を見ることができます。また、<router-link
                to="/upload"
                class="router-link"
                ><span>ここ </span></router-link
              >をクリックする、もしくは上部のプラスボタンを押すことであなたのおすすめ動画を投稿することができます。
            </div>
          </div>
        </router-link>
        <router-link class="router-link" to="/toYoutubeList">
          <div class="menu">
            <h2 class="menu-title">YouTube動画発掘</h2>
            <div class="menu-text">ここではユーチューブで～</div>
          </div></router-link
        >
        <router-link class="router-link" to="/toNicoList"
          ><div class="menu">
            <h2 class="menu-title">ニコニコ動画発掘</h2>
            <div class="menu-text">ここではニコニコ動画で～</div>
          </div></router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  position: relative;
}
.recommend {
  width: 100%;
}
.title {
  font-size: 2rem;
  margin: 0 5rem 5rem 5rem;
}
.list {
  margin: 5rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 5rem;
  row-gap: 3rem;
}
.question {
  position: relative;
  background-color: rgb(255, 254, 254);
  width: 100%;
  height: 100rem;
  text-align: center;
}
.bg {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
}
.circles {
  position: relative;
  height: 100%;
}
.circles li {
  position: absolute;
  background-color: rgb(167, 167, 167);
  border-radius: 50%;
  animation: circles linear infinite alternate running;
  z-index: 1;
  opacity: 0;
}
.circles li:nth-child(1) {
  left: 8%;
  height: 5rem;
  width: 5rem;
  animation-duration: 15s;
  animation-delay: 9s;
  background-color: rgb(167, 167, 167);
}
.circles li:nth-child(2) {
  left: 15%;
  height: 3rem;
  width: 3rem;
  animation-duration: 23s;
  animation-delay: 7s;
  background-color: rgb(216, 215, 215);
}
.circles li:nth-child(3) {
  left: 23%;
  height: 8rem;
  width: 8rem;
  animation-duration: 13s;
  animation-delay: 16s;
  background-color: rgb(167, 167, 167);
}
.circles li:nth-child(4) {
  left: 30%;
  height: 6rem;
  width: 6rem;
  animation-duration: 14s;
  animation-delay: 14s;
  background-color: rgb(216, 215, 215);
}
.circles li:nth-child(5) {
  left: 45%;
  height: 2rem;
  width: 2rem;
  animation-duration: 18s;
  animation-delay: 19s;
  background-color: rgb(167, 167, 167);
}
.circles li:nth-child(6) {
  left: 53%;
  height: 9rem;
  width: 9rem;
  animation-duration: 18s;
  animation-delay: 14s;
  background-color: rgb(216, 215, 215);
}
.circles li:nth-child(7) {
  left: 60%;
  height: 5rem;
  width: 5rem;
  animation-duration: 13s;
  animation-delay: 4s;
  background-color: rgb(167, 167, 167);
}
.circles li:nth-child(8) {
  left: 75%;
  height: 6rem;
  width: 6rem;
  animation-duration: 15s;
  animation-delay: 11s;
  background-color: rgb(216, 215, 215);
}
.circles li:nth-child(9) {
  left: 85%;
  height: 2rem;
  width: 2rem;
  animation-duration: 17s;
  animation-delay: 18s;
  background-color: rgb(167, 167, 167);
}
.circles li:nth-child(10) {
  left: 85%;
  height: 8rem;
  width: 8rem;
  animation-duration: 12s;
  animation-delay: 4s;
  background-color: rgb(216, 215, 215);
}
.circles li:nth-child(11) {
  left: 16%;
  height: 8rem;
  width: 8rem;
  animation-duration: 20s;
  animation-delay: 1s;
  background-color: rgb(105, 104, 104);
}
.circles li:nth-child(12) {
  left: 21%;
  height: 6rem;
  width: 6rem;
  animation-duration: 23s;
  animation-delay: 8s;
  background-color: rgb(56, 55, 55);
}
.circles li:nth-child(13) {
  left: 30%;
  height: 3rem;
  width: 3rem;
  animation-duration: 18s;
  animation-delay: 11s;
  background-color: rgb(105, 104, 104);
}
.circles li:nth-child(14) {
  left: 43%;
  height: 4rem;
  width: 4rem;
  animation-duration: 16s;
  animation-delay: 20s;
  background-color: rgb(56, 55, 55);
}
.circles li:nth-child(15) {
  left: 50%;
  height: 5rem;
  width: 5rem;
  animation-duration: 21s;
  animation-delay: 5s;
  background-color: rgb(105, 104, 104);
}
.circles li:nth-child(16) {
  left: 58%;
  height: 3rem;
  width: 3rem;
  animation-duration: 20s;
  animation-delay: 0s;
  background-color: rgb(56, 55, 55);
}
.circles li:nth-child(17) {
  left: 65%;
  height: 8rem;
  width: 8rem;
  animation-duration: 19s;
  animation-delay: 9s;
  background-color: rgb(105, 104, 104);
}
.circles li:nth-child(18) {
  left: 71%;
  height: 1rem;
  width: 1rem;
  animation-duration: 14s;
  animation-delay: 2s;
  background-color: rgb(56, 55, 55);
}
.circles li:nth-child(19) {
  left: 75%;
  height: 4rem;
  width: 4rem;
  animation-duration: 17s;
  animation-delay: 16s;
  background-color: rgb(105, 104, 104);
}
.circles li:nth-child(20) {
  left: 8%;
  height: 3rem;
  width: 3rem;
  animation-duration: 20s;
  animation-delay: 23s;
  background-color: rgb(56, 55, 55);
}
@keyframes circles {
  0% {
    margin-top: 18%;
    opacity: 0;
  }
  15% {
    margin-top: 0;
    opacity: 0.6;
  }
  66% {
    margin-top: 81%;
    opacity: 0.6;
  }
  100% {
    margin-top: 40%;
    opacity: 0.6;
  }
}
.question-text {
  position: relative;
  color: rgb(65, 65, 65);
  font-size: 5rem;
  padding-top: 5rem;
  z-index: 5;
}
.arrow {
  position: absolute;
  border-top: 20px solid black;
  border-right: 20px solid;
  border-left: 20px solid;
  width: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: arrow 0.5s ease-in infinite alternate none running;
}
@keyframes arrow {
  0% {
    margin-top: 0.5rem;
    border-top-color: rgb(134, 134, 134);
  }
  100% {
    margin-top: 1.5rem;
    border-top-color: rgb(141, 141, 141);
  }
}
.fade-in-left {
  position: relative;
  margin-top: 8rem;
  background-color: rgb(131, 131, 131);
  font-size: 6rem;
  padding: 5rem;
  clip-path: polygon(0% 20%, 70% 20%, 85% 95%, 0% 95%);
  z-index: 5;
}
.first-leave-active,
.first-enter-active {
  transition: opacity 1s, transform 1s;
}
.first-enter,
.first-leave-to {
  opacity: 0;
  transform: translateX(-85%);
}
.first-enter-to,
.first-leave {
  transform: transalate(0);
}
.fade-in-right {
  position: relative;
  margin-top: 8rem;
  background-color: rgb(131, 131, 131);
  font-size: 6rem;
  padding: 2rem;
  clip-path: polygon(30% 0%, 100% 0%, 100% 95%, 15% 95%);
  z-index: 5;
}
.second-leave-active,
.second-enter-active {
  transition: opacity 1s, transform 1s;
}
.second-enter,
.second-leave-to {
  opacity: 0;
  transform: translateX(85%);
}
.second-enter-to,
.second-leave {
  transform: transalate(0);
}
.fade-in-last {
  position: relative;
  width: 80%;
  background-color: rgb(85, 85, 85);
  margin: 20rem auto;
  padding: 8rem;
  border-radius: 50%;
  z-index: 5;
}
.last-leave-active,
.last-enter-active {
  transition: opacity 1s, transform 1s;
}
.last-enter-to,
.last-leave {
  transform: scale(1);
  font-size: 15rem;
}
.last-enter,
.last-leave-to {
  opacity: 0;
  transform: scale(0);
}
.text-left {
  padding-top: 3rem;
}
.text-last {
  font-size: 8rem;
}
.text-left h1 {
  text-align: left;
  margin-right: 30%;
}
.text-right h1 {
  text-align: right;
  margin-left: 30%;
}
.menu-list {
  position: absolute;
  background-color: rgb(75, 75, 75);
  height: 44rem;
  top: 168rem;
  left: 0;
  right: 0;
  padding: 2rem 0;
  color: black;
}
.menu-container {
  background-color: rgb(126, 126, 126);
  display: grid;
  height: 28rem;
  grid-template-rows: 20rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8rem;
  padding: 8rem;
}
.menu {
  font-size: 3rem;
  transform: scale(1);
  transition: transform 0.5s;
  cursor: pointer;
}
.menu:hover {
  transform: scale(1.1);
}
.menu-title {
  background-color: rgb(75, 75, 75);
  padding: 2rem;
  text-align: center;
  color: white;
}
.menu-text {
  background-color: white;
  padding: 2rem;
}
.menu-text span {
  font-size: 2rem;
  color: blue;
}
</style>

<script>
import videoInLists from "@/components/VideoInLists.vue"
export default {
  components: {
    videoInLists,
  },
  data() {
    return {
      firstVisible: false,
      secondVisible: false,
      lastVisible: false,
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
      if (!this.firatVisible) {
        this.firstVisible = window.scrollY > 100
      } else if (window.scrollY < 90) {
        this.firstVisible = !this.firstVisible
      }
      if (!this.secondVisible) {
        this.secondVisible = window.scrollY > 300
      } else if (window.scrollY < 100) {
        this.secondVisible = !this.secondVisible
      }
      if (!this.lastVisible) {
        this.lastVisible = window.scrollY > 700
      } else if (window.scrollY < 650) {
        this.lastVisible = !this.lastVisible
      }
    },
  },
}
</script>
