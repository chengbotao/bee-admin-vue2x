<!--
 * @Author: Chengbotao
 * @Description: 
 * @Date: 2020-12-04 22:57:06
 * @LastEditTime: 2020-12-22 15:08:36
 * @LastEditors: Chengbotao
 * @FilePath: \bee-admin-vue2x\src\views\Login.vue
-->

<template>
  <section class="bee-login_container">
    <el-form
      class="login_form"
      ref="login_form"
      :model="formModel"
      :rules="formRules"
    >
      <el-form-item prop="userName">
        <el-input
          v-model="formModel.userName"
          placeholder="请输入用户名"
          prefix-icon="el-icon-user"
        ></el-input>
      </el-form-item>
      <el-form-item prop="passWord">
        <el-input
          v-model="formModel.passWord"
          placeholder="请输入密码"
          prefix-icon="el-icon-lock"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="btn_sign" type="primary" @click="signIn"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
import { resetRouter } from "@/router";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      formModel: {
        userName: "",
        passWord: ""
      },
      formRules: {
        userName: [],
        passWord: []
      }
    };
  },
  computed: {
    ...mapGetters(["getRoutes"])
  },
  methods: {
    ...mapActions(["setUseRole"]),
    signIn() {
      this.setUseRole("admin");
      this.$router.addRoutes(this.getRoutes);
      this.$router.push("/home");
    },
    resetRoutes() {
      resetRouter();
    }
  },
  mounted() {
    // 退回登录页重置路由
    this.resetRoutes();
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
  display: flex;
  justify-content: center;
  align-items: center;
  .login_form {
    width: 5.2rem;
    height: 4.8rem;
    .btn_sign {
      width: 100%;
    }
  }
}
</style>
