<!--
 * @Author: Chengbotao
 * @Description: 
 * @Date: 2020-12-04 21:45:32
 * @LastEditTime: 2020-12-05 03:47:43
 * @LastEditors: Chengbotao
 * @FilePath: \bee-admin-vue2x\src\App.vue
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { setHtmlFontSize } from "@/common";
export default {
  name: "App",
  mounted() {
    window.addEventListener("resize", setHtmlFontSize());
    this.$once("hook:beforeDestroy", () => {
      window.removeEventListener("resize", setHtmlFontSize);
    });
  }
};
</script>

<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
