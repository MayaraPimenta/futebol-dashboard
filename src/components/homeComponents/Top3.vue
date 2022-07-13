<template>
  <div class="top-3">
    TOP 3
  </div>
</template>

<script>
export default {
  name: 'Top3',
};
</script>

<style lang="scss" scoped>
.top-3 {
  height: 400px;
  background-color: $gray-card;
  backdrop-filter: blur(4px);
  border-radius: 10px;
  color: white;
  padding: 24px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
