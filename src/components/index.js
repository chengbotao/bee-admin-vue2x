/*
 * @Author: Chengbotao
 * @Description:
 * @Date: 2020-12-05 02:40:34
 * @LastEditTime: 2020-12-05 02:59:10
 * @LastEditors: Chengbotao
 * @FilePath: \bee-admin-vue2x\src\components\index.js
 */
const r = require.context("./", true, /\.js$/);
const globalComponents = [];

r.keys().forEach(key => {
  let componentDefault = r(key).default || r(key);
  globalComponents.push(componentDefault);
});

export default globalComponents;
