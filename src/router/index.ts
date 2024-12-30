import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChatView1 from '../views/ChatView1.vue'
import ChatView2 from '../views/ChatView2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/chat1',
      name: 'chat1',
      component: ChatView1,
    },
    {
      path: '/chat2',
      name: 'chat2',
      component: ChatView2,
      props: true,
    },
  ],
})

export default router
