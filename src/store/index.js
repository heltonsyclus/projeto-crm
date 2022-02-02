import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import showcase from "./showcase";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      showcase,
    },

    strict: process.env.DEBUGGING,
  });

  return Store;
});
