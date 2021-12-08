<template>
  <div class="youtube-list">
    <h1 class="title">Youtube動画発掘</h1>
    <!--You-->
    <div class="youtube-search">
      <input
        class="youtube-search-text"
        size="40"
        v-model="keyword"
        placeholder="検索キーワードを入力"
      />
      <button v-on:click="search_video">検索</button>
    </div>
    <!--<button v-on:click="now">現在時刻</button>
    <div>{{ nowtime }}</div>-->
    <videoInLists
      class="video-in-lists"
      v-for="movie in results3"
      v-bind:key="movie.video_id"
    >
      <ul>
        <li>タイトル:{{ movie.title }}</li>
        <li>サムネ:</li>
        <a v-bind:href="'https://www.youtube.com/watch?v=' + movie.video_id">
          <img width="250" height="100" v-bind:src="movie.url" />
        </a>

        <!--<li>再生数: {{ movie.view_count }}</li>
        <li>いいね数: {{ movie.like_count }}</li>
        <li>コメント数: {{ movie.comment_count }}</li>-->
        <li>etc..</li>
      </ul>
    </videoInLists>
  </div>
</template>

<style scoped>
.youtube-list {
  background-color: black;
  padding: 5rem;
}
.title {
  text-align: center;
  margin-bottom: 5rem;
  font-size: 4rem;
}
.youtube-search {
  display: flex;
  justify-content: center;

  width: 100%;
}
.youtube-search-text {
  width: 400px;
  height: 2rem;
}
.video-in-lists {
  width: 50%;
  height: 20rem;
  margin: 0 auto 5rem;
}
table {
  border-collapse: collapse;
  border: solid 2px #c71585; /*表全体を線で囲う*/
}
table th {
  color: black; /*文字色*/
  background: #ff69b4; /*背景色*/
  border: dashed 1px #c71585;
}

table td {
  background: black;
  border: dashed 1px #c71585;
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
      nowtime: null,
      tmp_results: [], //検索結果情報を格納する配列
      results: null,
      tmp_results2: [], //検索結果の動画情報を格納する配列
      results2: null,
      tmp_results3: [], //掘り出し物の動画を格納する配列
      results3: null, //埋もれてる動画結果

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
        order: "date", // リソースを再生回数の多い順に並べます。
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
        key: "AIzaSyA2RzZ-SEU9GCN1wbNSAWg_F7VXiBFBgG0",
      },
      params2: {
        //動画情報所得のためのパラメータ
        part: "statistics",
        id: null,
        key: "AIzaSyBiISEotpsIDifCOskeHUpfopKU1Zmq8Lw",
      },
    }
  },
  props: {
    msg: String,
  },
  methods: {
    search_video: function () {
      this.results3 = null
      console.log(this.results3)
      let day = new Date()
      day.setDate(day.getDate() - 30 - this.count)
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
          self.tmp_results3.push({
            title: self.tmp_results[0].snippet.title,
            video_id: self.tmp_results[0].id.videoId,
            url: self.tmp_results[0].snippet.thumbnails.medium.url,
          })
          self.results3 = self.tmp_results3
          self.count += 1
          if (self.count < 2) {
            setTimeout(self.search_video, 2000)
          } else {
            self.count = 0
          }
        })
    },
    search_rule: function () {},
  },
}
</script>
