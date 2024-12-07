<script lang="ts" setup>
import { RouterLink } from 'vue-router'
const navItems = [
  { icon: 'build', label: 'Setup', route: '/setup' },
  { icon: 'deployed_code', label: 'Run', route: '/run' },
  { icon: 'summarize', label: 'Results', route: '/results' },
  { icon: 'settings', label: 'Settings', route: '/settings' },
]
</script>

<template>
  <aside class="h-full z-40 items-center flex mx-2">
    <nav
      class="flex flex-col gap-3 p-2 bg-bgray-50/50 backdrop-blur-lg border border-bgray-200 rounded-xl shadow-md"
    >
      <div class="flex flex-col gap-1">
        <RouterLink
          v-for="item in navItems"
          :key="item.route"
          :to="item.route"
          active-class="bg-blue-500 is-active hover:bg-blue-500 active:bg-blue-600"
          class="group relative flex flex-col items-center justify-center w-14 min-h-[48px] rounded-lg hover:bg-blue-100 active:bg-blue-200 transition-all duration-200"
        >
          <span
            class="mi text-xl text-gray-700 group-hover:text-blue-600 group-[.is-active]:text-blue-50"
            >{{ item.icon }}</span
          >
          <small
            class="text-xs font-medium text-gray-600 group-hover:text-blue-600 group-[.is-active]:text-blue-50"
            >{{ item.label }}</small
          >
        </RouterLink>
      </div>
      <hr class="border-gray-200 mx-1.5" />
      <div class="flex flex-col gap-1">
        <RouterLink
          to="/help"
          active-class="bg-gold-500 is-active hover:bg-gold-500 active:bg-gold-600"
          class="group relative flex flex-col items-center justify-center w-14 min-h-[48px] rounded-lg hover:bg-gold-50 active:bg-gold-100 transition-all duration-200"
        >
          <span
            class="mi text-xl text-gray-700 group-hover:text-gold-600 group-[.is-active]:text-gold-50"
            >help</span
          >
          <small
            class="text-xs font-medium text-gray-600 group-hover:text-gold-600 group-[.is-active]:text-gold-50"
            >Help</small
          >
        </RouterLink>
      </div>
    </nav>
  </aside>
</template>
