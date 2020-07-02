<template>
  <l-container>
    <div>
      <a href="javascript.void(0);" @click.prevent="$router.push({ name: 'products' })">
        &#10094; Назад
      </a>
    </div>

    <div class="mt-4">
      Название: 
      <input v-model="name" type="text">
    </div>

    <div class="mt-4">
      Цена: 
      <input v-model="price" type="number">
    </div>

    <div class="mt-4">
      <button :disabled="!(price && name)" @click="save">
        Сохранить
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

  data() {
    return { 
        name: '',
        price: '',
     };
  },

  computed: {
    id() {
      return this.$store.getters.maxId + 1;
    },
  },

  methods: {
    async save() {
      const id = this.id;

      await this.$store.commit('addProduct', {
        id,
        name: this.name,
        price: Number(this.price),
        date: Math.round(Date.now() / 1000),
      });

      this.$router.push({ 
        name: 'products-id', 
        params: { id },
      });
    },
  },
};
</script>
