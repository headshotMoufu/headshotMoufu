<template>
  <div>
    <button v-on:click="NicoGet">動画取得</button>
    <button v-on:click="Test">Test</button>
  </div>
</template>

<script>
import { functions } from "@/firebase"
import { httpsCallable, connectFunctionsEmulator } from "firebase/functions"

export default {
  data() {
    return {
      results: [],
    }
  },
  props: ["query", "Targets"],
  methods: {
    async NicoGet() {
      if (process.env.NODE_ENV === "development") {
        // local開発
        connectFunctionsEmulator(functions, "localhost", 5001)
      }

      const Mikuget = httpsCallable(functions, "searchNico")
      const res = await Mikuget(this.query)
      this.results = res
      console.log(this.results)
    },
    Test() {
      console.log(this.Targets)
    },
  },
}
</script>

<style></style>
