<template>
  <div id="app">
    <Sidebar />
    <transition
      name="slide-fade"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
import Sidebar from '@/components/common/Sidebar.vue';

export default {
  name: 'App',

  components: {
    Sidebar,
  },
};
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;

  body {
    margin: 0;

    #app {
      font-family: Nunito, sans-serif;
      background-color: #fdfcf8;
      color: $black;
      min-height: 100vh;
      padding: 0 4%;
      font-size: $text-sm;
      font-weight: $font-medium;
      display: grid;
      grid-template-columns: 260px auto;

      @include screen(tablet-big-up) {
        padding: 0 8%;
      }
    }
  }
}
</style>
