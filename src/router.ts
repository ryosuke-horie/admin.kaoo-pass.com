import { createRouter, createWebHistory } from "vue-router";

// 認証不要なページ
import LoginPage from "./pages/LoginPage.vue";

const routes = [
  { path: "/", name: "Login", component: LoginPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
