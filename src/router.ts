import { createRouter, createWebHistory } from 'vue-router';
import ButtonView from './views/ButtonView.vue';
import LineChartView from './views/LineChartView.vue';

const routes = [
  { path: '/', redirect: '/button' },
  { path: '/button', component: ButtonView },
  { path: '/line-chart', component: LineChartView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
