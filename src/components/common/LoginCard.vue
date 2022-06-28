<template>
  <div class="login-card">
    <div
      class="login-card__form"
    >
      <label
        class="login-card__form--label"
        for="email"
      >
        Email
      </label>
      <input
        class="login-card__form--input"
        type="text"
      >

      <label
        class="login-card__form--label"
        for="password"
      >
        Senha
      </label>
      <input
        class="login-card__form--input"
        type="password"
      >
      <button class="login-card__form--btn">
        ENTRAR
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LoginCard',
  };
</script>

<style lang="scss" scoped>
.login-card {
    background-color: $secondary;
    border-radius: 10px;
    color: $white;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      &--label {
        font-size: $text-base;
        font-weight: $font-semibold;
      }

      &--input {
        margin-bottom: 1rem;
        height: 30px;
        border-radius: 7px;
        border: none;
        outline: none;
        padding: 0 7px;
      }

      &--btn {
        width: 100%;
        height: 30px;
        border-radius: 5px;
        border: none;
        margin-top: 1rem;
        font-weight: 700;
      }
    }
}
</style>