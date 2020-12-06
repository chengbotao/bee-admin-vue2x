/*
 * @Description:
 * @Author: Chengbotao
 * @Date: 2020-12-04 17:16:34
 * @LastEditors: Chengbotao
 * @LastEditTime: 2020-12-06 23:35:34
 * @FilePath: \bee-admin-vue2x\src\api\index.js
 */
import sendRequest from "../request";
import config from "./config";
sendRequest.parseRouter(config);
export default sendRequest;
