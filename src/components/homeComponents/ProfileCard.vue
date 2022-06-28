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
    height: 227px;
    background-color: #b4b7ba5a;
    border-radius: 10px;
    color: white;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;

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