import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/components/HomePage.vue';
import AboutPage from '@/components/AboutPage.vue';
import GalleryPage from '@/components/GalleryPage.vue';
import EventsPage from '@/components/EventItem.vue'; 
import HobbiesPage from '@/components/HobbiesList.vue'; 

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/gallery', component: GalleryPage },
  { path: '/events', component: EventsPage },
  { path: '/hobbies', component: HobbiesPage }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;