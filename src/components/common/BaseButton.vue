<template>
  <button
    class="base-button"
    :style="{ 'background-color': btnColor, 'border': `2px solid${borderColor}` }"
    @click="$emit('action')"
  >
    <div class="base-button__content">
      <p
        class="base-button__content__text"
        :style="{ 'color': txtColor }"
      >
        <slot>
          ENVIAR
        </slot>
      </p>
      <span
        class="material-symbols-outlined base-button__content__left-icon"
        :style="{ 'color': txtColor }"
      >
        {{ iconName }}
      </span>
    </div>
  </button>
</template>

<script>
  export default {
    name: 'BaseButton',

    props: {
      borderColor: {
        type: String,
        default: '#f8f8f8'
      },
      btnColor: {
        type: String,
        default: '#FB891F'
      },
      txtColor: {
        type: String,
        default: '#f8f8f8'
      },
      iconName: {
        type: String,
        default: ''
      },
    },
  };
</script>

<style lang="scss" scoped>
.base-button {
  padding: 0.5rem 0.7rem;
  border-radius: 10px;

  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    &__text {
      margin: 0;
    }
  }
}
</style>