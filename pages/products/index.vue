<template>
  <l-container>
    <l-title>
      Список покупок
    </l-title>

    <sort-row
      class="mt-4"
      :types="sortTypes"
      @sort="$store.commit('sort', $event)"
    ></sort-row>

    <l-grid class="mt-4">
      <product-card
        v-for="product in products"
        :key="product.id"
        :product="product"
        @click="toProduct(product.id)"
      ></product-card>
    </l-grid>

    <div class="d-flex mt-4">
      <button @click="add">
        Добавить
      </button>

      <pagination 
        class="ml-auto"
        :page="page"
        :per-page="perPage"
        :total="total"
        @input="onPaginationClick"
      ></pagination>
    </div>
  </l-container>
</template>

<script>
import ProductCard from '~/components/ProductCard.vue';
import SortRow from '~/components/SortRow.vue';
import Pagination from '~/components/Pagination.vue';
import { mapState, mapGetters } from 'vuex';

export default {
  components: {
    ProductCard,
    SortRow,
    Pagination,
  },

  data() {
    return {
      sortTypes: [
        {
          label: 'Цена',
          value: 'price',
        },
        {
          label: 'Дата',
          value: 'date',
        },
      ],
    };
  },

  computed: {
    ...mapState([
      'page',
      'perPage',
    ]),

    ...mapGetters([
      'products',
      'total',
    ]),
  },

  watch: {
    '$route.query'(to, from) {
      if (this.page !== to.page && to.page !== from.page) { 
        this.setPage(to.page);
      }
    }
  },

  methods: {
    toProduct(id) {
      this.$router.push({ 
        name: 'products-id', 
        params: { id },
      });
    },

    add() {
      this.$router.push({ 
        name: 'products-new',
      });
    },

    onPaginationClick(page) {
      const query = page === 1 ? {} : { page };

      this.$router.push({ query });
      this.setPage(page);
    },

    setPage(page) {
      this.$store.commit('setPage', page ? parseInt(page) : 1);
    },
  },

  created() {
    const { perPage, total } = this;
    let page = this.$route.query.page ? parseInt(this.$route.query.page) : 1;

    if (page !== 1 && page > Math.ceil(total / perPage)) {
      page = 1;
    }

    this.setPage(page);
  },
};
</script>
