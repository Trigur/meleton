<template>
  <l-container v-if="product">
    <div>
      <a href="javascript.void(0);" @click.prevent="$router.push({ name: 'products' })">
        &#10094; Назад
      </a>
    </div>

    <div class="mt-4">
      <l-title>
        <editable 
          :value="product.name" 
          @input="$store.commit('updateProduct', [product, 'name', $event])"
        ></editable>
      </l-title>
    </div>

    <div class="mt-4">
      Цена: 
      <editable
        type="number"
        :value="product.price"
        @input="$store.commit('updateProduct', [product, 'price', Number($event)])"
      ></editable>
    </div>

    <div class="mt-4">
      <button @click="remove">
        Удалить
      </button>
    </div>
  </l-container>
</template>

<script>
import Editable from '~/components/Editable.vue';

export default {
  components: {
    Editable,
  },

  asyncData(ctx) {
    return { id: Number(ctx.params.id) };
  },

  computed: {
    product() {
      return this.$store.state.products.find((item) => item.id === this.id);
    },
  },

  methods: {
    remove() {
      if (window.confirm("Это точно?")) { 
        this.$store.commit('removeProduct', this.product);
      }

      this.$router.push({ 
        name: 'products', 
      });
    },
  },
};
</script>
