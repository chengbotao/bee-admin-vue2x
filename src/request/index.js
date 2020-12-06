/*
 * @Author: Chengbotao
 * @Description:
 * @Date: 2020-12-06 23:30:17
 * @LastEditTime: 2020-12-06 23:35:53
 * @LastEditors: Chengbotao
 * @FilePath: \bee-admin-vue2x\src\request\index.js
 */

import server from "./server";

function SendRequest() {
  this.server = server;
}

SendRequest.prototype.parseRouter = config => {
  this.server(config);
};

export default new SendRequest();
