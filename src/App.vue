<template>
  <div id="app">
    <transition
      name="slide-fade"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',

  components: {

  },
};
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;

  body {
    margin: 0;

    #app {
      font-family: Montserrat, sans-serif;
      background-color: #fdfcf8;
      background-image: url('@/assets/img/background.svg');
      color: $black;
      min-height: 100vh;
      padding: 0 4%;
      font-size: $size-sm;
      font-weight: $font-medium;

      @include screen(tablet-big-up) {
        padding: 0 8%;
      }
    }
  }
}
</style>
