<template>
  <router-link
    to="/votacao"
    class="voting-redirect"
  >
    <h1>
      Rodada {{ activeRound.number }}
    </h1>
    <p>
      Começa: {{ activeRound.startDate }}
    </p>
    <p>
      Encerra: {{ activeRound.endDate }}
    </p>
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
      return this.allRounds.data[0];
    }
  },

  created() {
    this.getAllRounds();
  },

  methods: {
    ...mapActions([
      'getAllRounds',
    ]),
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
}
</style>
