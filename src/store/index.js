/*
 * @Description:
 * @Author: Chengbotao
 * @Date: 2020-12-04 15:32:03
 * @LastEditors: Chengbotao
 * @LastEditTime: 2020-12-22 15:07:40
 * @FilePath: \bee-admin-vue2x\src\store\index.js
 */
import Vue from "vue";
import Vuex from "vuex";
import vuexPersistedStates from "vuex-persisted-states";
import { routes } from "../router/config";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    role: ""
  },
  getters: {
    getRoutes(state) {
      return routes.filter(item => item.meta.role.includes(state.role));
    }
  },
  mutations: {
    setUseRole(state, role) {
      state.role = role;
    }
  },
  actions: {
    setUseRole({ commit }, role) {
      commit("setUseRole", role);
    }
  },
  modules: {},
  plugins: [
    vuexPersistedStates({
      storage: sessionStorage
    })
  ]
});
