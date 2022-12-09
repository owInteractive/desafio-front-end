import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductsView from "../views/ProductsView.vue";
import ShoppingCartView from "../views/ShoppingCartView.vue";
import CheckoutView from "../views/CheckoutView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
  },
  {
    path: "/shopping-cart",
    name: "shopping-cart",
    component: ShoppingCartView,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: CheckoutView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
