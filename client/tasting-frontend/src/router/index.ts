import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import ConsumableList from "../views/ConsumableOverview.vue";
import TastingList from "../views/TastingOverview.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: '/consumablelist',
    name: 'ConsumableList',
    component: ConsumableList
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

//change something to check the automatic release
