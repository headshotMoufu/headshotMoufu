<template>
  <div class="upload">
    <h1 class="title">投稿画面</h1>
    <div class="form">
      <form v-on:submit.prevent="postMessage">
        <div class="small-title">動画URL</div>
        <input
          v-model="inputLink"
          class="input-url"
          id="inputUrl"
          name="inputUrl"
          placeholder="urlを入力"
          type="url"
          required
        />
        <div class="small-title">コメント</div>
        <textarea
          v-model="inputComment"
          name="inputComment"
          class="input-comment"
          id="inputComment"
          cols="50"
          rows="5"
        ></textarea>
        <button type="submit" class="submit" id="submit" @click="postMessage">
          送信
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import { collection, addDoc } from "firebase/firestore"
import { db } from "@/firebase.js"

export default {
  data() {
    return {
      inputComment: "",
      inputLink: "",
    }
  },
  methods: {
    async postMessage() {
      // if (this.inputLink != location.href)
      const docRef = await addDoc(collection(db, "messages"), {
        comments: this.inputComment,
        links: this.inputLink,
      })

      this.inputComment = ""
      this.inputLink = ""
      console.log(docRef)
    },
  },
}
</script>

<style scoped>
.upload {
  width: 100%;
  text-align: center;
}
.title {
  font-size: 3rem;
}
.form {
  padding-top: 6rem;
}
.small-title {
  font-size: 3rem;
  margin-bottom: 3rem;
}
.input-url {
  height: 3rem;
  width: 78rem;
  margin-bottom: 5rem;
  font-size: 2rem;
}
.input-comment {
  margin-bottom: 5rem;
  font-size: 3rem;
}
.submit {
  font-size: 2rem;
  display: block;
  margin: 0 auto;
}
</style>
