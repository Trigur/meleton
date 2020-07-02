import Vue from 'vue';
import Container from '~/components/layout/Container.vue';
import Grid from '~/components/layout/Grid.vue';
import Title from '~/components/layout/Title.vue';

const components = { Container, Grid, Title };

Object.entries(components).forEach(([name, component]) => {
  Vue.component(`L${name}`, component);
});
