<template>
  <div class="editable" :class="{ 'editable--edit-mode': isEdit$ }">
    <input 
      v-if="isEdit$"
      v-model="value$"
      :type="type"
      @keydown.enter="buttonClick"
    >

    <template v-else>
      {{ value }}
    </template>

    <div v-if="!isEdit$ || value$" class="editable__button-position">
      <button class="editable__button" @click="buttonClick">
        {{ isEdit$ ? '&#10003;' : '&#9998;' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [Number, String],
      required: true,
    },

    type: {
      type: String,
      default: 'text'
    },
  },

  data() {
    return {
      value$: null,
      isEdit: false,
    };
  },

  watch: {
    value: {
      immediate: true,
      handler(value) {
        this.value$ = value;
      },
    }
  },

  computed: {
    isEdit$() {
      return this.isEdit || !(this.value || this.value === 0);
    },
  },

  methods: {
    buttonClick() {
      if (this.isEdit && this.value$ !== this.value) {
        this.$emit('input', this.value$);
      }

      this.isEdit = !this.isEdit;
    },
  },
};
</script>

<style lang="scss">
.editable {
  display: inline-block;
  position: relative;

  &__button-position {
    position: absolute;
    width: 36px;
    height: 36px;
    right: -24px;
    top: -24px;
    z-index: 1;
    opacity: 0;
    visibility: hidden;
  }

  &--edit-mode &__button-position,
  &:hover &__button-position {
    opacity: 1;
    visibility: visible;
    transition: opacity .3s;
  }

  &__button {
    width: 24px;
    height: 24px;
    font-size: 16px;
    border: 1px solid currentColor;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
    outline: none !important;
  }

    &__button,
    &__button-position {
      display: flex;
      align-items: center;
      justify-content: center;
    }
}
</style>
