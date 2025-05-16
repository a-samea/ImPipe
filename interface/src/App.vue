<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import SideRail from '@/components/SideRail.vue'
import { RouterView } from 'vue-router'
import ToastContainer from '@/components/ToastContainer.vue'

import { useToast } from '@/composables/useToast'
const toast = useToast()
toast.success(200, 'Hello', 'Hello to the interface!', 2000)
</script>

<template>
  <div class="grid min-h-screen grid-rows-[64px_1fr]">
    <!-- Navbar -->
    <NavBar class="z-50" />

    <!-- Main Layout -->
    <div class="grid h-[calc(100vh-64px)] grid-cols-[auto_1fr]">
      <!-- Sidebar -->
      <SideRail />

      <!-- Main Content -->
      <main
        class="p-1 m-1.5 max-h-full overflow-y-auto custom-scrollbar"
      >
        <RouterView />
      </main>

      <!-- Toast Container -->
      <ToastContainer />
    </div>
  </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
