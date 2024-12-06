import { createRouter, createWebHistory } from 'vue-router'
import firstView from '@/views/firstView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

// TODO: incomplete
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/first',
      component: firstView,
    },
    {
      path: '/',
      component: NotFoundView,
    }
  ],
})



export default router
