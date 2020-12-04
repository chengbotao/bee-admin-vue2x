/*
 * @Description:
 * @Author: Chengbotao
 * @Date: 2020-12-04 15:32:03
 * @LastEditors: Chengbotao
 * @LastEditTime: 2020-12-04 17:10:15
 * @FilePath: \bee-admin-vue2x\src\store\index.js
 */
import Vue from "vue";
import Vuex from "vuex";
import vuexPersistedStates from "vuex-persisted-states";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
  plugins: [vuexPersistedStates()]
});
