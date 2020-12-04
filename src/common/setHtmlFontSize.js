/*
 * @Author: Chengbotao
 * @Description:
 * @Date: 2020-12-05 03:38:11
 * @LastEditTime: 2020-12-05 03:42:24
 * @LastEditors: Chengbotao
 * @FilePath: \bee-admin-vue2x\src\common\setHtmlFontSize.js
 */

export default function setHtmlFontSize(baseScale = 19.2) {
  let htmlWidth =
    document.documentElement.clientWidth || document.body.clientWidth;

  if (htmlWidth >= baseScale * 100) {
    htmlWidth = baseScale * 100;
  }

  const htmlDom = document.getElementsByTagName("html")[0];
  htmlDom.style.fontSize = `${htmlWidth / baseScale}px`;
}
