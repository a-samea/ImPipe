<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import SideRail from '@/components/SideRail.vue'
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
      <main class="p-2 h-full">
        <RouterView />
      </main>
    </div>
  </div>
</template>
