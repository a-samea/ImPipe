import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import LoginView from '@/views/LoginView.vue'
import firstView from '@/views/firstView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/first',
      name: 'first',
      component: firstView,
    },
    {
      path: '/',
      redirect: () => {
        const authStore = useAuthStore()
        return authStore.isAuthenticated ? '/first' : '/login'
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const isLoginRoute = to.name === 'login'

  // If authenticated and trying to access login page, redirect to first page
  if (isLoginRoute && authStore.isAuthenticated) {
    next({ name: 'first' })
  }
  // If trying to access a protected route and not authenticated
  else if (!isLoginRoute && !authStore.isAuthenticated) {
    next('/login')
  }
  // Otherwise, allow navigation
  else {
    next()
  }
})

export default router
