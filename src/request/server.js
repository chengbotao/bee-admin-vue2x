/*
 * @Author: Chengbotao
 * @Description:
 * @Date: 2020-12-05 03:05:18
 * @LastEditTime: 2020-12-29 10:26:19
 * @LastEditors: Chengbotao
 * @FilePath: \bee-admin-vue2x\src\request\server.js
 */

import axios from "axios";
export default function SendRequest(options) {
  this.options = options;
  this.server = axios.create(this.options.defaultsConfig);
  this.requestUse = this._addRequestUse(this.server);
  this.responseUse = this._addResponseUse(this.server);
}
SendRequest.prototype = {
  // 创建 axios 实例, 支持多实例 axios
  createAxios(config = {}) {
    return new SendRequest(config);
  },
  // 发送请求
  _request(config) {
    return this.server(config);
  },
  // 添加请求拦截器
  _addRequestUse(instance) {
    return instance.interceptors.request.use(
      config => {
        // 在发送请求之前做些什么
        return this.options.handleReqConfig
          ? this.options.handleReqConfig(config)
          : config;
      },
      error => {
        // 对请求错误做些什么
        return Promise.reject(
          this.options.handleReqErr ? this.options.handleReqErr(error) : error
        );
      }
    );
  },
  delRequestEject() {
    this.server.interceptors.request.eject(this.requestUse);
  },
  // 添加响应拦截器
  _addResponseUse(instance) {
    return instance.interceptors.response.use(
      response => {
        // 对响应数据做点什么
        return this.options.handleResData
          ? this.options.handleResData(response)
          : response;
      },
      error => {
        // 对响应错误做点什么
        return Promise.reject(
          this.options.handleResErr ? this.options.handleResErr(error) : error
        );
      }
    );
  },
  delResponseEject() {
    this.server.interceptors.response.eject(this.responseUse);
  },
  parseInterface(options) {
    Object.keys(options).forEach(key => {
      this[key] = config => {
        return this._request(Object.assign({}, options[key], config));
      };
    });
  }
};
