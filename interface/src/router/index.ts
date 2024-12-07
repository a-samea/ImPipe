import { createRouter, createWebHistory } from 'vue-router'
import { useConnectionStore } from '@/stores/connectionStore'
import { useToast } from '@/composables/useToast'
import SetupView from '@/views/SetupView.vue'
import RunView from '@/views/RunView.vue'
import ResultView from '@/views/ResultView.vue'
import SettingView from '@/views/SettingView.vue'
import HelpView from '@/views/HelpView.vue'
import OfflineView from '@/views/OfflineView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: () => {
        const connectionStore = useConnectionStore()
        return connectionStore.isConnected ? '/setup' : '/500'
      }
    },
    {
      path: '/setup',
      component: SetupView,
      meta: { requieresAuth: true },
    },
    {
      path: '/run',
      component: RunView,
      meta: { requieresAuth: true },
    },
    {
      path: '/results',
      component: ResultView,
      meta: { requieresAuth: true },
    },
    {
      path: '/settings',
      component: SettingView,
      meta: { requieresAuth: true },
    },
    {
      path: '/help',
      component: HelpView,
      meta: { requieresAuth: false },
    },
    {
      path: '/500',
      component: OfflineView,
      meta: { requieresAuth: false },
    },
  ],
})

router.beforeEach((to, from) => {
  const connectionStore = useConnectionStore()
  const toast = useToast()
  if (to.path === '/500' && connectionStore.isConnected) {
    return from.path
  }
  if (to.meta.requieresAuth && !connectionStore.isConnected) {
    toast.error(500, 'Connection requiered', 'Please connect to the server first', 10000)
    return '/500'
  } else {
    return true
  }
})

export default router
