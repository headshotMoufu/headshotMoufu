<template>
  <div class="upload-list">
    <div class="contents">
      <h2 class="title">みんなのおすすめ</h2>
      <div class="recommend">
        <ul class="bg">
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
        <div v-for="data in datas" v-bind:key="data.outputId">
          <div class="list">
            <a :href="data.outputLink">
              <ul>
                <li class="comment">{{ data.outputComment }}</li>
                <li class="date">{{ data.outputTimestamp }}</li>
              </ul>
            </a>
          </div>
          <!-- <div class="post-in-lists-r" v-if="postInLists">
            <a :href="data.outputLink">
              <postInListsR>
                <ul>
                  <li class="">{{ data.outputComment }}</li>
                </ul>
              </postInListsR>
            </a>
          </div>
          <div class="post-in-lists-l" v-else>
            <a :href="data.outputLink">
              <postInListsL>
                <ul>
                  <li class="">{{ data.outputComment }}</li>
                </ul>
              </postInListsL>
            </a>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: black;
}
.contents {
  padding: 5rem;
  background-color: white;
}
.bg li {
  position: absolute;
  background-color: rgb(167, 167, 167);
  border-radius: 50%;
  animation: forwards linear infinite running;
  z-index: 1;
  opacity: 0.4;
}
.bg li:nth-child(1) {
  left: 8%;
  height: 5rem;
  width: 5rem;
  animation-name: bg1;
  animation-duration: 15s;
  animation-delay: -9s;
  background-color: rgb(167, 167, 167);
}
.bg li:nth-child(2) {
  left: 15%;
  height: 3rem;
  width: 3rem;
  animation-name: bg2;
  animation-duration: 23s;
  animation-delay: -7s;
  background-color: rgb(216, 215, 215);
}
.bg li:nth-child(3) {
  left: 23%;
  height: 8rem;
  width: 8rem;
  animation-name: bg1;
  animation-duration: 13s;
  animation-delay: -16s;
  background-color: rgb(167, 167, 167);
}
.bg li:nth-child(4) {
  left: 30%;
  height: 6rem;
  width: 6rem;
  animation-name: bg2;
  animation-duration: 14s;
  animation-delay: -14s;
  background-color: rgb(216, 215, 215);
}
.bg li:nth-child(5) {
  left: 45%;
  height: 2rem;
  width: 2rem;
  animation-name: bg1;
  animation-duration: 18s;
  animation-delay: -19s;
  background-color: rgb(167, 167, 167);
}
.bg li:nth-child(6) {
  left: 53%;
  height: 9rem;
  width: 9rem;
  animation-name: bg2;
  animation-duration: 18s;
  animation-delay: -14s;
  background-color: rgb(216, 215, 215);
}
.bg li:nth-child(7) {
  left: 60%;
  height: 5rem;
  width: 5rem;
  animation-name: bg1;
  animation-duration: 13s;
  animation-delay: -4s;
  background-color: rgb(167, 167, 167);
}
.bg li:nth-child(8) {
  left: 75%;
  height: 6rem;
  width: 6rem;
  animation-name: bg2;
  animation-duration: 15s;
  animation-delay: -11s;
  background-color: rgb(216, 215, 215);
}
.bg li:nth-child(9) {
  left: 85%;
  height: 2rem;
  width: 2rem;
  animation-name: bg1;
  animation-duration: 17s;
  animation-delay: -18s;
  background-color: rgb(167, 167, 167);
}
.bg li:nth-child(10) {
  left: 85%;
  height: 8rem;
  width: 8rem;
  animation-name: bg2;
  animation-duration: 12s;
  animation-delay: -4s;
  background-color: rgb(216, 215, 215);
}
.bg li:nth-child(11) {
  left: 16%;
  height: 8rem;
  width: 8rem;
  animation-name: bg1;
  animation-duration: 20s;
  animation-delay: -1s;
  background-color: rgb(105, 104, 104);
}
.bg li:nth-child(12) {
  left: 21%;
  height: 6rem;
  width: 6rem;
  animation-name: bg2;
  animation-duration: 23s;
  animation-delay: -8s;
  background-color: rgb(56, 55, 55);
}
.bg li:nth-child(13) {
  left: 30%;
  height: 3rem;
  width: 3rem;
  animation-name: bg1;
  animation-duration: 18s;
  animation-delay: -11s;
  background-color: rgb(105, 104, 104);
}
.bg li:nth-child(14) {
  left: 43%;
  height: 4rem;
  width: 4rem;
  animation-name: bg2;
  animation-duration: 16s;
  animation-delay: -20s;
  background-color: rgb(56, 55, 55);
}
.bg li:nth-child(15) {
  left: 50%;
  height: 5rem;
  width: 5rem;
  animation-name: bg1;
  animation-duration: 21s;
  animation-delay: -5s;
  background-color: rgb(105, 104, 104);
}
.bg li:nth-child(16) {
  left: 58%;
  height: 3rem;
  width: 3rem;
  animation-name: bg2;
  animation-duration: 20s;
  animation-delay: -0s;
  background-color: rgb(56, 55, 55);
}
.bg li:nth-child(17) {
  left: 65%;
  height: 8rem;
  width: 8rem;
  animation-name: bg1;
  animation-duration: 19s;
  animation-delay: -9s;
  background-color: rgb(105, 104, 104);
}
.bg li:nth-child(18) {
  left: 71%;
  height: 1rem;
  width: 1rem;
  animation-name: bg2;
  animation-duration: 14s;
  animation-delay: -2s;
  background-color: rgb(56, 55, 55);
}
.bg li:nth-child(19) {
  left: 75%;
  height: 4rem;
  width: 4rem;
  animation-name: bg1;
  animation-duration: 17s;
  animation-delay: -16s;
  background-color: rgb(105, 104, 104);
}
.bg li:nth-child(20) {
  left: 8%;
  height: 3rem;
  width: 3rem;
  animation-name: bg2;
  animation-duration: 20s;
  animation-delay: -23s;
  background-color: rgb(56, 55, 55);
}
@keyframes bg1 {
  0% {
    top: 30%;
  }
  15% {
    top: 0;
    transform: translateY(0%);
  }
  65% {
    top: 100%;
    transform: translateY(-100%);
  }
  100% {
    top: 35%;
  }
}
@keyframes bg2 {
  0% {
    top: 82%;
  }
  9% {
    top: 100%;
    transform: translateY(-100%);
  }
  59% {
    top: 0;
    transform: translateY(0%);
  }
  100% {
    top: 82%;
  }
}
.title {
  color: rgb(61, 61, 61);
  font-size: 3rem;
  margin-bottom: 10rem;
}
.recommend {
  margin: 1rem;
  padding: 0 20rem;
}
.list {
  position: relative;
  height: 5rem;
  margin: 0 auto;
  background-color: rgb(211, 211, 211);
  padding: 2rem;
  border-bottom: 0.1rem dotted black;
  margin: 1rem;
}
.list ul {
  line-height: 5rem;
}
.comment {
  font-size: 2rem;
}
.comment:hover {
  line-height: 5rem;
  font-size: 2.1rem;
}
.date {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 1.25rem;
  height: 3rem;
}
</style>

<script>
import { collection, getDocs, orderBy } from "firebase/firestore"
import { db } from "@/firebase.js"

export default {
  data() {
    return {
      datas: [],
      postInLists: true,
    }
  },
  async created() {
    const querySnapshot = await getDocs(
      collection(db, "messages"),
      orderBy("timestamp", "desc")
    )
    querySnapshot.forEach((doc) => {
      this.datas.push({
        outputComment: doc.data().comments,
        outputLink: doc.data().links,
        outputId: doc.id,
        outputTimestamp:
          doc.data().timestamp &&
          doc.data().timestamp.toDate &&
          doc.data().timestamp.toDate(),
      })
      const changeDate = this.datas.sort(
        (a, b) => b.outputTimestamp - a.outputTimestamp
      )
      console.log(changeDate)
      console.log(doc.data().timestamp)
    })
  },
}
</script>
