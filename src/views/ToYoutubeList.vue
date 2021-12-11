<template>
  <div class="youtube-list">
    <h1 class="title">Youtube動画発掘</h1>
    <!--You-->
    <div class="youtube-search">
      <div class="search-block">
        <input
          class="youtube-search-text"
          size="40"
          v-model="keyword"
          placeholder="検索キーワードを入力"
        />
        <div class="erase-button" v-on:click="erase_video">{{ erase }}</div>
      </div>
      <div class="search-button" v-on:click="search_video">🔍</div>
    </div>
    <div class="loading" v-show="search_now">
      <div><img :src="imageSrc" class="search-now-image" /></div>
      <div class="search-now-text">{{ search_now_text }}</div>
    </div>

    <!--<button v-on:click="now">現在時刻</button>
    <div>{{ nowtime }}</div>-->
    <videoInLists
      class="video-in-lists"
      v-for="movie in results"
      v-bind:key="movie.video_id"
    >
      <ul>
        <li>タイトル:{{ movie.title }}</li>
        <li>サムネ:</li>
        <div class="result-image">
          <a v-bind:href="'https://www.youtube.com/watch?v=' + movie.video_id">
            <img width="300" height="200" v-bind:src="movie.url" />
          </a>
        </div>

        <li>再生数: {{ movie.view_count }}</li>
        <li>いいね数: {{ movie.like_count }}</li>
        <li>コメント数: {{ movie.comment_count }}</li>
      </ul>
    </videoInLists>
  </div>
</template>

<style scoped>
.youtube-list {
  height: 300vh;
  width: 100%;
}
.title {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 3rem;
}

.youtube-search {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 3rem;
}

.search-block {
  display: flex;

  border-radius: 10px;
}

.youtube-search-text {
  border: none;
  outline: none;
  width: 400px;
  height: 3rem;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}

.erase-button {
  background-color: white;
  padding: 0 1rem;
  color: rgb(167, 167, 167);
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  font-size: 2rem;
}
.search-button {
  padding: 0 1rem;
  font-size: 2rem;
  border-radius: 2px;
  background-color: rgb(58, 58, 58);
}
.loading {
  display: block;
  text-align: center;
  margin: 0 auto;
  background: #b8b8b8;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
  opacity: 0.8;
}
.search-now-image {
  background: #b8b8b8;
  width: 25rem;
  top: 10%;
  z-index: 10;
  animation: opc_good 4s ease 0s infinite alternate;
  opacity: 0.8;
}

.search-now-text {
  background: #b8b8b8;
  position: relative;
  color: black; /*文字色*/
  font-size: 5rem;
  text-align: center;
  font-weight: 800;
  z-index: 10;
  opacity: 0.8;
  animation: opc_good 4s ease 0s infinite alternate;
}

@keyframes opc_good {
  100% {
    opacity: 0;
  }
}

.search-button:hover {
  opacity: 0.7;
}

.result-image {
  display: flex;
  justify-content: center;
}

.video-in-lists {
  background: #b8b8b8;
  width: 70%;
  height: 28rem;
  margin: 0 auto 5rem;
}
</style>

<script>
import videoInLists from "@/components/VideoInLists"
import axios from "axios"

export default {
  components: {
    videoInLists,
  },
  data: function () {
    return {
      search_now: 0,
      search_now_text: "",
      nowtime: null,
      tmp_results: [], //検索結果情報を格納する配列
      results: null,
      tmp_results2: [], //検索結果の動画情報を格納する配列
      tmp_results3: [], //掘り出し物の動画を格納する配列

      count: 0,
      keyword: "J-POP",
      params: {
        q: "", // 検索クエリを指定します。
        part: "snippet", //とりあえずsnippetにしとけばいいっぽい？
        type: "video", //検索クエリの対象を特定のタイプのリソースのみに制限
        regionCode: "jp",
        /*
          channel
          playlist
          video
        */
        maxResults: "1", // 最大検索数（0以上50以下）
        order: "date",
        publishedBefore: null,
        //publishedAfter: null,
        /*
          date – リソースを作成日の新しい順に並べます。
          rating – リソースを評価の高い順に並べます。
          relevance – リソースを検索クエリの関連性が高い順に並べます。このパラメータのデフォルト値です。
          title – リソースをタイトルのアルファベット順に並べます。
          videoCount – アップロード動画の番号順（降順）にチャンネルを並べます。
          viewCount – リソースを再生回数の多い順に並べます。
        */
        //publishedAfter:,  publishedAfter パラメータは、指定した日時より後に作成されたリソースのみが API レスポンスに含まれるように指定します。この値は RFC 3339 形式の date-time 値です（1970-01-01T00:00:00Z）。
        //publishedBefore:,  publishedBefore パラメータは、指定した日時より前に作成されたリソースのみが API レスポンスに含まれるように指定します。
        //key: "AIzaSyA2RzZ-SEU9GCN1wbNSAWg_F7VXiBFBgG0",
        //key: "AIzaSyBiISEotpsIDifCOskeHUpfopKU1Zmq8Lw",
        //key: "AIzaSyCpQxKrQqzdZLFjU7dVcg5ZCEYu6onC3Hc",
        //key: "AIzaSyBjW_zR6JAPBFkYlHjeDoLEfEm-z26o6_w",
        key: "AIzaSyCsCdYl4E7SB19XPBMdStsPJV16sGKTL74",
      },
      params2: {
        //動画情報所得のためのパラメータ
        part: "statistics",
        id: null,
        //key: "AIzaSyA2RzZ-SEU9GCN1wbNSAWg_F7VXiBFBgG0",
        //key: "AIzaSyBiISEotpsIDifCOskeHUpfopKU1Zmq8Lw",
        //key: "AIzaSyCpQxKrQqzdZLFjU7dVcg5ZCEYu6onC3Hc",
        key: "AIzaSyCsCdYl4E7SB19XPBMdStsPJV16sGKTL74",
      },
    }
  },
  props: {
    msg: String,
  },
  methods: {
    search_video: function () {
      this.image = "../assets/videoExcavation.svg"
      this.results = null
      console.log(this.results3)
      //検索中画面表示
      this.search_now = 1
      this.search_now_text = "動画発掘中！"

      let day = new Date()
      day.setDate(day.getDate() - 30 - 3 * this.count)
      this.params.publishedBefore = day
      this.params.q = this.keyword
      var self = this
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: this.params,
        })
        .then(function (res) {
          self.tmp_results = res.data.items
          console.log(self.tmp_results)
          self.params2.id = self.tmp_results[0].id.videoId
          console.log(self.params2.id)
          axios
            .get("https://www.googleapis.com/youtube/v3/videos", {
              params: self.params2,
            })
            .then(function (res) {
              self.tmp_results2 = res.data.items
              console.log(self.tmp_results2)
              /*
                  埋もれている動画の条件（暫定）
                  1.再生数が1000 ~ 50000
                  2.いいね数が再生数/100 以上
              */
              if (
                //1.
                self.tmp_results2[0].statistics.viewCount >= 1000 &&
                self.tmp_results2[0].statistics.viewCount <= 50000
              ) {
                if (
                  //2.
                  self.tmp_results2[0].statistics.likeCount >=
                  self.tmp_results2[0].statistics.viewCount / 100
                ) {
                  self.tmp_results3.push({
                    title: self.tmp_results[0].snippet.title,
                    video_id: self.tmp_results[0].id.videoId,
                    url: self.tmp_results[0].snippet.thumbnails.medium.url,
                    view_count: self.tmp_results2[0].statistics.viewCount,
                    like_count: self.tmp_results2[0].statistics.likeCount,
                    comment_count: self.tmp_results2[0].statistics.commentCount,
                  })
                }
              }

              self.count += 1
              if (self.count < 10) {
                setTimeout(self.search_video, 300)
              } else {
                self.count = 0
                self.search_now = 0
                self.search_now_text = ""
                self.results = self.tmp_results3
              }
            })
        })
    },
    erase_video: function () {
      this.keyword = ""
    },
  },
  computed: {
    imageSrc() {
      if (this.search_now === 0) {
        return null
      } else {
        return require("../assets/videoExcavation.svg")
      }
    },
    erase() {
      if (this.keyword === "") {
        return "\u00a0 "
      } else {
        return "×"
      }
    },
  },
}
</script>
