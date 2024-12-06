<script setup lang="ts">
import NavBar from '@/components/navbar.vue'
import SideRail from './components/siderail.vue'
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Sidebar -->
    <SideRail />

    <!-- Navbar -->
    <NavBar />

    <!-- Main Content -->
    <main class="ml-16 pt-16 min-h-screen">
      <div class="container mx-auto p-6">
        <RouterView />
      </div>
    </main>
  </div>
</template>
