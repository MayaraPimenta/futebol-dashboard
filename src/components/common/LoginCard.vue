<template>
  <LoadingSpinner v-if="loading" />
  <div
    v-else
    class="login-card"
  >
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
  import LoadingSpinner from '@/components/common/LoadingSpinner.vue';

  export default {
    name: 'LoginCard',

    components: {
      LoadingSpinner,
    },

    data() {
      return {
        loading: false,
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
        this.loading = true;

        await this.loginUser({
          email: this.user.email,
          password: this.user.password,
        });

        this.loading = false;
      }
    }
  };
</script>

<style lang="scss" scoped>
.login-card {
    background-color: $gray-card;
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
        font-size: $size-base;
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
        font-family: 'Montserrat';
        background-color: #01152c7d;
        transition: all 0.5s ease;

        &:hover {
          filter: brightness(1.5);
        }
      }
    }
}
</style>