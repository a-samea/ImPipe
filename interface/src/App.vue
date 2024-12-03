<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { watch } from 'vue'
import router from '@/router'

const authStore = useAuthStore()

// Initialize the authentication state
watch(
  () => authStore.isAuthenticated,
  (isAuthenticated) => {
    if (!isAuthenticated) {
      // Redirect to login if not authenticated
      router.push({ name: 'login' })
    }
  },
  { immediate: true },
)
</script>

<template>
  <div class="min-h-screen bg-stone-800 text-gray-50">
    <RouterView />
  </div>
</template>
