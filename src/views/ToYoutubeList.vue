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

    <table cellspacing="0" cellpadding="5" v-show="results">
      <tr>
        <th width="50">
          <font>No</font>
        </th>
        <th width="200">
          <font>Video</font>
        </th>
        <th width="700">
          <font>Contents</font>
        </th>
      </tr>

      <tr v-for="(movie, index) in results" v-bind:key="movie.id.videoId">
        <!-- No -->
        <td valign="top" width="50">{{ index + 1 }}</td>
        <!-- Video -->
        <td valign="top" width="300">
          <a
            v-bind:href="'https://www.youtube.com/watch?v=' + movie.id.videoId"
          >
            <img
              width="300"
              height="200"
              v-bind:src="movie.snippet.thumbnails.medium.url"
            />
          </a>
        </td>
        <!-- titleとdescription -->
        <td align="left" valign="top" width="700">
          <font size="5" color="#c71585"
            ><b>{{ movie.snippet.title }}</b></font
          >
          <br />
          {{ movie.snippet.description }}
        </td>
      </tr>
    </table>
    <videoInLists class="video-in-lists">
      <ul>
        <li>タイトル</li>
        <li>サムネ</li>
        <li>再生数</li>
        <li>etc..</li>
      </ul>
    </videoInLists>
  </div>
</template>

<style scoped>
.youtube-list {
  background-color: rgb(255, 255, 224);
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
  color: #fff0f5; /*文字色*/
  background: #ff69b4; /*背景色*/
  border: dashed 1px #c71585;
}

table td {
  background: #fff0f5;
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
      results: null,
      keyword: "J-POP",
      params: {
        q: "", // 検索クエリを指定します。
        part: "snippet", //とりあえずsnippetにしとけばいいっぽい？
        type: "video", //検索クエリの対象を特定のタイプのリソースのみに制限
        /*
          channel
          playlist
          video
        */
        maxResults: "20", // 最大検索数（0以上50以下）
        order: "viewCount", // リソースを再生回数の多い順に並べます。
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
        key: "AIzaSyBiISEotpsIDifCOskeHUpfopKU1Zmq8Lw",
      },
    }
  },
  methods: {
    search_video: function () {
      this.params.q = this.keyword
      var self = this
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: this.params,
        })
        .then(function (res) {
          self.results = res.data.items
          console.log(res)
        })
    },
  },
}
</script>
