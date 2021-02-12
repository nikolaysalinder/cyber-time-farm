import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    walletID: null,
    isMiniPool: false,
    currentCurrency: "",
    prevPagePath: "",
  },
  mutations: {
    setWalletID(state) {
      state.walletID = "0xvB8k;asdjksdjfjasdkfjksjdfkf;af9856";
    },
    setPrevPagePath(state, path) {
      state.prevPagePath = path;
    },
    setCurrentCurrency(state, pool) {
      state.currentCurrency = pool.name;
    },
    setMiniPool(state, isMiniPool) {
      state.isMiniPool = isMiniPool;
    },
  },
  actions: {},
  getters: {
    walletID(state) {
      return state.walletID;
    },
    getIsMiniPool(state) {
      return state.isMiniPool;
    },
    getShortWalletID(state) {
      const startID = state.walletID.split("").slice(0, 5);
      const endID = state.walletID.split("").slice(-4);
      const dotArr = [".", ".", ".", "."];
      const shortWalletID = startID.concat(dotArr).concat(endID).join("");
      return shortWalletID;
    },
  },
});
