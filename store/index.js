export const state = () => ({
  products: [],
  page: 1,
  perPage: 2,
  sortBy: null,
  sortOrder: null,
});

export const mutations = {
  setProducts(state, products = []) {
    state.products.splice(0, state.products.length, ...products);
  },

  addProduct(state, product) {
    state.products.splice(state.products.length, 0, product);
  },

  updateProduct(state, [product, key, value]) {
    state.products = state.products.map(item => {
      if (item.id === product.id) {
        return {
          ...item,
          [key]: value,
        }
      }

      return item;
    });
  },

  removeProduct(state, product) {
    state.products = state.products.filter(item => item.id !== product.id);
  },

  sort(state, { type, order }) {
    state.sortBy = type;
    state.sortOrder = order;
  },

  setPage(state, page) {
    state.page = page;
  },
};


const compareAsc = by => (a, b) => {
  if (a[by] < b[by]) {
    return -1;
  }
  if (a[by] > b[by]) {
    return 1;
  }

  return 0;
}

const compareDesc = by => {
  const compare = compareAsc(by);

  return (a, b) => -compare(a, b);
}

export const getters = {
  products(state) {
    let products = [...state.products];

    if (state.sortBy && state.sortOrder) {
      const compare = state.sortOrder === 'asc'
        ? compareAsc(state.sortBy)
        : compareDesc(state.sortBy);

      products.sort(compare);
    }

    if (products.length <= state.perPage) {
      return products;
    }

    return products.splice((state.page - 1) * state.perPage, state.perPage);
  },

  total(state) {
    return state.products.length;
  },

  maxId(state) {
    const products = [...state.products].sort(compareAsc('id'));

    if (products.length === 0) {
      return 0;
    }

    return products[products.length - 1].id;
  },
};
