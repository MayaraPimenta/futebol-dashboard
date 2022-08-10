<template>
  <LoadingSpinner v-if="loading" />
  <div
    v-else
    class="home"
  >
    <ProfileCard />
    <VotingRedirect />
    <MenuCard />
    <Top3 />
  </div>
</template>

<script>
import ProfileCard from '@/components/homeComponents/ProfileCard.vue';
import MenuCard from '@/components/homeComponents/MenuCard.vue';
import Top3 from '@/components/homeComponents/Top3.vue';
import VotingRedirect from '@/components/homeComponents/Voting.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Home',

  components: {
    ProfileCard,
    MenuCard,
    Top3,
    LoadingSpinner,
    VotingRedirect,
  },

  data() {
    return {
      loading: false,
    };
  },

  created() {
    this.getAllRounds();
    this.getVotes();
  },

  methods: {
    ...mapActions([
      'getAllRounds',
      'getVotes',
    ]),
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-columns: 1fr;
  padding: 4% 0;
  gap: 13px;

  @include screen(tablet-up) {
    grid-template: auto auto /0.8fr 2fr;
    gap: 60px;
  }
}
</style>
