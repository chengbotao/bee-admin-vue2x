/*
 * @Author: Chengbotao
 * @Description:
 * @Date: 2020-12-04 21:45:32
 * @LastEditTime: 2020-12-17 18:13:45
 * @LastEditors: Chengbotao
 * @FilePath: \bee-admin-vue2x\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  }
];

const createRouter = () =>
  new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
  });

export const router = createRouter();

export function resetRouter() {
  const tempRouter = createRouter();
  router.matcher = tempRouter.matcher;
}
