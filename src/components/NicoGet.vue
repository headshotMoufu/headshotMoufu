<template>
  <div>
    <button v-on:click="NicoGet">動画取得</button>
  </div>
</template>

<script>
import { functions } from "@/firebase"
import { httpsCallable, connectFunctionsEmulator } from "firebase/functions"

export default {
  data() {
    return {
      searchWords: "",
      Gquery: "",
      GTarget: "",
      results: [],
      UseData: [],
    }
  },
  props: ["query", "Targets"],
  methods: {
    async NicoGet() {
      //データのリセット
      this.UseData = []
      //Gquery取得
      this.Gquery = this.query
      if (this.Gquery == "") {
        this.Gquery = "やる夫"
      }
      //GTarget取得
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
      this.searchWords = "q=" + this.Gquery + "&targets=" + this.GTarget

      //再生数がa~bまでのものを取得(上から)

      if (process.env.NODE_ENV === "development") {
        // local開発
        connectFunctionsEmulator(functions, "localhost", 5001)
      }

      const Mikuget = httpsCallable(functions, "searchNico")
      const res = await Mikuget(this.searchWords)
      this.results = res
      if (this.results.data.data)
        for (let i = 0; i < this.results.data.data.length; i++) {
          let Using = this.results.data.data[i]
          this.UseData.push({
            contentId: Using.contentId,
            title: Using.title,
            thumbUrl: Using.thumbnailUrl,
          })
        }
      console.log(this.results)
      console.log(this.UseData)
      this.$parent.MovieData = this.UseData
    },
  },
}
</script>

<style></style>
