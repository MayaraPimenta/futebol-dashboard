<template>
  <LoadingSpinner v-if="loading" />
  <router-link
    v-else
    to="/votacao"
    class="voting-redirect"
  >
    <div
      class="voting-redirect__voting-data"
    >
      <h1>
        Rodada
      </h1>
      <p>
        Começa: {{ formatDate(activeRound.startDate) }}
      </p>
      <p>
        Encerra: {{ formatDate(activeRound.endDate) }}
      </p>
    </div>

    <div class="voting-redirect__text">
      Vote agora!
    </div>
  </router-link>
</template>

<script>
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'VotingRedirect',

  components: {
    LoadingSpinner,
  },

  data() {
    return {
      loading: false,
    };
  },

  computed: {
    ...mapGetters([
      'userToken',
      'activeRound',
    ]),
  },

  methods: {
    formatDate(date) {
      const fullDate = new Date(date);
      const day = fullDate.getDate();
      const month = fullDate.getMonth();
      const fullMonth = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

      return `${day} de ${fullMonth[month]}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.voting-redirect {
  height: 170px;
  margin-top: 40px;
  background-color: $gray-card;
  backdrop-filter: blur(4px);
  border-radius: 10px;
  color: white;
  padding: 24px;
  text-decoration: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template: 1fr / auto auto;

  &__text {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 700;
    color: #FB891F;
  }
}
</style>
