<script setup lang="ts">
import NavBar from '@/components/navbar.vue'
import SideRail from './components/siderail.vue'
import { RouterView } from 'vue-router'
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
      <main class="bg-red-100 text-white p-4 h-full border-8 border-red-500">
        <RouterView />
      </main>
    </div>
  </div>
</template>
