import { useToastStore } from "@/stores/toastStore";

export function useToast() {
  const store = useToastStore()

  return {
    success(message: string, duration?: number) {
      store.addToast({ message, type: 'success', duration })
    },
    warning(message: string, duration?: number) {
      store.addToast({ message, type: 'warning', duration })
    },
    error(message: string, duration?: number) {
      store.addToast({ message, type: 'error', duration })
    },
  }
}
