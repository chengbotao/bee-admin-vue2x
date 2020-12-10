<!--
 * @Author: Chengbotao
 * @Description: 
 * @Date: 2020-12-04 21:45:32
 * @LastEditTime: 2020-12-10 17:30:51
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
  methods: {
    resizeHtmlFontSize() {
      return setHtmlFontSize();
    }
  },
  mounted() {
    setHtmlFontSize();
    window.addEventListener("resize", this.resizeHtmlFontSize);
    this.$once("hook:beforeDestroy", () => {
      window.removeEventListener("resize", this.resizeHtmlFontSize);
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
