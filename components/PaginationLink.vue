<template functional>
  <span
    v-bind="data.attrs"
    class="action-link"
    :class="[data.staticClass, data.class, { 'action-link--active': props.active }]"
    v-on="listeners"
  >
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
    },
  },
};
</script>
