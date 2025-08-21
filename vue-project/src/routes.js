import HomePage from "@/components/pages/HomePage.vue";
import LoginPage from "@/components/pages/LoginPage.vue";
import SignupPage from "@/components/pages/SignupPage.vue";
import AllItemsPage from "@/components/pages/AllItemsPage.vue";
import DetailProductPage from "@/components/pages/DetailProductPage.vue";
import UserPage from "@/components/pages/UserPage.vue";

export const routes = [
  { path: "/", name: "homePage", component: HomePage },
  { path: "/signup", name: "signup", component: SignupPage },
  { path: "/login", name: "login", component: LoginPage },
  { path: "/allitems", name: "allItems", component: AllItemsPage },
  {
    path: "/detailproduct",
    name: "detailProduct",
    component: DetailProductPage,
  },
  {
    path: "/user/:component",
    name: "userPage",
    component: UserPage,
  },
];
