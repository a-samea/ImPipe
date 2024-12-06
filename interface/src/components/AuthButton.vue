<!--Done-->
<script lang="ts" setup>
const props = defineProps<{
  loading?: boolean,
  loggedIn?: boolean,
}>()

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button class="w-28 py-2 px-2 rounded-md flex items-center justify-start disabled:transform-none disabled:cursor-wait disabled:opacity-50 disabled:active:transform-none focus:outline-none"
  type="button"
  :disabled="props.loading || false"
  @click="!props.loading && emit('click')"
  :class="{
    'hover:bg-blue-50 active:bg-blue-200/50 text-bgray-950 hover:text-blue-400': !props.loggedIn,
    'bg-red-500 hover:bg-red-500/75 active:bg-red-600 text-bgray-50 hover:text-red-50': props.loggedIn,
  }">

  <span
      v-if="!props.loading"
      class="mi text-xl transition-opacity"
    >
      {{ props.loggedIn ? 'logout' : 'login' }}
    </span>
    <span
      v-else
      class="mi text-xl animate-spin"
    >
      progress_activity
    </span>
    <span class="flex-grow align-baseline text-center font-normal text-sm">
      {{ props.loggedIn ? 'Logout' : 'Login' }}
    </span>

</button>

</template>
