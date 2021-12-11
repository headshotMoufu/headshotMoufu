<template>
  <div>
    <div class="searchMark">
      <div v-on:click="NicoGet()">🔍検索🔍</div>
    </div>
  </div>
</template>

<script>
import { functions } from "@/firebase"
import { httpsCallable, connectFunctionsEmulator } from "firebase/functions"

export default {
  data() {
    return {
      searchWords50: "",
      searchWords1000: "",
      searchWordslast: "",
      Gquery: "",
      GTarget: "",
      GSorts: "",
      results50: [],
      results1000: [],
      relustslast: [],
      UseData50: [],
      UseData1000: [],
      UseDatalast: [],
    }
  },
  props: ["GetMovie", "query", "Targets", "Sorts", "SortsUB"],
  methods: {
    async NicoGet() {
      //データのリセット
      this.UseData50 = []
      this.UseData1000 = []
      this.UseDatalast = []
      //Gquery取得
      this.Gquery = this.query
      if (this.Gquery == "") {
        this.Gquery = "やる夫"
      }

      //GTarget取得(検索対象)
      this.GTarget = ""
      if (this.Targets.length == 0) {
        this.GTarget = "title"
      } else {
        for (let i = 0; i < this.Targets.length; i++) {
          if (this.GTarget == "") {
            this.GTarget = this.Targets[i]
          } else {
            this.GTarget = this.GTarget + "," + this.Targets[i]
          }
        }
      }

      //GSorts取得(検索順)
      this.GSorts = "-"
      if (this.SortsUB === "l") {
        this.GSorts = "%2B"
      }

      if (this.Sorts.length == 0) {
        this.GSorts = this.GSorts + "viewCounter"
      } else {
        this.GSorts = this.GSorts + this.Sorts
      }
      this.searchWords50 =
        "q=" +
        this.Gquery +
        "&targets=" +
        this.GTarget +
        "&fields=contentId,title,viewCounter,thumbnailUrl,lastCommentTime,mylistCounter,likeCounter&filters[viewCounter][gte]=50&filters[viewCounter][lte]=1000" +
        "&_sort=" +
        this.GSorts +
        "&_offset=0&_context=apiguide"

      this.searchWords1000 =
        "q=" +
        this.Gquery +
        "&targets=" +
        this.GTarget +
        "&fields=contentId,title,viewCounter,thumbnailUrl,lastCommentTime,mylistCounter,likeCounter&filters[viewCounter][gte]=1000&filters[viewCounter][lte]=50000&" +
        "&_sort=" +
        this.GSorts +
        "&_offset=0&_context=apiguide"

      this.searchWordslast =
        "q=" +
        this.Gquery +
        "&targets=" +
        this.GTarget +
        "&fields=contentId,title,viewCounter,thumbnailUrl,lastCommentTime,mylistCounter,likeCounter&filters[viewCounter][gte]=50&filters[viewCounter][lte]=50000&_sort=-lastCommentTime&_offset=0&_context=apiguide"

      if (process.env.NODE_ENV === "development") {
        // local開発
        connectFunctionsEmulator(functions, "localhost", 5001)
      }

      const Mikuget = httpsCallable(functions, "searchNico")
      const res50 = await Mikuget(this.searchWords50)
      const res1000 = await Mikuget(this.searchWords1000)
      const reslast = await Mikuget(this.searchWordslast)

      this.results50 = res50
      this.results1000 = res1000
      this.resultslast = reslast
      for (let i = 0; i < this.results50.data.data.length; i++) {
        let Using1 = this.results50.data.data[i]
        this.UseData50.push({
          contentId: Using1.contentId,
          contentURL: "https://nico.ms/" + Using1.contentId,
          title: Using1.title,
          thumbUrl: Using1.thumbnailUrl,
          lastCommentTime: Using1.lastCommentTime,
          viewCounter: Using1.viewCounter,
          mylistCounter: Using1.mylistCounter,
          likeCounter: Using1.likeCounter,
        })
      }
      if (this.results1000.data.data)
        for (let i = 0; i < this.results1000.data.data.length; i++) {
          let Using2 = this.results1000.data.data[i]
          this.UseData1000.push({
            contentId: Using2.contentId,
            contentURL: "https://nico.ms/" + Using2.contentId,
            title: Using2.title,
            thumbUrl: Using2.thumbnailUrl,
            lastCommentTime: Using2.lastCommentTime,
            viewCounter: Using2.viewCounter,
            mylistCounter: Using2.mylistCounter,
            likeCounter: Using2.likeCounter,
          })
        }
      if (this.resultslast.data.data)
        for (let i = 0; i < this.resultslast.data.data.length; i++) {
          let Using3 = this.resultslast.data.data[i]
          this.UseDatalast.push({
            contentId: Using3.contentId,
            contentURL: "https://nico.ms/" + Using3.contentId,
            title: Using3.title,
            thumbUrl: Using3.thumbnailUrl,
            lastCommentTime: Using3.lastCommentTime,
            viewCounter: Using3.viewCounter,
            mylistCounter: Using3.mylistCounter,
            likeCounter: Using3.likeCounter,
          })
        }
      //console.log(this.results50)
      //console.log(this.UseData50)
      this.$parent.MovieData50 = this.UseData50
      this.$parent.MovieData1000 = this.UseData1000
      this.$parent.MovieDatalast = this.UseDatalast
    },
  },
}
</script>

<style>
.searchMark {
  margin: 1rem 2rem;
  font-size: 3rem;
  display: flex;
  justify-content: center;
}
.searchMark:hover {
  font-size: 4rem;
  margin: 0.5rem 1.3rem;
  cursor: pointer;
}
</style>
