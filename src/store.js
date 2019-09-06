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
      // worker.postMessage(msg);
      localStorage.setItem("msg", msg + new Date());
    }
  }
});

window.addEventListener("storage", e => {
  console.log(e);
  store.commit("setHello", localStorage.getItem("msg"));
});

export default store;
