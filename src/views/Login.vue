<!--
 * @Author: Chengbotao
 * @Description: 
 * @Date: 2020-12-04 22:57:06
 * @LastEditTime: 2020-12-04 23:23:13
 * @LastEditors: Chengbotao
 * @FilePath: \bee-admin-vue2x\src\views\Login.vue
-->

<template>
  <div class="bee-login_container">
    <el-form>
      <el-form-item>
        <el-input placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请输入密码" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>
<style lang="scss" scoped>
.bee-login_container {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
}
</style>
