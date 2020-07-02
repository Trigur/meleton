<template>
  <div class="sort-row">
    Сортировка:
    
    <sort-toggle 
      v-for="item in types"
      :key="item.value"
      class="ml-2"
      :state="type === item.value && order"
      @click="sort(item.value)"
    >
      {{ item.label }}
    </sort-toggle>
  </div>
</template>

<script>
import SortToggle from '~/components/SortToggle.vue';

export default {
  components: {
    SortToggle,
  },

  props: {
    types: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      type: null,
      order: null,
    };
  },

  methods: {
    sort(type) {
      if (type === this.type) {
        if (this.order === 'desc') {
          this.type = null;
          this.order = null;
        } else {
          this.order = this.order === 'asc' ? 'desc' : 'asc';
        }
      } else {
        this.type = type;
        this.order = 'asc';
      }

      this.$emit('sort', {
        type: this.type,
        order: this.order,
      });
    },
  },
};
</script>

<style>
.sort-row {
  display: flex;
  justify-content: flex-end;
}
</style>