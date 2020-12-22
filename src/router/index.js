/*
 * @Author: Chengbotao
 * @Description:
 * @Date: 2020-12-04 21:45:32
 * @LastEditTime: 2020-12-22 07:52:09
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
    redirect: "/login"
  },
  {
    path: "/login",
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

const router = createRouter();

export function resetRouter() {
  const tempRouter = createRouter();
  router.matcher = tempRouter.matcher;
}

export default router;
