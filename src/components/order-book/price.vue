<template>
  <div class="orders-book__list-info d-flex align-center px-5 pt-4 justify-center pb-5">
    <h5
      :class="`text-h5 d-flex align-center font-weight-regular ${priceDiff === 'equal' ? 'white--text' : priceDiff === 'more' ? 'green--text' : 'red--text'}`"
    >
      {{ price || '0' }}
      <v-icon
        v-if="priceDiff !== 'equal'"
        :class="priceDiff === 'equal' ? 'white--text' : priceDiff === 'more' ? 'green--text' : 'red--text'"
      >mdi{{priceDiff === "more" ? "mdi-arrow-top-right" : "mdi-arrow-bottom-right-thin"}}</v-icon>
    </h5>
    <h5 class="font-weight-regula grey--text lighten-3 mx-2 mt-2">
      ${{ lastPrice || '0' }}
    </h5>
  </div>
</template>

<script>
import getPriceDiff from "@/helpers/priceDiff";

export default {
  name: "OrdersBookPriceComponent",

  props: {
    price: {
      type: String,
      default: "0",
    },

    lastPrice: {
      type: String,
      default: "0",
    },
  },

  computed: {
    // function for get price difference more, less, equal
    priceDiff() {
      return getPriceDiff(this.lastPrice, this.price);
    },
  },
};
</script>

<style></style>
