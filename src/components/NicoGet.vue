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
      qua: "ゆっくり",
      results: [],
    }
  },

  methods: {
    async NicoGet() {
      if (process.env.NODE_ENV === "development") {
        // local開発
        connectFunctionsEmulator(functions, "localhost", 5001)
      }
      const Mikuget = httpsCallable(functions, "searchNico")
      const res = await Mikuget(this.qua)
      this.results = res
      console.log(this.results)
    },
  },
}
</script>

<style></style>
