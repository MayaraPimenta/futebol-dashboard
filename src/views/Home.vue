<template>
  <div class="home">
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
import VotingRedirect from '@/components/homeComponents/VotingRedirect.vue';


export default {
  name: 'Home',

  components: {
    ProfileCard,
    MenuCard,
    Top3,
    VotingRedirect,
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
    padding: 4rem;
  }
}
</style>
