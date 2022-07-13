<template>
  <div class="profile-card">
    <div
      class="profile-card__picture"
    />
    <div class="profile-card__info">
      <p class="profile-card__info--name">
        {{ data.name }}
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'ProfileCard',

        data() {
            return {
                data: {
                    name: 'GIORGIAN DE ARRASCAETA',
                }
            };
        },
    };
</script>

<style lang="scss" scoped>
.profile-card {
    height: 210px;
    background-color: $gray-card;
    backdrop-filter: blur(4px);
    border-radius: 10px;
    color: white;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &__picture {
        height: 90px;
        width: 90px;
        border-radius: 50%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        border: 4px solid white;
        background-image: url('../../assets/img/profile-picture.png');
    }
}
</style>