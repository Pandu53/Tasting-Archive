import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import WhiskeyList from "../views/WhiskeyOverview.vue";
import TastingList from "../views/TastingOverview.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: '/whiskeylist',
    name: 'WhiskeyList',
    component: WhiskeyList
  },
  {
    path: '/tastinglist',
    name: 'TastingList',
    component: TastingList
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
