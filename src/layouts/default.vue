<template>
  <div class="wrapper">
    <AppHeader class="border--bottom"/>
    <div class="wrapper-content d-flex flex-column">
      <router-view />
    </div>
  </div>
</template>

<script>
// App header component
import AppHeader from "@/components/app/header.vue";

export default {
  name: "DefaultLayout",

  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
  .wrapper {
    min-height: 100vh;
    height: 100%;
    background: rgb(20, 21, 26);
    
    &-content {
      height: 100%;
      padding-top: 64px;
    }
  }
</style>

