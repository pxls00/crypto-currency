<template>
  <div class="orders-book__item d-flex px-5">
    <div class="orders-book__item-info orders-book__item--price text-left">
      <span :class="`${!bids ? 'red--text':'green--text'} text-body-2 font-weigth-ligth`">{{ item?.price }}</span>
    </div>
    <div class="orders-book__item-info orders-book__item--amount text-center">
      <span class="grey--text text-body-2 font-weigth-ligth">{{ item?.amount }}</span>
    </div>
    <div class="orders-book__item-info orders-book__item--total text-right">
      <span class="grey--text text-body-2 font-weigth-ligth">{{ item?.totalPrice }}</span>
    </div>
    <div :class="`orders-book__item-progress ${!bids ? 'orders-book__item-progress--red':'orders-book__item-progress--green'}`" :style="{'width': `${parseFloat(item?.totalPrice) / (parseFloat(item?.price) / 100)}%`}"></div>
  </div>
</template>

<script>
export default {
  name: "OrdersBookItemComponent",

  props: {
    item: {
      type: Object,
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
.orders-book__item {
  width: 100%;
  position: relative;

  &-info {
    width: calc(100% / 3);
    position: relative;
    z-index: 2;
  }

  &-progress {
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    
    &--red {
      background: rgba(255, 0, 0, 0.09);
    }

    &--green {
      background: rgba(55, 173, 59, 0.09);
    }
  }
}
</style>
