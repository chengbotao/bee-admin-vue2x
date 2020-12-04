<!--
 * @Author: Chengbotao
 * @Description: 
 * @Date: 2020-12-05 00:39:59
 * @LastEditTime: 2020-12-05 01:09:25
 * @LastEditors: Chengbotao
 * @FilePath: \bee-admin-vue2x\src\components\back-to-top\BackToTop.vue
-->
<template>
  <div class="scroll_wrapper">
    <el-backtop target=".scroll_wrapper"></el-backtop>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BackTop"
};
</script>

<style lang="scss" scoped>
.scroll_wrapper {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-x: hidden;
}
</style>
