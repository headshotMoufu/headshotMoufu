<template>
  <div class="to-nico-list">
    <div class="contents">
      <h2 class="title">ニコニコ動画発掘</h2>
      <div class="recommend">
        <videoInLists
          ><ul>
            <li>サムネ</li>
            <li>タイトル</li>
            <li>再生数</li>
            <li>etc..</li>
          </ul></videoInLists
        >
        <videoInLists
          ><ul>
            <li>サムネ</li>
            <li>タイトル</li>
            <li>再生数</li>
            <li>etc..</li>
          </ul></videoInLists
        >
        <videoInLists
          ><ul>
            <li>サムネ</li>
            <li>タイトル</li>
            <li>再生数</li>
            <li>etc..</li>
          </ul></videoInLists
        >
        <videoInLists
          ><ul>
            <li>サムネ</li>
            <li>タイトル</li>
            <li>再生数</li>
            <li>etc..</li>
          </ul></videoInLists
        >
        <videoInLists
          ><ul>
            <li>サムネ</li>
            <li>タイトル</li>
            <li>再生数</li>
            <li>etc..</li>
          </ul></videoInLists
        >

        <div class="etc">...</div>
      </div>
    </div>
    <Nico />
  </div>
</template>

<style scoped>
.to-nico-list {
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
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 5rem;
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
import Nico from "@/components/NicoGet.vue"

export default {
  components: {
    videoInLists,
    Nico,
  },
}
</script>
