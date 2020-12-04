/*
 * @Author: Chengbotao
 * @Description:
 * @Date: 2020-12-04 21:45:32
 * @LastEditTime: 2020-12-05 03:00:51
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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
