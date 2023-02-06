<template>
  <div class="crypto d-flex flex-column pb-5">
    <OrdersBookPrice :price="cryptoPrice" :lastPrice="cryptoLastPrice" />
    <div
      class="crypto__column crypto__column--orders-book border--right border--left mx-auto align-streetch d-flex flex-wrap"
    >
      <OrdersBookList 
        :list="orderBookListAsk" 
        :cryptoName="cryptoName"
      />
      <div class="border--left"></div>
      <OrdersBookList
        :list="orderBookListBids"
        :cryptoName="cryptoName"
        :bids="true"
      />
    </div>
    <v-overlay :value="showLoader" opacity=".9">
      <v-progress-circular
        indeterminate
        color="amber"
        dark
        size="64"
      ></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import eventBus from "@/bus/eventBus";
import throttle from "@/helpers/throttle";

// Crypto orders book list component
import OrdersBookList from "@/components/order-book/list.vue";
// Crypto Price
import OrdersBookPrice from "@/components/order-book/price.vue";

export default {
  name: "CryptoItemPage",

  components: {
    OrdersBookList,
    OrdersBookPrice,
  },

  data() {
    return {
      cryptoLastPrice: "",
      cryptoPrice: "",
      cryptoName: "",

      orderBookListAsk: [],
      orderBookListBids: [],
      
      ordersBookSocket: null,
      cryptoSocket: null,
      lastUpdatedId: null,
      
      showLoader: false,

      // Throtteled functions
      setOrdersBookListThrottled: throttle(this.setOrdersBookList, 1000),
      setCryptoPriceThrottled: throttle(this.setCryptoPrice, 1000),
    };
  },

  computed: {
    // Crypto list
    ...mapGetters(["getCryptoList"]),
  },

  created() {
    this.cryptoChangedEventBusListener();
  },

  async mounted() {
    this.closeCryptoSockets()
    this.setCryptoEventBusEmitter();
    this.getCryptoName();
    // Get crypto by http request
    this.getCrypto(this.$route.params.crypto_name);
    // Get crypto orders book by http request
    await this.getOrdersBookListHttps(this.$route.params.crypto_name);
    // Websocket connect orders book 
    this.getOrdersBookList(this.$route.params.crypto_name);
  },

  methods: {
    // listen crypto select change
    cryptoChangedEventBusListener() {
      eventBus.$on("cryptoChanged", async () => {
        this.closeCryptoSockets();
        this.getCryptoName();
        await this.getOrdersBookListHttps(this.$route.params.crypto_name);
        this.getOrdersBookList(this.$route.params.crypto_name);
        this.getCrypto(this.$route.params.crypto_name);
      });
    },

    // Get crypto name from route params
    getCryptoName() {
      const urlName = this.$route.params.crypto_name;
      this.cryptoName = this.getCryptoList.find(
        (item) => item.path === urlName
      ).name;
    },

    // Close all socket connections and clear crypto data
    closeCryptoSockets() {
      this.showLoader = true
      this.cryptoSocket?.close();
      this.ordersBookSocket?.close();
      setTimeout(() => {
        this.cryptoPrice = this.cryptoLastPrice = "";
        this.orderBookListAsk = this.orderBookListBids = [];
        this.showLoader = false
      }, 1000);
    },

    // Set route params to header selection value
    setCryptoEventBusEmitter() {
      eventBus.$emit("setCrypto", this.$route.params.crypto_name);
    },

    // Set crypto price and difference 
    setCryptoPrice(data) {
      const price = parseFloat(data.p).toFixed(2);
      this.cryptoLastPrice = this.cryptoPrice || price;
      this.cryptoPrice = price;
    },

    // Set crypto orders book 
    setOrdersBookList(data) {
      if (this.lastUpdatedId <= data.u) {
        this.orderBookListAsk = data.a
          .filter((item) => +item[1])
          .map((item) => {
            const price = parseFloat(item[0]);
            const amount = parseFloat(item[1]);
            return {
              price: price.toFixed(2),
              amount: amount.toFixed(5),
              totalPrice: (price * amount).toFixed(5),
            };
          });
        this.orderBookListBids = data.b
          .filter((item) => +item[1])
          .map((item) => {
            const price = parseFloat(item[0]);
            const amount = parseFloat(item[1]);
            return {
              price: price.toFixed(2),
              amount: amount.toFixed(5),
              totalPrice: (price * amount).toFixed(5),
            };
          });
      }
    },

  // WEBSOCKET CONNECTS
    // Websocket connection to crypto by route params crypto_name
    getCrypto(crypto) {
      this.cryptoSocket = new WebSocket(
        `wss://stream.binance.com:9443/ws/${crypto}@trade`
      );
      this.cryptoSocket.onmessage = (event) => {
        const response = JSON.parse(event.data);
        this.setCryptoPriceThrottled(response);
      };
    },

    // Websocket connection to crypto orders book by route params crypto_name
    getOrdersBookList(crypto) {
      this.ordersBookSocket = new WebSocket(
        `wss://stream.binance.com:9443/ws/${crypto}@depth`
      );
      this.ordersBookSocket.onmessage = (event) => {
        const response = JSON.parse(event.data);
        this.setOrdersBookListThrottled(response);
      };
    },

  // REST HTTP REQUESTS
    // Get crypto request
    getCryptoHttps(crypto) {
      return new Promise((resolve, reject) => {
        this.axios
          .get(`https://api.binance.com/api/v3/avgPrice?symbol=${crypto}`)
          .then((res) => resolve(res.data))
          .catch((err) => reject(err));
      });
    },
    // Get crypto orders book request
    getOrdersBookListHttps(crypto) {
      return new Promise((resolve, reject) => {
        this.axios
          .get(
            `https://api.binance.com/api/v3/depth?symbol=${crypto.toUpperCase()}&limit=50`
          )
          .then((res) => {
            return res.data;
          })
          .then((data) => {
            this.lastUpdatedId = data.lastUpdateId;
            resolve(data);
          })
          .catch((err) => reject(err));
      });
    },
  },
};
</script>