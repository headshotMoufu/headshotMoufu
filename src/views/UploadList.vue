<template>
  <div class="upload-list">
    <h1 class="title">みんなのおすすめ</h1>
    <videoInLists class="video-in-lists"
      ><ul>
        <li>タイトル</li>
        <li>サムネ</li>
        <li>コメント</li>
        <li>etc..</li>
      </ul></videoInLists
    >
    <videoInLists class="video-in-lists"
      ><ul>
        <li>タイトル</li>
        <li>サムネ</li>
        <li>コメント</li>
        <li>etc..</li>
      </ul></videoInLists
    >
    <videoInLists class="video-in-lists"
      ><ul>
        <li>タイトル</li>
        <li>サムネ</li>
        <li>コメント</li>
        <li>etc..</li>
      </ul></videoInLists
    >
    <videoInLists class="video-in-lists"
      ><ul>
        <li>タイトル</li>
        <li>サムネ</li>
        <li>コメント</li>
        <li>etc..</li>
      </ul></videoInLists
    >
    <videoInLists class="video-in-lists"
      ><ul>
        <li>タイトル</li>
        <li>サムネ</li>
        <li>コメント</li>
        <li>etc..</li>
      </ul></videoInLists
    >
    <videoInLists class="video-in-lists"
      ><ul>
        <li>タイトル</li>
        <li>サムネ</li>
        <li>コメント</li>
        <li>etc..</li>
      </ul></videoInLists
    >
    <videoInLists class="video-in-lists"
      ><ul>
        <li>タイトル</li>
        <li>サムネ</li>
        <li>コメント</li>
        <li>etc..</li>
      </ul></videoInLists
    >
    <videoInLists class="video-in-lists"
      ><ul>
        <li>タイトル</li>
        <li>サムネ</li>
        <li>コメント</li>
        <li>etc..</li>
      </ul></videoInLists
    >
  </div>
</template>

<style scoped>
.upload-list {
  background-color: rgb(255, 255, 224);
  padding: 5rem;
}
.title {
  text-align: center;
  margin-bottom: 5rem;
  font-size: 4rem;
}
.video-in-lists {
  width: 50%;
  height: 20rem;
  margin: 0 auto 5rem;
}
</style>

<script>
import videoInLists from "@/components/videoInLists"

export default {
  components: {
    videoInLists,
  },
}
</script>
