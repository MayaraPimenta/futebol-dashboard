<template>
  <div class="profile">
    <div class="profile__avatar">
      <img
        src="../../assets/img/dog-profile.jpg"
        alt="Foto de perfil"
        class="profile__avatar--img"
      >
    </div>
    <h1 class="profile__name">
      John Doe
    </h1>
    <p class="profile__address">
      John Doe
    </p>
  </div>
</template>

<script>
    export default {
        name: 'Profile',
    };
</script>

<style lang="scss" scoped>
.profile {
  background-color: white;
  margin-top: 1rem;
  border-radius: 10px;
  box-shadow: 15px 15px 62px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__avatar {
    width: 80px;
    height: 80px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;

    &--img {
      display: inline;
      margin: 0 auto;
      height: 100%;
      width: auto;
    }
  }
}
</style>