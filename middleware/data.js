import products from '~/data/products.json';

export default function ({ store }) {
  if (store.state.products.length === 0) {
    store.commit('setProducts', products);
  }
};
