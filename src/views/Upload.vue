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
        cols="90"
        rows="10"
      ></textarea>
      <button type="submit" class="submit" id="submit">送信</button>
    </div>
  </div>
</template>
<script>
import { doc, setDoc } from "firebase/firestore"

export default {
  data() {
    return {
      messsages: [],
    }
  },
  methods: {
    postMessage() {
      const data = { text: "こんにちは、メッセージの本文です。" }
      firebase
        .firestore()
        .collection("messages")
        .add(data)
        .then(() => {
          this.messages.push(data)
        })
    },
  },
}
</script>

<style scoped>
.upload {
  width: 100%;
  text-align: center;
  padding: 5rem 0;
  background-color: rgb(255, 255, 224);
}
.title {
  font-size: 4rem;
}
.form {
  padding-top: 7rem;
}
.small-title {
  font-size: 3rem;
  margin-bottom: 3rem;
}
.input-url {
  height: 3rem;
  width: 50rem;
  margin-bottom: 50em;
}
.input-comment {
  margin-bottom: 5rem;
}
.submit {
  font-size: 2rem;
  display: block;
  margin: 0 auto;
}
</style>
