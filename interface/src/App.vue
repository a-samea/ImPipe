<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import SideRail from '@/components/SideRail.vue'
import { RouterView } from 'vue-router'
import ToastContainer from '@/components/ToastContainer.vue'


import { useToast } from '@/composables/useToast'

const toast = useToast()

// Show success toast
toast.success('Operation completed! sdgdfgdfgdgfdg dffgdfgdfgfd  dfgrgdffgedt dghdffgadghyfhfgb sthdfgatrhb stgertgdrg')

// Show warning toast that stays longer
toast.warning('Connection unstable', 5000)

// Show error toast that doesn't auto-dismiss
toast.error('Failed to connect', 3000)
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
      <main class="p-2 h-full">
        <RouterView />
      </main>

      <!-- Toast Container -->
      <ToastContainer />
    </div>
  </div>
</template>
