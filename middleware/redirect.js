export default function ({ route, redirect }) {
  const isProductsRoute = new RegExp(/products/, 'gi').test(route.path);

  if (!isProductsRoute) {
    return redirect({ name: 'products' });
  }
};
