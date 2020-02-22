import Vue from "vue";
import VueRouter from "vue-router";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Product",
      component: Product
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart
    },
    {
      path: "/checkout",
      name: "Checkout",
      component: Checkout
    }
  ]
});
