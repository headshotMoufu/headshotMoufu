<template>
  <div class="upload-list">
    <div class="contents">
      <h2 class="title">みんなのおすすめ</h2>
      <div class="recommend">
        <div v-for="data in datas" v-bind:key="data.outputId">
          <a :href="data.outputLink">
            <videoInLists>
              <ul>
                <li class="">{{ data.outputComment }}</li>
              </ul>
            </videoInLists>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.upload-list {
  display: flex;
}
.contents {
  width: 100%;
}
.title {
  font-size: 2rem;
  margin-bottom: 5rem;
}
.recommend {
  margin: 1rem;
  padding: 0 20rem;
  display: grid;
  grid-template-columns: repeat(1fr);
  row-gap: 3rem;
}
.etc {
  text-align: center;
  line-height: 10rem;
  font-size: 5rem;
}
</style>

<script>
import videoInLists from "@/components/VideoInLists"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/firebase.js"

export default {
  components: {
    videoInLists,
  },

  data() {
    return {
      datas: [],
    }
  },
  async created() {
    const querySnapshot = await getDocs(collection(db, "messages"))
    querySnapshot.forEach((doc) => {
      this.datas.push({
        outputComment: doc.data().comments,
        outputLink: doc.data().links,
        outputId: doc.id,
      })
    })
  },
}
</script>
