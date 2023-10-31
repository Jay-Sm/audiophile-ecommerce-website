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
    component: () => import("../views/Navigation/Headphones.vue"),
  },
  {
    path: "/speakers",
    name: "speakers",
    component: () => import("../views/Navigation/Speakers.vue"),
  },
  {
    path: "/earphones",
    name: "earphones",
    component: () => import("../views/Navigation/Earphones.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
