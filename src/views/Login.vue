<!--
 * @Author: Chengbotao
 * @Description: 
 * @Date: 2020-12-04 22:57:06
 * @LastEditTime: 2020-12-05 00:12:09
 * @LastEditors: Chengbotao
 * @FilePath: \bee-admin-vue2x\src\views\Login.vue
-->

<template>
  <section class="bee-login_container">
    <el-form>
      <el-form-item>
        <el-input
          v-model="user"
          placeholder="请输入用户名"
          prefix-icon="el-icon-user"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="pwd"
          placeholder="请输入密码"
          prefix-icon="el-icon-lock"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="signIn">登录</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: "",
      pwd: ""
    };
  },
  methods: {
    signIn() {
      this.$router.push("/home");
    }
  }
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
