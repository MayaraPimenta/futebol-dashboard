<template>
  <router-link
    to="/votacao"
    class="voting-redirect"
  >
    <div class="voting-redirect__voting-data">
      <h1>
        Rodada {{ activeRound.number }}
      </h1>
      <p>
        Começa: {{ activeRound.startDate }}
      </p>
      <p>
        Encerra: {{ activeRound.endDate }}
      </p>
    </div>

    <div class="voting-redirect__text">
      Vote agora!
    </div>
  </router-link>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'VotingRedirect',

  computed: {
    ...mapGetters([
      'userToken',
      'allRounds',
    ]),

    activeRound() {
      const active = this.allRounds.data.find((el) => {
        const currentDate = new Date;

        return el.endDate > currentDate.toISOString();
      });

      return {
        number: active.number,
        startDate: this.formatDate(active.startDate),
        endDate: this.formatDate(active.endDate)
      };
    }
  },

  created() {
    this.getAllRounds();
    this.activeRound;
  },

  methods: {
    ...mapActions([
      'getAllRounds',
    ]),

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
