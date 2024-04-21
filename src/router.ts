import { createRouter, createWebHistory } from "vue-router";

// 認証不要なページ
import LoginPage from "./pages/LoginPage.vue";

// 認証済みのページ
import AccountCreatePage from "./pages/Account/CreatePage.vue";

const routes = [
  { path: "/", name: "Login", component: LoginPage },
  { path: "/account", name: "Create", component: AccountCreatePage }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
