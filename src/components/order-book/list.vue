<template>
  <div class="orders-book">
    <h4 class="white--text text-h5 text-center">{{ bids ? 'Bids' : 'Asks' }}</h4>
    <div class="orders-book__top px-5 light--text">
      <div class="orders-book__top-info py-2 d-flex">
        <div class="text-left">
          <span class="text-subtitle-2 font-weight-regular grey--text lighten-3">
            Price({{ cryptoName?.split("/")[1] }})
          </span>
        </div>
        <div class="text-center">
          <span class="text-subtitle-2 font-weight-regular grey--text lighten-3">
            Amount({{ cryptoName?.split("/")[0] }})
          </span>
        </div>
        <div class="text-right">
          <span class="text-subtitle-2 font-weight-regular grey--text lighten-3">
            Total
          </span>
        </div>
      </div>
    </div>
    <div
      :class="`orders-book__list orders-book__list--${
        bids ? 'bids' : 'asks'
      } py-2 px-2`"
    >
      <p class="grey--text text-center" v-if="!list.length">No data to display</p>
      <OrdersBookItem
        v-for="(item, key) in list"
        :key="key"
        :item="item"
        :bids="bids"
      />
    </div>
  </div>
</template>

<script>
// Crypto orders book item component 
import OrdersBookItem from "@/components/order-book/item.vue";

export default {
  name: "OrdersBookListComponent",
  
  components: {
    OrdersBookItem,
  },

  props: {
    list: {
      type: Array,
      required: true,
    },

    cryptoName: {
      type: String,
      required: true,
    },

    bids: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.orders-book {
  max-width: 350px;
  width: 100%;
  height: max-content;

  &__top { 
    &-info {
      div {
        width: calc(100% / 3);
      }
    }
  }

  &__list {
    max-height: 550px;
    min-height: 200px;
    height: 100%;
    overflow: auto;
    transition: all 0.2s;

    &:hover {
      &::-webkit-scrollbar-thumb {
        visibility: visible;
      }
    }
    
    &::-webkit-scrollbar {
      width: 7px;
    }
    
    &::-webkit-scrollbar-track {
      border-radius: 5px;
      background-color: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: rgb(61, 62, 73, 0.7);
      border-radius: 5px;
      visibility: hidden;
    }
    
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgb(61, 62, 73);
      cursor: pointer;
    }
  }
}
</style>
