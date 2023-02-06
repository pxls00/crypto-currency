<template>
  <v-app>
    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>

<script>
import DefaultLayout from '@/layouts/default.vue'
export default {
  name: 'App',
  components: {
    DefaultLayout
  },
  computed: {
    layout() {
      return `${this.$route.meta.layout || "Default"}Layout`;
    },
  },
};
</script>

