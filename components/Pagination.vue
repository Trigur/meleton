<template>
  <div v-if="lastPage > 1">
    <pagination-link :class="{ hidden: hideToStart }" class="ml-2" @click="to(1)">
      &#10094; В начало
    </pagination-link>

    <pagination-link 
      v-for="p in range"
      :key="p"
      :active="page === p"
      class="ml-2"
      @click="to(p)"
    >
      {{ p }}
    </pagination-link>

    <pagination-link :class="{ hidden: hideToEnd }" class="ml-2" @click="to(lastPage)">
      В конец &#10095;
    </pagination-link>
  </div>
</template>

<script>
import PaginationLink from '~/components/PaginationLink.vue';

export default {
  components: {
    PaginationLink,
  },

  props: {
    page: {
      type: Number,
      required: true,
    },

    perPage: {
      type: Number,
      required: true,
    },

    total: {
      type: Number,
      required: true,
    },

    onSidesPagesNumber: {
      type: Number,
      default: 1,
    },
  },

  computed: {
    lastPage() {
      return Math.ceil(this.total / this.perPage);
    },

    hideToStart() {
      return this.onSidesPagesNumber * 2 - this.page >= -1;
    },

    hideToEnd() {
      return this.onSidesPagesNumber * 2 + this.page >= this.lastPage;
    },

    firstLinkNum() {
      if (this.page <= this.onSidesPagesNumber) {
        return 1;
      }

      if (this.page + this.onSidesPagesNumber >= this.lastPage) {
        return Math.max(1, this.page - this.onSidesPagesNumber * 2 + 1);
      }

      return this.page - this.onSidesPagesNumber;
    },

    lastLinkNum() {
      if (this.page <= this.onSidesPagesNumber) {
        return Math.min(this.lastPage, this.onSidesPagesNumber * 2);
      }

      if (this.page + this.onSidesPagesNumber >= this.lastPage) {
        return this.lastPage;
      }

      return this.page + this.onSidesPagesNumber;
    },

    range() {
      const length = this.lastLinkNum - this.firstLinkNum + 1;

      return Array.from({ length },(_, index) => index + this.firstLinkNum);
    },
  },

  methods: {
    to(page) {
      this.$emit('input', page);
    },
  },
};
</script>
