<template>
  <v-app-bar color="rgb(20, 21, 26)" dark flat fixed>
    <div class="crypto-info py-2align-center px-4 mx-auto">
      <div class="crypto-info__select">
        <v-select
          :items="getCryptoList"
          item-text="name"
          class="pt-4"
          v-model="cryptoItem"
          dark
        >
          <template v-slot:item="{ item, attrs, on }">
            <v-list-item
              v-bind="attrs"
              v-on="on"
              @click="cryptoItemClicked(item)"
            >
              <v-list-item-title
                :id="attrs['aria-labelledby']"
                class="w-100"
                v-text="item.name"
              ></v-list-item-title>
            </v-list-item>
          </template>
        </v-select>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
import eventBus from "@/bus/eventBus";
import { mapGetters } from "vuex";

export default {
  name: "HeaderComponent",
  data() {
    return {
      cryptoItem: "",
      price: 0,
      lastPrice: 0,
    };
  },

  computed: {
    ...mapGetters(['getCryptoList']),
  },

  created() {
    this.setCryptoItem();
  },

  methods: {
    setCryptoItem() {
      eventBus.$on("setCrypto", (path) => {
        this.cryptoItem = this.getCryptoList.find(
          (item) => item.path === path
        ).name;
      });
    },
    cryptoItemClicked(item) {
      const path = this.$route.params.crypto_name;
      if (item.path !== path) {
        this.$router.push({
          name: "crypto",
          params: { crypto_name: item.path },
        });
        eventBus.$emit("cryptoChanged");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.crypto-info {
  &__select {
    max-width: 200px;
  }
}
</style>
