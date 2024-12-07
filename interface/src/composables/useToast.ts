import { useToastStore } from '@/stores/toastStore'

export function useToast() {
  const store = useToastStore()

  return {
    success(code:number, label: string, message?: string, duration?: number) {
      store.addToast({
        label: label,
        message: message,
        type: 'success',
        code: code,
        duration: duration,
      })
    },
    warning(code: number, label: string, message: string, duration?: number) {
      store.addToast({
        label: label,
        message: message,
        type: 'warning',
        code: code,
        duration: duration,
      })
    },
    error(code: number, label: string, message: string, duration?: number) {
      store.addToast({
        label: label,
        message: message,
        type: 'error',
        code: code,
        duration: duration,
      })
    },
  }
}
