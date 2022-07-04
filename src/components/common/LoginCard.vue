<template>
  <div class="login-card">
    <div class="login-card__title">
      LOGIN
    </div>
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
        v-model="user.email"
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
        v-model="user.password"
        class="login-card__form--input"
        type="password"
      >
      <button
        class="login-card__form--btn"
        @click="login"
      >
        ENTRAR
      </button>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'LoginCard',

    data() {
      return {
        user: {
          email: '',
          password: '',
        }
      };
    },

    computed: {
      ...mapGetters([
        'isLoggedIn',
      ])
    },

    methods: {
      ...mapActions([
        'loginUser',
      ]),

      async login() {
        await this.loginUser({
          email: this.user.email,
          password: this.user.password,
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
.login-card {
    background-color: #ffffff21;
    backdrop-filter: blur(4px);
    border-radius: 10px;
    color: $white;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__title {
      margin-bottom: 2rem;
      font-size: 1.5rem;
      font-weight: 700;
    }

    &__form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      &--label {
        font-size: $text-base;
        font-weight: $font-light;
        margin-bottom: 3px;
      }

      &--input {
        margin-bottom: 1rem;
        height: 40px;
        width: 280px;
        border-radius: 7px;
        border: none;
        outline: none;
        padding: 0 10px;

        @include screen(phone-only) {
          width: 180px;
        }
      }

      &--btn {
        width: 100%;
        height: 45px;
        border-radius: 20px;
        border: none;
        margin-top: 1rem;
        font-weight: 700;
        color: $white;
        cursor: pointer;
        font-family: 'Nunito';
        background-color: #01152c7d;

        &:hover {
          filter: brightness(1.5);
        }
      }
    }
}
</style>