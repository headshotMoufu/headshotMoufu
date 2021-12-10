import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Upload from "../views/Upload.vue"
import ToYoutubeList from "../views/ToYoutubeList.vue"
import ToNicoList from "../views/ToNicoList.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/upload",
    name: "Upload",
    component: Upload,
  },
  {
    path: "/toYoutubeList",
    name: "ToYoutubeList",
    component: ToYoutubeList,
  },
  {
    path: "/toNicoList",
    name: "ToNicoList",
    component: ToNicoList,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
