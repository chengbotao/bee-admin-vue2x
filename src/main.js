/*
 * @Author: Chengbotao
 * @Description:
 * @Date: 2020-12-04 21:45:32
 * @LastEditTime: 2020-12-22 15:05:46
 * @LastEditors: Chengbotao
 * @FilePath: \bee-admin-vue2x\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./styles/index.scss";
import globalComponents from "./components";

Vue.use(ElementUI);

globalComponents.forEach(component => {
  Vue.use(component);
});

Vue.config.productionTip = false;

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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
