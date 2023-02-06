import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cryptoList: [
      {
        name: "BTC/USDT",
        path: "btcusdt",
      },
      {
        name: "BNB/BTC",
        path: "bnbbtc",
      },
      {
        name: "ETH/BTC",
        path: "ethbtc",
      },
    ],
  },

  getters: {
    getCryptoList: (state) => state.cryptoList,
  },
  mutations: {},

  actions: {},
  
  modules: {},
});
