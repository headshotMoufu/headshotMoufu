<template>
  <div class="upload">
    <h1 class="title">投稿画面</h1>
    <div class="form">
      <div class="small-title">動画URL</div>
      <input
        class="input-url"
        id="inputUrl"
        name="inputUrl"
        placeholder="urlを入力"
        required
      />
      <div class="small-title">コメント</div>
      <textarea
        name="inputComment"
        class="input-comment"
        id="inputComment"
        cols="50"
        rows="5"
      ></textarea>
      <button type="submit" class="submit" id="submit" @click="postMassage">
        送信
      </button>
    </div>
  </div>
</template>
<script>
// import { initializeApp } from "firebase/app"
import { collection, addDoc } from "firebase/firestore"
import { db } from "@/firebase.js"
import { doc, getDoc } from "firebase/firestore"

export default {
  data() {
    return {
      messages: [],
    }
  },
  methods: {
    async postMessage() {
      const docRef = await addDoc(collection(db, "messages"), {
        comments: "あかさたな",
        links: "hamayarawa",
      })
      this.masseages.push(docRef)

      // const data = { text: "こんにちは、メッセージの本文です。" }
      // firebase
      //   .firestore()
      //   .collection("messages")
      //   .add(data)
      //   .then(() => {
      //     this.messages.push(data)
      //   })
    },
  },
  async created() {
    const docRef = doc(db, "messages")
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data())
    }
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

<script></script>
