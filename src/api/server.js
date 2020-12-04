/*
 * @Author: Chengbotao
 * @Description:
 * @Date: 2020-12-05 03:05:18
 * @LastEditTime: 2020-12-05 03:12:01
 * @LastEditors: Chengbotao
 * @FilePath: \bee-admin-vue2x\src\api\server.js
 */

import axios from "axios";
import config from "./config";

const server = axios.create(config);

server.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    throw new Error(err);
  }
);

server.interceptors.response.use(
  data => {
    return data;
  },
  err => {
    throw new Error(err);
  }
);

export default server;
