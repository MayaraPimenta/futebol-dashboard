<template>
  <div class="voting">
    <BaseButton
      icon-name="Check"
    />
  </div>
</template>

<script>
import BaseButton from '@/components/common/BaseButton.vue';

export default {
  name: 'Voting',

  components: {
    BaseButton,
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
