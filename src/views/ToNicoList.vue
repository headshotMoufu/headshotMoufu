<template>
  <div class="to-nico-list">
    <div class="contents">
      <h2 class="title">ニコニコ動画発掘</h2>
      <div class="search">
        <div>
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
        </div>
        <div></div>
        <Nico v-bind:query="que" v-bind:Targets="Targets" />
      </div>

      <div v-if="this.MovieData">
        <div class="recommend">
          <div v-for="(movie, index) in MovieData" v-bind:key="index">
            <videoInLists
              ><ul>
                <li><img :src="movie.thumbUrl" /></li>
                <li>{{ movie.title }}</li>
                <li>再生数</li>
                <li>etc..</li>
              </ul></videoInLists
            >
          </div>
        </div>

        <div class="etc">...</div>
      </div>
    </div>
  </div>
</template>

<script>
import videoInLists from "@/components/VideoInLists.vue"
import Nico from "@/components/NicoGet.vue"

export default {
  components: {
    videoInLists,
    Nico,
  },
  data() {
    return {
      GetMovie: false,
      que: "初音ミク",
      Targets: [],
      Filters: [],
      MovieData: [],
    }
  },
}
</script>

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
  column-gap: 7rem;
  row-gap: 10rem;
}
.video-in-lists {
  border: 0.2rem solid;
  height: 10rem;
}
.etc {
  text-align: center;
  line-height: 10rem;
  font-size: 5rem;
}
</style>
