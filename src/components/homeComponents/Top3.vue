<template>
  <div class="top-3">
    <div
      v-for=" data in votingAverage"
      :key="data.player.id"
      class="top-3__card"
    >
      <div class="top-3__card__header">
        <div
          class="top-3__card__header--circle"
          :style="{ 'background-image': `url(${data.player.imageUrl})` }"
        />
        <p class="top-3__card__header--text">
          {{ data.player.name }}
        </p>
      </div>

      <div class="top-3__card__average">
        <span>
          {{ data.voteAttributes[data.voteAttributes.length - 1].value }}
        </span>
        <p>
          MÉDIA
        </p>
      </div>

      <div
        v-for="attributes in data.voteAttributes.slice(0, -1)"
        :key="attributes.id"
        class="top-3__card__inputs"
      >
        <label
          for="attack"
          class="top-3__card__inputs--label"
        >
          {{ attributes.name }}
          <input
            class="top-3__card__inputs--range"
            type="range"
            name="attack"
            max="10"
            min="0"
            disabled
            :value="attributes.value"
          >
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Top3',

  data() {
    return {
    };
  },

  computed: {
    ...mapGetters([
      'votingAverage',
    ])
  },
};
</script>

<style lang="scss" scoped>
.top-3 {
  display: flex;
  align-items: center;
  gap: 2rem;

  &__card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: 400px;
    background-color: $gray-card;
    backdrop-filter: blur(4px);
    border-radius: 10px;
    color: white;
    padding: 1.5rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &__header {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.5rem;

      &--circle {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.75rem;
        background-color: $secondary;
        font-weight: 600;
        border-radius: 50%;
        height: 60px;
        width: 60px;
        background-size: cover;
        background-position: center;

        &--img {
          height: 60px;
          border-radius: 50%;
        }
      }

      &--text {
        text-transform: uppercase;
        font-weight: $font-regular;
      }
    }

    &__average {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      span {
        font-size: 2rem;
      }

      p {
        margin: 0;
        font-weight: 200;
      }
    }

    &__inputs {
      &--label {
        font-weight: $font-regular;
        font-size: $size-sm;
      }

      &--range {
        width: 100%;
        -webkit-appearance: none;
        height: 5px;
        background-color: $primary-light;
        border-radius: 5px;
        overflow: hidden;

        &::-webkit-slider-runnable-track {
          height: 10px;
          -webkit-appearance: none;
        }

        &::-webkit-slider-thumb {
          width: 10px;
          -webkit-appearance: none;
          height: 10px;
          background-color: $secondary;
          color: $secondary;
          box-shadow: -150px 0 0 150px;
        }

        &::-moz-range-thumb {
          opacity: 0;
        }
      }
    }
  }
}
</style>
