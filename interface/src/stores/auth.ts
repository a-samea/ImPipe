import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
    apiKey: '',
    isValid: false,
  }),
  actions: {
    setAPIKey(key: string): void {
      this.apiKey = key
    },
    setLogState(state: boolean): void {
      this.isLoggedIn = state
    },
    validateAPIKey(): void {
      const pattern = /^!mP\S{13}$/
      this.isValid = pattern.test(this.apiKey)
    },
    async login(key: string): Promise<void> {
      this.setAPIKey(key)
      this.setLogState(true)
    },
    logout(): void {
      console.log('ridi')
      this.setAPIKey('')
      this.setLogState(false)
    },
  },
})
