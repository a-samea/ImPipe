
// TODO: implement

<script lang="ts" setup>
const navItems = [
  { icon: 'home', label: 'Setup', route: '/' },
  { icon: 'search', label: 'Run', route: '/search' },
  { icon: 'notifications', label: 'Results', route: '/notifications' },
  { icon: 'settings', label: 'Settings', route: '/settings' },
]

const bottomItems = [
  { icon: 'logout', label: 'Help', route: '/logout' }
]
</script>


<template>
  <aside class="h-full z-40 items-center flex  mx-2">
    <nav class="flex flex-col gap-2 p-2.5 bg-bgray-50 backdrop-blur-lg border border-bgray-200 rounded-xl shadow-lg min-w-[72px]">
      <!-- Top Navigation Items -->
      <div class="flex flex-col gap-2">
        <button
          v-for="item in navItems"
          :key="item.icon"
          class="group relative flex flex-col items-center justify-center w-16 min-h-[48px] rounded-lg hover:bg-blue-50 active:bg-blue-100 transition-all duration-200"
        >
          <span class="mi text-xl text-gray-700 group-hover:text-blue-600">{{ item.icon }}</span>
          <small class="text-xs font-medium text-gray-600 group-hover:text-blue-600">{{ item.label }}</small>
        </button>
      </div>

      <hr class="border-gray-200 mx-2" />

      <!-- Bottom Navigation Items -->
      <div class="flex flex-col gap-2">
        <button
          v-for="item in bottomItems"
          :key="item.icon"
          class="group relative flex flex-col items-center justify-center w-16 min-h-[48px] rounded-lg hover:bg-blue-50 active:bg-blue-100 transition-all duration-200"
        >
          <span class="mi text-xl text-gray-700 group-hover:text-blue-600">{{ item.icon }}</span>
          <small class="text-xs font-medium text-gray-600 group-hover:text-blue-600">{{ item.label }}</small>
        </button>
      </div>
    </nav>
  </aside>
</template>
