<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <img
        class="sidebar__header__img"
        src="../../assets/img/logo/feira_logo.svg"
        alt="logo"
      >
    </div>

    <div class="sidebar__round" />

    <div class="sidebar__body">
      <nav class="sidebar__body__nav">
        <router-link
          to="/"
          class="sidebar__body__nav--item"
        >
          <span class="material-symbols-outlined">
            home
          </span>
          Dashboard
        </router-link>
        <router-link
          to="/pedidos"
          class="sidebar__body__nav--item"
        >
          <span class="material-symbols-outlined">
            sort
          </span>
          Pedidos
        </router-link>
        <router-link
          to="/usuarios"
          class="sidebar__body__nav--item"
        >
          <span class="material-symbols-outlined">
            group
          </span>
          Usuários
        </router-link>
        <router-link
          to="/cardapio"
          class="sidebar__body__nav--item"
        >
          <span class="material-symbols-outlined">
            restaurant_menu
          </span>
          Cardápio
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Sidebar',
    };
</script>

<style lang="scss" scoped>
.sidebar {
  position: relative;
  @include component;

  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $primary;
    border-radius: 10px 10px 0 0;
    height: 130px;

    &__img {
      width: 120px;
      padding: 1rem 0;
    }
  }

  &__round {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: #f1af86ab;
    position: absolute;
    top: 104px;
    left: 88px;
  }

  &__body {
      &__nav {
        display: flex;
        flex-direction: column;
        color: $gray;

        &:first-child {
          padding-top: 20px;
        }

        &--item {
          text-decoration: none;
          color: $gray;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 20px;
          padding: 24px;
          transition: all 0.3s ease;
        }

        a {
          &:hover {
          color: $primary;
          font-weight: $font-bold;
          }
        }
      }
  }
}
</style>