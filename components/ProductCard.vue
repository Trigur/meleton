<template functional>
  <div>
    <div>
      <a href="javascript.void(0);" @click.prevent="listeners.click">
        {{ props.product.name }}  
      </a>
    </div>

    <div class="mt-2">
      {{ props.product.price }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",

  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
