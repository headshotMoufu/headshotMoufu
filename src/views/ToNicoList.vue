<template>
  <div class="to-nico-list">
    <div class="contents">
      <h2 class="title">ニコニコ動画発掘</h2>
      <div class="search">
        <div>
          <div class="searchtitle">検索ワード</div>
          <div class="searchBox">
            <input
              type="text"
              class="searchAreas"
              value="初音ミク"
              v-model="que"
            />
          </div>

          <div class="TagWord"><h3>検索対象</h3></div>
          <div class="TagBox">
            <input
              type="checkbox"
              class="choice"
              id="title"
              value="title"
              v-model="Targets"
            />
            <label for="title">タイトル</label>
            <input
              type="checkbox"
              class="choice"
              id="description"
              value="description"
              v-model="Targets"
            />
            <label for="description">説明文</label>
            <input
              type="checkbox"
              class="choice"
              id="tags"
              value="tags"
              v-model="Targets"
            />
            <label for="tags">タグ</label>
          </div>
        </div>
        <div>
          <div class="Sorts">
            <div class="TagWord">
              <h3>表示順</h3>
              <div class="TagBox">
                <input
                  type="radio"
                  class="choice"
                  id="many"
                  value="t"
                  v-model="SortsUB"
                />
                <label for="many">多い順</label>
                <input
                  type="radio"
                  class="choice"
                  id="less"
                  value="l"
                  v-model="SortsUB"
                />
                <label for="less">少ない順</label>
              </div>
            </div>
            <div class="TagBox">
              <input
                type="radio"
                class="choice"
                id="view"
                value="viewCounter"
                v-model="Sorts"
              />
              <label for="view">再生回数</label>
              <input
                type="radio"
                class="choice"
                id="mylist"
                value="mylistCounter"
                v-model="Sorts"
              />
              <label for="mylist">マイリスト数</label>
              <input
                type="radio"
                class="choice"
                id="iine"
                value="likeCounter"
                v-model="Sorts"
              />
              <label for="iine">いいね！数</label>
            </div>
          </div>
        </div>
        <Nico
          v-bind:query="que"
          v-bind:Targets="Targets"
          v-bind:Sorts="Sorts"
          v-bind:SortsUB="SortsUB"
        />
      </div>

      <div class="Movie50">
        <div class="kozan">今なら古参を名乗れる！50~1000再生の動画</div>
        <div class="recommend">
          <div v-for="(movie, index) in MovieData50" v-bind:key="index">
            <videoInLists
              ><ul>
                <li>
                  <div class="movieCenter"><img :src="movie.thumbUrl" /></div>
                </li>
                <li>
                  <a v-bind:href="movie.contentURL">{{ movie.title }}</a>
                </li>
                <li>{{ movie.contentId }}</li>
                <li>再生回数:{{ movie.viewCounter }}</li>
                <li>
                  マイリスト数:{{ movie.mylistCounter }}、いいね数:{{
                    movie.likeCounter
                  }}
                </li>
              </ul></videoInLists
            >
          </div>
        </div>
      </div>
      <div class="Movie1000">
        <div class="kozan">ブームに乗り遅れるな！1000~50000再生の動画</div>
        <div class="recommend">
          <div v-for="(movie, index) in MovieData1000" v-bind:key="index">
            <videoInLists
              ><ul>
                <li>
                  <div class="movieCenter">
                    <img :src="movie.thumbUrl" />
                  </div>
                </li>
                <li>
                  <a v-bind:href="movie.contentURL">{{ movie.title }}</a>
                </li>
                <li>{{ movie.contentId }}</li>
                <li>再生回数:{{ movie.viewCounter }}</li>
                <li>
                  マイリスト数:{{ movie.mylistCounter }}、いいね数:{{
                    movie.likeCounter
                  }}
                </li>
              </ul></videoInLists
            >
          </div>
        </div>
      </div>
      <div class="Movielast">
        <div class="kozan">
          誰かも注目してる！？今日の朝方に最新コメントのある動画(50~50000再生)
        </div>
        <div class="recommend">
          <div v-for="(movie, index) in MovieDatalast" v-bind:key="index">
            <videoInLists
              ><ul>
                <li>
                  <div class="movieCenter">
                    <img :src="movie.thumbUrl" />
                  </div>
                </li>
                <li>
                  <a v-bind:href="movie.contentURL">{{ movie.title }}</a>
                </li>
                <li>{{ movie.contentId }}</li>
                <li>再生回数:{{ movie.viewCounter }}</li>
                <li>
                  マイリスト数:{{ movie.mylistCounter }}、いいね数:{{
                    movie.likeCounter
                  }}
                </li>
                <li>
                  {{ movie.lastCommentTime }}
                </li>
              </ul></videoInLists
            >
          </div>
        </div>
      </div>

      <div class="etc">...</div>
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
      SortsUB: [],
      Sorts: [],
      MovieData50: [],
      MovieData1000: [],
      MovieDatalast: [],
    }
  },
}
</script>

>>>>>>> origin/master
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
  display: flex;
  justify-content: center;
}
.searchtitle {
  font-size: 2rem;
  display: flex;
  justify-content: center;
}
.searchAreas {
  display: flex;
  font-size: 2rem;
}

.searchBox {
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.TagWord {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.TagBox {
  display: flex;
  justify-content: center;
  align-items: center;
}
.Sorts {
  margin: 1rem;
}
.choice {
  margin-left: 1rem;
}

.recommend {
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  column-gap: 7rem;
  row-gap: 10rem;
}
.Movie50 {
  padding-bottom: 10rem;
  background-color: gray;
}
.Movie1000 {
  padding-bottom: 10rem;
  background-color: gray;
}
.Movielast {
  padding-bottom: 10rem;
  background-color: gray;
}
.kozan {
  margin: 2rem;
  font-size: 2rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.movieCenter {
  display: flex;
  justify-content: center;
  align-items: center;
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

<script>
import videoInLists from "@/components/VideoInLists"

export default {
  components: {
    videoInLists,
  },
}
</script>
