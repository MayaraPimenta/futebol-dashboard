<template>
  <div class="menu-card">
    <router-link
      to="/"
      class="menu-card__option"
    >
      HOME
    </router-link>

    <router-link
      to="/"
      class="menu-card__option"
    >
      VOTAÇÃO
    </router-link>
  </div>
</template>

<script>
    export default {
      name: 'MenuCard',

      data() {
        return {
        };
      },
    };
</script>

<style lang="scss" scoped>
.menu-card {
    display: none;

    @include screen(tablet-up) {
      height: 400px;
      background-color: $gray-card;
      border-radius: 10px;
      color: white;
      padding: 24px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    &__option {
      text-decoration: none;
      color: #f8f8f8;
      padding: 24px;
      margin-right: -24px;
      margin-left: -24px;
      border-bottom: 1px solid #ffffff24;
      width: 100%;
      font-size: 1.125rem;
      font-weight: 300;
      transition: all 0.5s ease;

      &:first-child {
        padding-top: 0;
      }

      &:hover {
        font-weight: 600;
      }
    }
}
</style>