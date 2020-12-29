/*
 * @Description:
 * @Author: Chengbotao
 * @Date: 2020-12-04 16:59:02
 * @LastEditors: Chengbotao
 * @LastEditTime: 2020-12-29 10:29:49
 * @FilePath: \bee-admin-vue2x\vue.config.js
 */

module.exports = {
  // 选项...
  devServer: {
    proxy: {
      "/api": {
        // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
        target: "https://www.baidu.com/",
        // 允许跨域
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
