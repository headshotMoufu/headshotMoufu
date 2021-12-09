<template>
  <div class="upload">
    <h1 class="title">投稿画面</h1>
    <div class="form">
      <div class="small-title">動画URL</div>
      <input class="input-url" id="inputUrl" name="inputUrl" required />
      <div class="small-title">コメント</div>
      <textarea
        name="inputComment"
        class="input-comment"
        id="inputComment"
        cols="50"
        rows="5"
      ></textarea>
      <button type="submit" class="submit" id="submit" @click="button">
        送信
      </button>
    </div>
  </div>
</template>

<style scoped>
.upload {
  height: 100vh;
  width: 100%;
  text-align: center;
}
.title {
  font-size: 3rem;
}
.form {
  padding: 6rem 0 3.4 rem;
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

<script>

export default {
  
  methods: {
  },
}
</script>
