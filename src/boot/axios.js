import { boot } from "quasar/wrappers";
import axios from "axios";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
var access_token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImNvbGFib3JhZG9ySWQiOjQsInVzZXIiOiJEQU5JTE8iLCJpYXQiOjE2MTE4NzUzODF9.xsA3DYHV_AgMXeII1_f6ife8z8GeXMvd-AFA3RITWiU";

const api = axios.create({
  baseURL: "https://api.syclus.com.br",
  headers: {
    Authorization: access_token,
  },
});

const apiServece = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  /*  headers: {
    Authorization: access_token
  }*/
});
//api.defaults.headers.Authorization = access_token;
export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
  app.config.globalProperties.$apiServece = apiServece;
});

export { api, apiServece };
