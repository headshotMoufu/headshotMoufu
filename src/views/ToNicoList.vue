<template>
  <div class="nico-list">
    <h1 class="title">ニコ動発掘</h1>
    <videoInLists class="video-in-lists"
      ><ul>
        <li>タイトル</li>
        <li>サムネ</li>
        <li>再生数</li>
        <li>etc..</li>
      </ul></videoInLists
    >
    <videoInLists class="video-in-lists"
      ><ul>
        <li>タイトル</li>
        <li>サムネ</li>
        <li>再生数</li>
        <li>etc..</li>
      </ul></videoInLists
    >
    <videoInLists class="video-in-lists"
      ><ul>
        <li>タイトル</li>
        <li>サムネ</li>
        <li>再生数</li>
        <li>etc..</li>
      </ul></videoInLists
    >
    <videoInLists class="video-in-lists"
      ><ul>
        <li>タイトル</li>
        <li>サムネ</li>
        <li>再生数</li>
        <li>etc..</li>
      </ul></videoInLists
    >
    <videoInLists class="video-in-lists"
      ><ul>
        <li>タイトル</li>
        <li>サムネ</li>
        <li>再生数</li>
        <li>etc..</li>
      </ul></videoInLists
    >
    <videoInLists class="video-in-lists"
      ><ul>
        <li>タイトル</li>
        <li>サムネ</li>
        <li>再生数</li>
        <li>etc..</li>
      </ul></videoInLists
    >
    <videoInLists class="video-in-lists"
      ><ul>
        <li>タイトル</li>
        <li>サムネ</li>
        <li>再生数</li>
        <li>etc..</li>
      </ul></videoInLists
    >
    <videoInLists class="video-in-lists"
      ><ul>
        <li>タイトル</li>
        <li>サムネ</li>
        <li>再生数</li>
        <li>etc..</li>
      </ul></videoInLists
    >
  </div>
</template>

<style scoped>
.nico-list {
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
import videoInLists from "@/components/VideoInLists"

export default {
  components: {
    videoInLists,
  },
}
</script>
