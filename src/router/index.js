import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import MyPage from "../views/MyPage.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/my-page",
    name: "MyPage",
    component: MyPage,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
