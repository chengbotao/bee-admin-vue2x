<!--
 * @Author: Chengbotao
 * @Description: 
 * @Date: 2020-12-04 21:45:32
 * @LastEditTime: 2020-12-05 04:14:53
 * @LastEditors: Chengbotao
 * @FilePath: \bee-admin-vue2x\src\views\Home.vue
-->
<template>
  <el-container class="bee-home_wrapper">
    <el-header>header</el-header>
    <el-container>
      <el-aside>nav</el-aside>
      <el-main class="home_main">
        <back-top>
          <router-view></router-view>
        </back-top>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Home"
};
</script>
<style lang="scss" scoped>
.bee-home_wrapper {
  height: 100%;
  width: 100%;
  overflow: hidden;
  .home_main {
    position: relative;
  }
}
</style>
