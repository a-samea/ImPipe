import { defineStore } from 'pinia'

interface Toast {
  id: string
  message: string
  type: 'success' | 'warning' | 'error'
  duration?: number
  percentage: number
}

export const useToastStore = defineStore('toast', {
  state: () => ({
    toasts: [] as Toast[],
  }),
  actions: {
    addToast(toast: Omit<Toast, 'id' | 'percentage'>) {
      const uuid = () => (Math.random() + Date.now()).toString(36).substring(2)
      const id = uuid()
      const percentage = toast.duration && toast.duration > 0 ? 100 : 0

      this.toasts.push({ ...toast, id, percentage })

      if (toast.duration && toast.duration > 0) {
        const startTime = Date.now()
        const interval = setInterval(() => {
          const elapsed = Date.now() - startTime
          const remaining = Math.max(0, toast.duration! - elapsed)
          const percentage = (remaining / toast.duration!) * 100

          const toastIndex = this.toasts.findIndex((t) => t.id === id)
          if (toastIndex === -1) {
            clearInterval(interval)
            return
          }

          this.toasts[toastIndex].percentage = percentage

          if (percentage <= 0) {
            clearInterval(interval)
            this.removeToast(id)
          }
        }, 100)
      }
    },
    removeToast(id: string) {
      this.toasts = this.toasts.filter((t) => t.id !== id)
    },
  },
})
