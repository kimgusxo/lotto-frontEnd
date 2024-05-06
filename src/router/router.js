import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/components/page/MainPage.vue';
import CalendarPage from '@/components/page/CalendarPage.vue';
import RoundInfoPage from '@/components/page/RoundInfoPage.vue';
import NumberInfoPage from '@/components/page/NumberInfoPage.vue';
import StatisticsPage from '@/components/page/StatisticsPage.vue';
import DrawNumberPage from '@/components/page/DrawNumberPage.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: MainPage },
    { path: '/round', component: RoundInfoPage },
    { path: '/number', component: NumberInfoPage },
    { path: '/calendar', component: CalendarPage },
    { path: '/statistics', component: StatisticsPage },
    { path: '/draw', component: DrawNumberPage },
  ]
});
