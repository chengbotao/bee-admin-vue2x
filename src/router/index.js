/*
 * @Author: Chengbotao
 * @Description:
 * @Date: 2020-12-04 21:45:32
 * @LastEditTime: 2020-12-29 10:16:38
 * @LastEditors: Chengbotao
 * @FilePath: \bee-admin-vue2x\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
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

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    // 刷新操作
    if (to.path !== "/login" && to.path !== "/") {
      if (store.getters.getRoutes.length > 0) {
        router.addRoutes(store.getters.getRoutes);
        next({ ...to, replace: true });
      } else {
        next();
      }
    } else {
      next();
    }
  } else {
    next();
  }
});
export function resetRouter() {
  const tempRouter = createRouter();
  router.matcher = tempRouter.matcher;
}

export default router;
