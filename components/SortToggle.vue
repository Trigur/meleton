<template functional>
  <span 
    v-bind="attrs"
    class="sort-toggle action-link" 
    :class="[data.staticClass, { 'sort-toggle--active action-link--active': !!props.state }]"
    v-on="listeners"
  >
    <slot></slot>
    <span v-if="props.state === 'desc'">&darr;</span>
    <span v-if="props.state === 'asc'">&uarr;</span>
  </span>
</template>

<script>
export default {
  props: {
    state: {
      validator(v) {
        return !v || ['asc', 'desc'].includes(v);
      },
    },
  },
}
</script>

<style lang="scss">
.sort-toggle {
  display: inline-flex;
  opacity: .7;

  &:hover,
  &--active {
    opacity: 1;
  }
}
</style>
