import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/headphones",
    name: "headphones",
    component: () => import("../views/Headphones.vue"),
  },
  {
    path: "/speakers",
    name: "speakers",
    component: () => import("../views/Speakers.vue"),
  },
  {
    path: "/earphones",
    name: "earphones",
    component: () => import("../views/Earphones.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
