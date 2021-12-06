<template>
  <div class="to-nico-list">
    <div class="contents">
      <h2 class="title">ニコニコ動画発掘</h2>
      <div class="search">
        <input type="text" value="初音ミク" v-model="que" />

        <input type="checkbox" id="title" value="title" v-model="Targets" />
        <label for="title">タイトル</label>
        <input
          type="checkbox"
          id="description"
          value="description"
          v-model="Targets"
        />
        <label for="description">説明文</label>
        <input type="checkbox" id="tags" value="tags" v-model="Targets" />
        <label for="tags">タグ</label>
        <Nico v-bind:query="que" v-bind:Targets="Targets" />
      </div>
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
  data() {
    return {
      que: "初音ミク",
      Targets: [],
    }
  },
}
</script>
