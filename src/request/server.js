/*
 * @Author: Chengbotao
 * @Description:
 * @Date: 2020-12-05 03:05:18
 * @LastEditTime: 2020-12-06 23:30:03
 * @LastEditors: Chengbotao
 * @FilePath: \bee-admin-vue2x\src\request\server.js
 */

import axios from "axios";
import config from "./config";

const server = axios.create(config);

// 请求拦截
server.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    throw new Error(err);
  }
);

// 响应拦截
server.interceptors.response.use(
  data => {
    return data;
  },
  err => {
    throw new Error(err);
  }
);

export default server;
