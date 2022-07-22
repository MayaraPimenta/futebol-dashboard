<template>
  <div class="top-3">
    <div
      v-for="player in allPlayers"
      :key="player.id"
      class="top-3__container"
    >
      <img src="">
      <p>Teste1</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Top3',

  computed: {
    ...mapGetters([
      'allPlayers',
    ]),
  },

  methods: {
  }
};
</script>

<style lang="scss" scoped>
.top-3 {
  height: 400px;
  background-color: $gray-card;
  backdrop-filter: blur(4px);
  border-radius: 10px;
  color: white;
  padding: 1.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
