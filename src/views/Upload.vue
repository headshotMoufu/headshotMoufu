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
          placeholder="コメントを入力"
          class="input-comment"
          id="inputComment"
        ></textarea>
        <button type="submit" class="submit" id="submit">送信</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.upload {
  position: absolute;
  top: 0;
  background-color: rgb(184, 184, 184);
  width: 100%;
  text-align: center;
  z-index: 5;
}
.title {
  padding-top: 15rem;
  font-size: 5rem;
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
  width: 50%;
  margin-bottom: 5rem;
  font-size: 2rem;
}
.input-comment {
  margin-bottom: 5rem;
  height: 20rem;
  width: 50%;
  font-size: 3rem;
}
.submit {
  font-size: 2rem;
  display: block;
  margin: 5rem auto 10rem;
}
</style>

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
      if (this.inputLink.includes("https://") === false) {
        window.alert("再入力してください")
        this.inputComment = ""
        this.inputLink = ""
      } else {
        const docRef = await addDoc(collection(db, "messages"), {
          comments: this.inputComment,
          links: this.inputLink,
        })

        this.inputComment = ""
        this.inputLink = ""
        console.log(docRef)
      }
    },
  },
}
</script>
