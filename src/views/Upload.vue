<template>
  <div class="upload">
    <h1 class="title">投稿画面</h1>
    <div class="form">
      <div class="small-title">動画URL</div>
      <input
        v-model="inputLink"
        class="input-url"
        id="inputUrl"
        name="inputUrl"
        placeholder="urlを入力"
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
      <button type="submit" class="submit" id="submit" v-on:click="postMessage">
        送信
      </button>
    </div>
  </div>
</template>
<script>
// import { initializeApp } from "firebase/app"
import { collection, addDoc } from "firebase/firestore"
import { db } from "@/firebase.js"

export default {
  data() {
    return {
      // messages: [],
      inputComment: "",
      inputLink: "",
    }
  },
  methods: {
    async postMessage() {
      const docRef = await addDoc(collection(db, "messages"), {
        comments: this.inputComment,
        links: this.inputLink,
      })
      this.messages.push(docRef)

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
  // async created() {
  //   const querySnapshot = await getDocs(collection(db, "messages"))
  //   querySnapshot.forEach((doc) => {
  //     console.log(doc.id)
  //   })
  // },

  //     if (docSnap.exists()) {
  //       console.log("Document data:", docSnap.data())
  //     }
  //   },
  // }
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
