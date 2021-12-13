<template>
  <div class="youtube-list">
    <h2 class="title">Youtube動画発掘</h2>
    <!--You-->
    <div class="youtube-search">
      <div class="search-block">
        <input
          class="youtube-search-text"
          size="40"
          v-model="keyword"
          placeholder=" 検索"
        />
        <div class="erase-button" v-on:click="erase_video">
          {{ erase }}
        </div>
      </div>
      <div class="search-button" v-on:click="search_video">🔍</div>
    </div>
    <div class="loading" v-show="search_now">
      <div><img :src="imageSrc" class="search-now-image" /></div>
      <div class="search-now-text">{{ search_now_text }}</div>
    </div>
    <div class="tag-header">
      <div>
        <img src="../assets/videoExcavation.svg" class="tag-logo" />
      </div>
      <div class="tag-title">カテゴリー</div>
    </div>

    <div class="tag-block">
      <div
        class="tag-button"
        v-bind:class="[{ red: isActive1 }]"
        v-on:click="tag_choice1"
      >
        映画とアニメ
      </div>
      <div
        class="tag-button"
        v-bind:class="[{ red: isActive2 }]"
        v-on:click="tag_choice2"
      >
        自動車と乗り物
      </div>
      <div
        class="tag-button"
        v-bind:class="[{ red: isActive3 }]"
        v-on:click="tag_choice3"
      >
        音楽
      </div>
      <div
        class="tag-button"
        v-bind:class="[{ red: isActive4 }]"
        v-on:click="tag_choice4"
      >
        ペットと動物
      </div>
      <div
        class="tag-button"
        v-bind:class="[{ red: isActive5 }]"
        v-on:click="tag_choice5"
      >
        スポーツ
      </div>
      <div
        class="tag-button"
        v-bind:class="[{ red: isActive6 }]"
        v-on:click="tag_choice6"
      >
        旅行とイベント
      </div>
      <div
        class="tag-button"
        v-bind:class="[{ red: isActive7 }]"
        v-on:click="tag_choice7"
      >
        ゲーム
      </div>
      <div
        class="tag-button"
        v-bind:class="[{ red: isActive8 }]"
        v-on:click="tag_choice8"
      >
        ブログ
      </div>
      <div
        class="tag-button"
        v-bind:class="[{ red: isActive9 }]"
        v-on:click="tag_choice9"
      >
        コメディー
      </div>
      <div
        class="tag-button"
        v-bind:class="[{ red: isActive10 }]"
        v-on:click="tag_choice10"
      >
        エンターテイメント
      </div>
      <div
        class="tag-button"
        v-bind:class="[{ red: isActive11 }]"
        v-on:click="tag_choice11"
      >
        ニュースと政治
      </div>
      <div
        class="tag-button"
        v-bind:class="[{ red: isActive12 }]"
        v-on:click="tag_choice12"
      >
        ハウツーとスタイル
      </div>
      <div
        class="tag-button"
        v-bind:class="[{ red: isActive13 }]"
        v-on:click="tag_choice13"
      >
        教育
      </div>
      <div
        class="tag-button"
        v-bind:class="[{ red: isActive14 }]"
        v-on:click="tag_choice14"
      >
        科学と技術
      </div>
    </div>

    <div class="tag-info">
      <ul>
        <li>検索条件を絞りたい場合は、上のカテゴリーから1つ選んでね！</li>
      </ul>
    </div>

    <div class="tag-header">
      <div>
        <img src="../assets/videoExcavation.svg" class="tag-logo" />
      </div>
      <div class="tag-title">新着動画</div>
    </div>

    <div class="newVideo-block">
      <videoInLists
        class="video-in-lists"
        v-for="new_movie in new_video_result"
        v-bind:key="new_movie.video_id"
      >
        <ul>
          <div class="result-image">
            <a
              v-bind:href="
                'https://www.youtube.com/watch?v=' + new_movie.id.videoId
              "
            >
              <img
                width="90"
                height="60"
                v-bind:src="new_movie.snippet.thumbnails.medium.url"
              />
            </a>
          </div>
          <li>{{ new_movie.snippet.title }}</li>
        </ul>
      </videoInLists>
    </div>
    <div class="tag-info">
      <ul>
        <li>新着動画から面白い動画を見つけよう！</li>
      </ul>
    </div>

    <div class="tag-header">
      <div>
        <img src="../assets/videoExcavation.svg" class="tag-logo" />
      </div>
      <div class="tag-title">検索結果</div>
    </div>
    <div class="newVideo-block">
      <videoInLists
        class="video-in-lists2"
        v-for="movie in results"
        v-bind:key="movie.video_id"
      >
        <ul>
          <li>タイトル:{{ movie.title }}</li>
          <li>サムネ:</li>
          <div class="result-image">
            <a
              v-bind:href="'https://www.youtube.com/watch?v=' + movie.video_id"
            >
              <img width="300" height="200" v-bind:src="movie.url" />
            </a>
          </div>

          <li>再生数: {{ movie.view_count }}</li>
          <li>いいね数: {{ movie.like_count }}</li>
          <li>コメント数: {{ movie.comment_count }}</li>
        </ul>
      </videoInLists>
    </div>
    <div class="bottom-block"></div>
  </div>
</template>

<style scoped>
.youtube-list {
  min-height: 100vh;
  width: 100%;
  background: #b8b8b8;
}
.title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 5rem;
}

.youtube-search {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 3rem;
}

.search-block {
  display: flex;
  border: 0.5px solid;
  border-color: black;
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
  cursor: pointer;
  cursor: hand;
}
.search-button {
  padding: 0 1rem;
  font-size: 2rem;
  border-radius: 2px;
  background-color: rgb(58, 58, 58);
  cursor: pointer;
  cursor: hand;
}
.search-button:hover {
  opacity: 0.7;
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

.tag-header {
  position: relative;
  display: block;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
}
.tag-logo {
  width: 3rem;
}
.tag-title {
  position: absolute;
  bottom: 0;
  left: 3.5rem;
  font-size: 1.5rem;
  font-weight: 600;
}
.tag-block {
  display: flex;
  flex-wrap: wrap;
  background-color: rgba(255, 255, 255, 0.8);

  width: 90%;
  height: 100%;

  margin-left: auto;
  margin-right: auto;

  border-radius: 3px;

  margin-bottom: 5rem;
}
.newVideo-block {
  display: flex;
  flex-wrap: wrap;

  background-color: rgba(255, 255, 255, 0.8);

  width: 90%;
  min-height: 100%;

  margin-left: auto;
  margin-right: auto;

  margin-bottom: 5rem;
}
.tag-button {
  text-align: center;
  padding: 6px 0;
  border: 0.5px solid;
  width: 12rem;
  height: 2rem;
  border-radius: 3px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  color: black;
  background-color: rgba(255, 255, 255);
  cursor: pointer;
  cursor: hand;
}

.tag-info {
  margin: 0 auto 3rem;
  height: 100%;
  width: 90%;
  font-size: 30px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.8);
  position: relative;
  border-radius: 3px;
}
.tag-info ul {
  margin: 0;
  display: inline-block;
  padding-left: 100%;
  white-space: nowrap;
  line-height: 1em;
  animation: scroll 15s linear infinite;
}
.tag-info ul li {
  display: inline;
  margin: 0 100px 0 0;
  color: black;
  font-weight: bold;
}
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.bottom-block {
  height: 5rem;
}

.tag-button:hover {
  font-weight: 800;
  border-color: black;
}
.red {
  background-color: #b8b8b8;
  color: black;
}

.result-image {
  display: flex;
  justify-content: center;
}

.video-in-lists {
  background: #b8b8b8;
  width: 15rem;
  height: 9.5rem;
  margin: 1rem 2rem;
  overflow: hidden;
}

.video-in-lists2 {
  background: #b8b8b8;
  width: 50%;
  height: 100%;
  margin: 1rem 2rem;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
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
      new_video_result: null,
      tmp_new_video_result: [],
      tmp_new_video_result2: [],

      //最初は配列で定義したが何故かうまくいかなかった
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      isActive5: false,
      isActive6: false,
      isActive7: false,
      isActive8: false,
      isActive9: false,
      isActive10: false,
      isActive11: false,
      isActive12: false,
      isActive13: false,
      isActive14: false,

      search_now: 0,
      search_now_text: "",
      nowtime: null,
      tmp_results: [], //検索結果情報を格納する配列
      results: null,
      tmp_results2: [], //検索結果の動画情報を格納する配列
      tmp_results3: [], //掘り出し物の動画を格納する配列

      count: 0,
      keyword: "ボカロ",
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
        publishedAfter: null,
        videoCategoryId: null,
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
        key: "AIzaSyBiISEotpsIDifCOskeHUpfopKU1Zmq8Lw",
        //key: "AIzaSyCpQxKrQqzdZLFjU7dVcg5ZCEYu6onC3Hc",
        //key: "AIzaSyBjW_zR6JAPBFkYlHjeDoLEfEm-z26o6_w",
        //key: "AIzaSyCsCdYl4E7SB19XPBMdStsPJV16sGKTL74",
      },
      params2: {
        //動画情報所得のためのパラメータ
        part: "statistics",
        id: null,
        //key: "AIzaSyA2RzZ-SEU9GCN1wbNSAWg_F7VXiBFBgG0",
        //key: "AIzaSyBiISEotpsIDifCOskeHUpfopKU1Zmq8Lw",
        //key: "AIzaSyCpQxKrQqzdZLFjU7dVcg5ZCEYu6onC3Hc",
        //key: "AIzaSyBjW_zR6JAPBFkYlHjeDoLEfEm-z26o6_w",
        //key: "AIzaSyCsCdYl4E7SB19XPBMdStsPJV16sGKTL74",
      },
    }
  },
  props: {
    msg: String,
  },
  mounted: function () {
    this.new_video_result = null
    this.params.maxResults = 10
    var self = this
    axios
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: this.params,
      })
      .then(function (res) {
        self.tmp_new_video_result = res.data.items
        self.new_video_result = self.tmp_new_video_result
      })
  },
  methods: {
    search_video: function () {
      this.image = "../assets/videoExcavation.svg"
      this.results = null
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
          self.params2.id = self.tmp_results[0].id.videoId
          axios
            .get("https://www.googleapis.com/youtube/v3/videos", {
              params: self.params2,
            })
            .then(function (res) {
              self.tmp_results2 = res.data.items
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
    tag_choice1: function () {
      this.params.videoCategoryId = 1
      this.isActive1 = !this.isActive1
      this.isActive2 = false
      this.isActive3 = false
      this.isActive4 = false
      this.isActive5 = false
      this.isActive6 = false
      this.isActive7 = false
      this.isActive8 = false
      this.isActive9 = false
      this.isActive10 = false
      this.isActive11 = false
      this.isActive12 = false
      this.isActive13 = false
      this.isActive14 = false
    },
    tag_choice2: function () {
      this.params.videoCategoryId = 2
      this.isActive1 = false
      this.isActive2 = !this.isActive2
      this.isActive3 = false
      this.isActive4 = false
      this.isActive5 = false
      this.isActive6 = false
      this.isActive7 = false
      this.isActive8 = false
      this.isActive9 = false
      this.isActive10 = false
      this.isActive11 = false
      this.isActive12 = false
      this.isActive13 = false
      this.isActive14 = false
    },
    tag_choice3: function () {
      this.params.videoCategoryId = 10
      this.isActive1 = false
      this.isActive2 = false
      this.isActive3 = !this.isActive3
      this.isActive4 = false
      this.isActive5 = false
      this.isActive6 = false
      this.isActive7 = false
      this.isActive8 = false
      this.isActive9 = false
      this.isActive10 = false
      this.isActive11 = false
      this.isActive12 = false
      this.isActive13 = false
      this.isActive14 = false
    },
    tag_choice4: function () {
      this.params.videoCategoryId = 15
      this.isActive1 = false
      this.isActive2 = false
      this.isActive3 = false
      this.isActive4 = !this.isActive4
      this.isActive5 = false
      this.isActive6 = false
      this.isActive7 = false
      this.isActive8 = false
      this.isActive9 = false
      this.isActive10 = false
      this.isActive11 = false
      this.isActive12 = false
      this.isActive13 = false
      this.isActive14 = false
    },
    tag_choice5: function () {
      this.params.videoCategoryId = 17
      this.isActive1 = false
      this.isActive2 = false
      this.isActive3 = false
      this.isActive4 = false
      this.isActive5 = !this.isActive5
      this.isActive6 = false
      this.isActive7 = false
      this.isActive8 = false
      this.isActive9 = false
      this.isActive10 = false
      this.isActive11 = false
      this.isActive12 = false
      this.isActive13 = false
      this.isActive14 = false
    },
    tag_choice6: function () {
      this.params.videoCategoryId = 19
      this.isActive1 = false
      this.isActive2 = false
      this.isActive3 = false
      this.isActive4 = false
      this.isActive5 = false
      this.isActive6 = !this.isActive6
      this.isActive7 = false
      this.isActive8 = false
      this.isActive9 = false
      this.isActive10 = false
      this.isActive11 = false
      this.isActive12 = false
      this.isActive13 = false
      this.isActive14 = false
    },
    tag_choice7: function () {
      this.params.videoCategoryId = 20
      this.isActive1 = false
      this.isActive2 = false
      this.isActive3 = false
      this.isActive4 = false
      this.isActive5 = false
      this.isActive6 = false
      this.isActive7 = !this.isActive7
      this.isActive8 = false
      this.isActive9 = false
      this.isActive10 = false
      this.isActive11 = false
      this.isActive12 = false
      this.isActive13 = false
      this.isActive14 = false
    },
    tag_choice8: function () {
      this.params.videoCategoryId = 22
      this.isActive1 = false
      this.isActive2 = false
      this.isActive3 = false
      this.isActive4 = false
      this.isActive5 = false
      this.isActive6 = false
      this.isActive7 = false
      this.isActive8 = !this.isActive8
      this.isActive9 = false
      this.isActive10 = false
      this.isActive11 = false
      this.isActive12 = false
      this.isActive13 = false
      this.isActive14 = false
    },
    tag_choice9: function () {
      this.params.videoCategoryId = 23
      this.isActive1 = false
      this.isActive2 = false
      this.isActive3 = false
      this.isActive4 = false
      this.isActive5 = false
      this.isActive6 = false
      this.isActive7 = false
      this.isActive8 = false
      this.isActive9 = !this.isActive9
      this.isActive10 = false
      this.isActive11 = false
      this.isActive12 = false
      this.isActive13 = false
      this.isActive14 = false
    },
    tag_choice10: function () {
      this.params.videoCategoryId = 24
      this.isActive1 = false
      this.isActive2 = false
      this.isActive3 = false
      this.isActive4 = false
      this.isActive5 = false
      this.isActive6 = false
      this.isActive7 = false
      this.isActive8 = false
      this.isActive9 = false
      this.isActive10 = !this.isActive10
      this.isActive11 = false
      this.isActive12 = false
      this.isActive13 = false
      this.isActive14 = false
    },
    tag_choice11: function () {
      this.params.videoCategoryId = 25
      this.isActive1 = false
      this.isActive2 = false
      this.isActive3 = false
      this.isActive4 = false
      this.isActive5 = false
      this.isActive6 = false
      this.isActive7 = false
      this.isActive8 = false
      this.isActive9 = false
      this.isActive10 = false
      this.isActive11 = !this.isActive11
      this.isActive12 = false
      this.isActive13 = false
      this.isActive14 = false
    },
    tag_choice12: function () {
      this.params.videoCategoryId = 26
      this.isActive1 = false
      this.isActive2 = false
      this.isActive3 = false
      this.isActive4 = false
      this.isActive5 = false
      this.isActive6 = false
      this.isActive7 = false
      this.isActive8 = false
      this.isActive9 = false
      this.isActive10 = false
      this.isActive11 = false
      this.isActive12 = !this.isActive12
      this.isActive13 = false
      this.isActive14 = false
    },
    tag_choice13: function () {
      this.params.videoCategoryId = 27
      this.isActive1 = false
      this.isActive2 = false
      this.isActive3 = false
      this.isActive4 = false
      this.isActive5 = false
      this.isActive6 = false
      this.isActive7 = false
      this.isActive8 = false
      this.isActive9 = false
      this.isActive10 = false
      this.isActive11 = false
      this.isActive12 = false
      this.isActive13 = !this.isActive13
      this.isActive14 = false
    },
    tag_choice14: function () {
      this.params.videoCategoryId = 28
      this.isActive1 = false
      this.isActive2 = false
      this.isActive3 = false
      this.isActive4 = false
      this.isActive5 = false
      this.isActive6 = false
      this.isActive7 = false
      this.isActive8 = false
      this.isActive9 = false
      this.isActive10 = false
      this.isActive11 = false
      this.isActive12 = false
      this.isActive13 = false
      this.isActive14 = !this.isActive14
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
