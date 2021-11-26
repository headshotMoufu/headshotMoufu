import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Upload from "../views/Upload.vue"
import Video from "../views/Video.vue"

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
    path: "/video",
    name: "video",
    component: Video,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
