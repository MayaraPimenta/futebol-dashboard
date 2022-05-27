<template>
  <div class="home">
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from '@/components/homeComponents/Dashboard.vue';

export default {
  name: 'Home',

  components: {
    Dashboard,
  }
};
</script>
