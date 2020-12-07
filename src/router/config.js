/*
 * @Author: Chengbotao
 * @Description:
 * @Date: 2020-12-05 03:28:02
 * @LastEditTime: 2020-12-07 14:06:48
 * @LastEditors: Chengbotao
 * @FilePath: \bee-admin-vue2x\src\router\config.js
 */

import Home from "../views/Home.vue";

export const routes = [
  {
    path: "/home",
    component: Home,
    name: "Home", // 命名路由
    children: [], // 嵌套路由
    meta: {
      role: ["admin"]
    }
  }
];
