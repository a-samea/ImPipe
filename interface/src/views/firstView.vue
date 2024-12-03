<template>
  <div class="p-4">
    <h1 class="text-2xl mb-4">First View</h1>
    <button
      @click="handleLogout"
      class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      Logout
    </button>
  </div>
  <button @click="toggleDarkMode" class="p-2 bg-orange-500 text-white rounded">
    {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
  </button>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

const isDarkMode = ref(false)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark', isDarkMode.value)
  localStorage.setItem('darkMode', isDarkMode.value.toString())
}

onMounted(() => {
  const savedMode = localStorage.getItem('darkMode')
  if (savedMode) {
    isDarkMode.value = savedMode === 'true'
    document.documentElement.classList.toggle('dark', isDarkMode.value)
  }
})

const authStore = useAuthStore()
const router = useRouter()

const handleLogout = () => {
  authStore.logout()
  router.push({ name: 'login' })
}
</script>
