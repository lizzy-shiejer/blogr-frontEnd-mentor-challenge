import { createRouter, createWebHistory } from "vue-router";

// dynamic routes
const HomePage = () => import("../views/HomePage.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
