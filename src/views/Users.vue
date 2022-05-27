<template>
  <div class="users">
    <UsersList />
  </div>
</template>

<script>
  import UsersList from '@/components/usersComponents/UsersList.vue';

    export default {
      name: 'Users',

      components: {
        UsersList,
      }
    };
</script>

<style lang="scss" scoped>

</style>