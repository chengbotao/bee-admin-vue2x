/*
 * @Description:
 * @Author: Chengbotao
 * @Date: 2020-12-04 17:16:34
 * @LastEditors: Chengbotao
 * @LastEditTime: 2020-12-29 10:32:47
 * @FilePath: \bee-admin-vue2x\src\api\index.js
 */
import sendRequest from "../request";
import { config } from "./config";
const Api = new sendRequest({
  defaultsConfig: {
    baseURL: "/api"
  },
  handleReqConfig(config) {
    return config;
  },
  handleReqErr(error) {
    return error;
  },
  handleResData(data) {
    return data;
  },
  handleResErr(error) {
    return error;
  }
});
Api.parseInterface(config);
export default Api;
