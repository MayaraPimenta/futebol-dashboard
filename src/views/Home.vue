<template>
  <div class="home">
    <LoginCard />
  </div>
</template>

<script>
import LoginCard from '@/components/common/LoginCard.vue';

export default {
  name: 'Home',

  components: {
    LoginCard
  }
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
