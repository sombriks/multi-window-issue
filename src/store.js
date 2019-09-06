import Vue from "vue";
import Vuex, { Store } from "vuex";

Vue.use(Vuex);

const store = new Store({
  state: {
    hello: "x"
  },
  mutations: {
    setHello(state, hello) {
      state.hello = hello;
      return state;
    }
  },
  actions: {
    say(_, msg) {
      console.log("on say");
      worker.postMessage(msg);
    }
  }
});

const worker = new Worker("ww.js");

worker.onmessage = e => {
  store.commit("setHello", e.data);
};

export default store;
