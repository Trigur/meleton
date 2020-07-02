<template functional>
  <component :is="'h' + (props.size || 1)" class="title">
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 1,
    },
  },
};
</script>
